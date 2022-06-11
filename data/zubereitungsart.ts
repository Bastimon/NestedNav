export enum Zubereitungstyp {
  Braten,
  Backen,
  Kochen,
  Panieren,
  Stampfen,
}

export class Zubereitungsart {
  typ: Zubereitungstyp;
  text: string;

  constructor(typ: Zubereitungstyp, text: string) {
    (this.typ = typ), (this.text = text);
  }
}
