import {TouchableHighlightBase} from 'react-native';
import {gemuese} from './data/gemuese';
import {gewuerze} from './data/gewuerze';
import {Gewürzmischung} from './data/gewürzmischung';
import {kohlenhydrate} from './data/kohlenhydrate';
import {proteinquelle} from './data/proteine';
import {Sauce} from './data/sauce';
import {saucen} from './data/saucen';
import {Zubereitungsart} from './data/zubereitungsart';
import {Zutat} from './data/zutat';
export class RezeptGenerator {
  private chosenProtein!: Zutat;
  private chosenKohlenhydrat!: Zutat;
  private chosenGemüse!: Zutat;
  private chosenSauce!: Sauce;
  private chosenGewürzmischung!: Gewürzmischung;

  constructor() {
    this.init(false);
  }

  public init(isVegan: boolean): void {
    this.chosenProtein = isVegan
      ? this.getRandomZutat(proteinquelle.filter(_ => _.vegan))
      : this.getRandomZutat(proteinquelle);
    this.chosenKohlenhydrat = this.getRandomZutat(kohlenhydrate);
    this.chosenGemüse = this.getRandomZutat(gemuese);
    this.chosenSauce = this.getRandomSauce();
    this.chosenGewürzmischung = this.getRandomGewürzMischung();
  }

  private generateProteinText(): string {
    let text = '';
    text = this.getTextbaustein(this.chosenProtein);
    return text;
  }

  private generateHydrateText(): string {
    let text = '';
    text = this.getTextbaustein(this.chosenKohlenhydrat);
    return text;
  }

  private generateGemueseText(): string {
    let text = '';
    text = this.getTextbaustein(this.chosenGemüse);
    return text;
  }

  private generateSauceText(): string {
    let text = this.chosenSauce.zubereitung;
    return text;
  }

  private getRandomGewürzMischung() {
    return gewuerze[Math.floor(Math.random() * gewuerze.length)];
  }

  private getRandomSauce() {
    return saucen[Math.floor(Math.random() * saucen.length)];
  }

  private getRandomZutat(zutaten: Zutat[]) {
    return zutaten[Math.floor(Math.random() * zutaten.length)];
  }

  private getTextbaustein(zutat: Zutat): string {
    let rand = Math.floor(Math.random() * zutat.zubereitungsarten.length);
    return zutat.zubereitungsarten[rand].text;
  }

  public generateTitle(): string {
    let text = '';
    text += this.chosenProtein.name + ' ';
    text += 'mit ';
    text += this.chosenKohlenhydrat.name + ' ';
    text += 'und ';
    text += this.chosenGemüse.name + ' ';
    text += 'in ';

    text += this.chosenSauce.mitGewürzen
      ? this.chosenGewürzmischung.name + ' gewürzter ' + this.chosenSauce.name
      : this.chosenSauce.name;

    return text;
  }

  public generateZutatenliste(): string {
    let text = '';
    text += this.getZutatZutatenlistText(this.chosenProtein);
    text += this.getZutatZutatenlistText(this.chosenKohlenhydrat);
    text += this.getZutatZutatenlistText(this.chosenGemüse);
    text += this.chosenSauce.mitGewürzen
      ? this.chosenGewürzmischung.mengen.join('\n')
      : '';

    text += '\n';
    text += this.chosenSauce.zutaten.join('\n');

    return text;
  }

  private getZutatZutatenlistText(zutat: Zutat) {
    return zutat.menge + 'g ' + zutat.name + '\n';
  }

  public generateRezept(): string {
    let tempText =
      this.generateProteinText() +
      this.generateHydrateText() +
      this.generateGemueseText() +
      this.generateSauceText();

    return tempText;
  }
}
