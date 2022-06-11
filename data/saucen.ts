import { Sauce } from './sauce';

export const saucen: Sauce[] = [
  new Sauce(
    0,
    'Tomatensauce',
    ['700g passierte Tomaten'],
    'Die passierte Tomaten zusammen mit den Gewürzen zum Rest geben und aufkochen lassen.',
    true,
  ),
  new Sauce(
    1,
    'Sahnesauce',
    ['250g Sahne'],
    'Die Sahne zusammen mit den Gewürzen zu dem Rest geben und aufkochen lassen.',
    true,
  ),
  new Sauce(
    2,
    'Erdnussauce',
    ['700g passierte Tomate', '150g Erdnusscreme'],
    'Die passierten Tomaten zusammen mit der Erdnusscreme und den Gewürzen aufkochen lassen.',
    true,
  ),
  new Sauce(
    3,
    'Weißwein Bechamélsauce',
    ['50g Mehl', '50g Butter oder Magarine', '250ml Milch', '150ml Weißwein'],
    'Die Butter in einem Topf schmelzen, das Mehl darin verrühren sodass es keine Klumpen bildet. Sobald das Mehl dunkler wird, die Milch und den Wein dazu geben. Währenddessen die ganze Zeit rühren. Mit etwas Salz und Pfeffer abschmecken.',
    false,
  ),
  new Sauce(
    4,
    'Asiasauce',
    [
      '2EL Sojasauce',
      '2EL geröstetes Sesamöl',
      '2EL Sriacha Sauce',
      '1EL Reisessig',
      '2EL Wasser',
      '1TL Stärke',
    ],
    'Die Zutaten für die Sauce in einer Schale verquirlen bis die Stärke keine Klumpen mehr bildet. Die Flüssigkeit in die Pfanne geben und aufkochen lassen.',
    false,
  ),
];
