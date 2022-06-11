import {Gewürz} from './gewürz';

export class Gewürzmischung {
  id: number;
  name: string;
  gewürzZutat: Gewürz[];

  constructor(id: number, name: string, mengen: Gewürz[]) {
    this.id = id;
    this.name = name;
    this.gewürzZutat = mengen;
  }
}
