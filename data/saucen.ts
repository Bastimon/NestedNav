import {Gewürz} from './gewürz';
import {Sauce} from './sauce';

const vegan = true;
const nichtVegan = false;
const mitGewürzen = true;
const ohneGewürze = false;

export const saucen: Sauce[] = [
  new Sauce(
    0,
    'Tomatensauce',
    [new Gewürz('passierte Tomaten', 700, 'g')],
    'Die passierte Tomaten zusammen mit den Gewürzen zum Rest geben und aufkochen lassen.',
    mitGewürzen,
    vegan,
  ),
  new Sauce(
    1,
    'Sahnesauce',
    [new Gewürz('Sahne', 250, 'g')],
    'Die Sahne zusammen mit den Gewürzen zu dem Rest geben und aufkochen lassen.',
    mitGewürzen,
    nichtVegan,
  ),
  new Sauce(
    2,
    'veganer Sahnesauce',
    [new Gewürz('Sojasahne', 250, 'g')],
    'Die Sahne zusammen mit den Gewürzen zu dem Rest geben und aufkochen lassen.',
    mitGewürzen,
    vegan,
  ),
  new Sauce(
    3,
    'Erdnussauce',
    [
      new Gewürz('passierte Tomaten', 700, 'g'),
      new Gewürz('Erdnusscreme', 150, 'g'),
    ],
    'Die passierten Tomaten zusammen mit der Erdnusscreme und den Gewürzen aufkochen lassen.',
    mitGewürzen,
    vegan,
  ),
  new Sauce(
    4,
    'Weißwein Bechamélsauce',
    [
      new Gewürz('Butter', 50, 'g'),
      new Gewürz('Mehl', '2 gehäufte EL', ''),
      new Gewürz('Milch', 500, 'ml'),
      new Gewürz('Weißwein', 100, 'ml'),
      new Gewürz('Salz und Pfeffer', 'etwas', ''),
    ],
    'Die Butter in einem Topf schmelzen, das Mehl darin verrühren sodass es keine Klumpen bildet. Sobald das Mehl dunkler wird, die Milch und den Wein dazu geben. Währenddessen die ganze Zeit rühren. Aufkochen lassen, bis die Sauce gebunden wurde. Mit etwas Salz und Pfeffer abschmecken.',
    ohneGewürze,
    nichtVegan,
  ),
  new Sauce(
    5,
    'veganer Weißwein Bechamélsauce',
    [
      new Gewürz('Magarine', 50, 'g'),
      new Gewürz('Mehl', '2 gehäufte EL', ''),
      new Gewürz('Sojamilch ungesüßt', 500, 'ml'),
      new Gewürz('Weißwein', 100, 'ml'),
      new Gewürz('Salz und Pfeffer', 'etwas', ''),
    ],
    'Die Magarine in einem Topf schmelzen, das Mehl darin verrühren sodass es keine Klumpen bildet. Sobald das Mehl dunkler wird, die Milch und den Wein dazu geben. Währenddessen die ganze Zeit rühren. Mit etwas Salz und Pfeffer abschmecken.',
    ohneGewürze,
    vegan,
  ),
  new Sauce(
    6,
    'Asiasauce',
    [
      new Gewürz('Sojasauce', 2, 'EL'),
      new Gewürz('geröstetes Sesamöl', 2, 'EL'),
      new Gewürz('Sriacha Sauce', 2, 'EL'),
      new Gewürz('Reisessig', 1, 'EL'),
      new Gewürz('Wasser', 2, 'EL'),
      new Gewürz('Stärke', 1, 'TL'),
    ],
    'Die Zutaten für die Sauce in einer Schale verquirlen bis die Stärke keine Klumpen mehr bildet. Die Flüssigkeit in die Pfanne geben und aufkochen lassen.',
    ohneGewürze,
    vegan,
  ),
];
