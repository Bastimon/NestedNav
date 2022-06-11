import {Gewürzmischung} from './gewürzmischung';
import {Gewürz} from './gewürz';
import {Zutat} from './zutat';

export const gewuerze: Gewürzmischung[] = [
  new Gewürzmischung(0, 'afrikanisch', [
    new Gewürz('Thymian', 1, 'TL'),
    new Gewürz('Paprikapulver', 1, 'TL'),
    new Gewürz('Pfeffer', 1, 'TL'),
    new Gewürz('Sumach', 1, 'TL'),
    new Gewürz('Muskat', 'etwas', ''),
    new Gewürz('Salz', 'etwas', ''),
  ]),
  new Gewürzmischung(1, 'ungarisch', [
    new Gewürz('Thymian', 1, 'TL'),
    new Gewürz('Majoran', 1, 'TL'),
    new Gewürz('geräuchertes Paprikapulver', 2, 'TL'),
    new Gewürz('Sumach', 1, 'TL'),
    new Gewürz('Muskat', 'etwas', ''),
    new Gewürz('Salz', 'etwas', ''),
  ]),
  new Gewürzmischung(2, 'indisch', [
    new Gewürz('Tandoori Masala', 2, 'TL'),
    new Gewürz('Garam Masala', 2, 'TL'),
    new Gewürz('Madras Currypulver', 1, 'TL'),
    new Gewürz('Kreuzkümmel', 1, 'TL'),
  ]),
  new Gewürzmischung(3, 'mexikanisch', [
    new Gewürz('Korianderpulver', '1/2 TL', ''),
    new Gewürz('Pfeffer', 1, 'TL'),
    new Gewürz('Paprikapulver', 1, 'TL'),
    new Gewürz('Kreuzkümmel', 1, 'TL'),
    new Gewürz('Chilipulver', 'etwas', ''),
  ]),
  new Gewürzmischung(4, 'italienisch', [
    new Gewürz('Basilikum', 1, 'TL'),
    new Gewürz('Oregano', 1, 'TL'),
    new Gewürz('Thymian', 1, 'TL'),
    new Gewürz('Pfeffer', 1, 'TL'),
    new Gewürz('Rosmarin', '1/2 TL', ''),
    new Gewürz('Salz', 'etwas', ''),
  ]),
];
