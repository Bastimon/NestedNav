import {Zubereitungsart} from './zubereitungsart';

export class Zutat {
  id: number;
  name: string;
  zubereitungsarten: Zubereitungsart[];
  menge: number;
  vegan: boolean;
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
    this.vegan = vegan;
  }
  public getMengeinGramm(): string {
    return this.menge + 'g';
  }
}
