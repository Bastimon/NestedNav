import {Gewürz} from './gewürz';
import {Zubereitungsart} from './zubereitungsart';
import {Zutat} from './zutat';

export class Protein extends Zutat {
  zusatzGewürze: Gewürz[];

  constructor(
    id: number,
    name: string,
    zubereitungsarten: Zubereitungsart[],
    menge: number,
    vegan: boolean,
    zusatzGewürze: Gewürz[] = [],
  ) {
    super(id, name, zubereitungsarten, menge, vegan);
    this.zusatzGewürze = zusatzGewürze;
  }
}
