export class Sauce {
  id: number;
  name: string;
  zutaten: string[];
  zubereitung: string;
  mitGewürzen: boolean;

  constructor(
    id: number,
    name: string,
    zutaten: string[],
    zubereitung: string,
    mitGewürzen: boolean,
  ) {
    this.id = id;
    (this.name = name),
      (this.zutaten = zutaten),
      (this.zubereitung = zubereitung),
      (this.mitGewürzen = mitGewürzen);
  }
}
