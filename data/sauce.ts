import {Gewürz} from './gewürz';

export class Sauce {
  id: number;
  name: string;
  zutaten: Gewürz[];
  zubereitung: string;
  mitGewürzen: boolean;
  isVegan: boolean;

  constructor(
    id: number,
    name: string,
    zutaten: Gewürz[],
    zubereitung: string,
    mitGewürzen: boolean,
    isVegan: boolean,
  ) {
    this.id = id;
    this.name = name;
    this.zutaten = zutaten;
    this.zubereitung = zubereitung;
    this.mitGewürzen = mitGewürzen;
    this.isVegan = isVegan;
  }
  public getZubereitungsText(): string {
    return this.zubereitung;
  }
}
