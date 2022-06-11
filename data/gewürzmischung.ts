export class Gewürzmischung {
  id: number;
  name: string;
  mengen: string[];

  constructor(id: number, name: string, mengen: string[]) {
    this.id = id;
    this.name = name;
    this.mengen = mengen;
  }
}
