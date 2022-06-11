import {Zubereitungsart} from './zubereitungsart';

export class Zutat {
  id: number;
  name: string;
  zubereitungsarten: Zubereitungsart[];
  menge: number;
  isVegan: boolean;

  constructor(
    id: number,
    name: string,
    zubereitungsarten: Zubereitungsart[],
    menge: number,
    vegan: boolean,
  ) {
    this.id = id;
    this.name = name;
    this.zubereitungsarten = zubereitungsarten;
    this.menge = menge;
    this.isVegan = vegan;
  }

  public getMengeinGramm(): string {
    return this.menge + 'g';
  }
  public getZubereitungsText(): string {
    let rand = Math.floor(Math.random() * this.zubereitungsarten.length);
    return this.zubereitungsarten[rand].text;
  }
}
