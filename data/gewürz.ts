export class Gewürz {
  name: string;
  menge: number | string;
  einheit: string;
  constructor(name: string, menge: number | string, einheit: string) {
    this.name = name;
    this.einheit = einheit;
    this.menge = menge;
  }

  public getDescription(): string {
    return typeof this.menge == 'number'
      ? this.menge + ' ' + this.einheit
      : this.menge;
  }
}
