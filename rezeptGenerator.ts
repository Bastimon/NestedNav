import {TouchableHighlightBase} from 'react-native';
import {gemuese} from './data/gemuese';
import {gewuerze} from './data/gewuerze';
import {Gewürzmischung} from './data/gewürzmischung';
import {kohlenhydrate} from './data/kohlenhydrate';
import {Protein} from './data/protein';
import {proteinquelle} from './data/proteine';
import {Sauce} from './data/sauce';
import {saucen} from './data/saucen';
import {Zubereitungsart} from './data/zubereitungsart';
import {Zutat} from './data/zutat';
export class RezeptGenerator {
  private _chosenProtein!: Protein;
  public get chosenProtein(): Protein {
    return this._chosenProtein;
  }
  private set chosenProtein(value: Protein) {
    this._chosenProtein = value;
  }
  private _chosenKohlenhydrat!: Zutat;
  public get chosenKohlenhydrat(): Zutat {
    return this._chosenKohlenhydrat;
  }
  private set chosenKohlenhydrat(value: Zutat) {
    this._chosenKohlenhydrat = value;
  }
  private _chosenGemüse!: Zutat;
  public get chosenGemüse(): Zutat {
    return this._chosenGemüse;
  }
  private set chosenGemüse(value: Zutat) {
    this._chosenGemüse = value;
  }
  private _chosenSauce!: Sauce;
  public get chosenSauce(): Sauce {
    return this._chosenSauce;
  }
  private set chosenSauce(value: Sauce) {
    this._chosenSauce = value;
  }
  private _chosenGewürzmischung!: Gewürzmischung;
  public get chosenGewürzmischung(): Gewürzmischung {
    return this._chosenGewürzmischung;
  }
  private set chosenGewürzmischung(value: Gewürzmischung) {
    this._chosenGewürzmischung = value;
  }

  constructor() {
    this.init(false);
  }

  public init(isVegan: boolean): void {
    this.chosenProtein = isVegan
      ? this.getRandomProtein(proteinquelle.filter(_ => _.isVegan))
      : this.getRandomProtein(proteinquelle);

    this.chosenKohlenhydrat = this.getRandomZutat(kohlenhydrate);
    this.chosenGemüse = this.getRandomZutat(gemuese);
    this.chosenSauce = isVegan
      ? this.getRandomSauce(saucen.filter(_ => _.isVegan))
      : this.getRandomSauce(saucen);

    this.chosenGewürzmischung = this.getRandomGewürzMischung();
    console.log('Protein:\n' + JSON.stringify(this.chosenProtein));
    console.log('Proteine:\n' + JSON.stringify(proteinquelle));
  }

  private getRandomGewürzMischung() {
    return gewuerze[Math.floor(Math.random() * gewuerze.length)];
  }

  private getRandomSauce(saucen: Sauce[]) {
    return saucen[Math.floor(Math.random() * saucen.length)];
  }

  private getRandomZutat(zutaten: Zutat[]) {
    return zutaten[Math.floor(Math.random() * zutaten.length)];
  }
  private getRandomProtein(protein: Protein[]) {
    return protein[Math.floor(Math.random() * protein.length)];
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

  public generateAbschluss(): string {
    let text = '';
    text += this.chosenProtein.name + ' und ' + this.chosenGemüse.name;
    text += ' zusammen mit ' + this.chosenKohlenhydrat + ' servieren.';
    return text;
  }
  
}
