import { types } from '@babel/core';
import { Protein } from './protein';
import { Zubereitungsart, Zubereitungstyp } from './zubereitungsart';
import { Zutat } from './zutat';

const fleischVorbereiten =
  'Das Fleisch jeweils in ca 2 cm breite Streifen schneiden.';

const fleischBraten = new Zubereitungsart(
  Zubereitungstyp.Braten,
  fleischVorbereiten +
  'Das Fleisch in eine heiße Pfanne mit Öl geben und für etwa 6 Minuten von allen Seiten braun braten.',
);

const linsenVorbereiten =
  'Die Linsen waschen und dabei mehrmals das Wasser wechseln, bis das Wasser nicht mehr trüb wird.';
const linsenKochen = new Zubereitungsart(
  Zubereitungstyp.Kochen,
  linsenVorbereiten +
  ' Die Linsen 15 Minuten in kochendem Wasser garen. Alternativ können die Linsen auch in der Sauce mitgekocht werden. Das dauert jedoch länger bis die Linsen weich sind.',
);

const tofuVorbereiten =
  'Den Tofu mit einem schweren Buch oder einer Presse auspressen.';

const tofuBraten = new Zubereitungsart(
  Zubereitungstyp.Braten,
  tofuVorbereiten +
  'Den Tofu in Streifen schneiden und für ca. 10 Minuten von allen Seiten knusprig braten',
);
const tofuBacken = new Zubereitungsart(
  Zubereitungstyp.Braten,
  tofuVorbereiten +
  'In einer Schale etwas Öl, Salz, Pfeffer und Kräuter verquirlen. Den Tofu in Würfel schneiden und mit der Marinade vermischen. Die Tofuwürfel auf einem Backblech verteilen und für 30 Minuten bei 200° im Ofen backen.',
);

const tofuPanieren = new Zubereitungsart(
  Zubereitungstyp.Panieren,
  tofuVorbereiten +
  'Den Tofu in Scheiben schneiden. In einer Schüssel Stärke mit etwas Salz vermischen. Die Tofu Scheiben hinlegen und von allen Seiten mit der Stärke bedecken. Anschließend den panierten Tofu in einer heißen Pfanne mit Öl ca. 10 Minuten von allen Seiten knusprig braten.',
);

const sojageschnezeltesBraten = new Zubereitungsart(
  Zubereitungstyp.Braten,
  'Das getrocknete Geschnetzelte mit kochendem Wasser übergißene und etwa 5 Minuten stehen lassen. ' +
  'Die Gewürze für das Geschnetzelte in einer Schüssel vermischen. Nachdem das Geschnetzelte aufgequollen ist, das Wasser ' +
  'abgießen und das Geschnetzelte auspressen. Das funktioniert am besten mit einer Kartoffelpresse.' +
  'Die ausgepressten Schnetzel mit der Gewürzpaste vermischen. ',
);

const vegan = true;
const nichtVegan = false;

export let proteinquelle: Protein[] = [
  new Protein(0, 'rote Linsen', [linsenKochen], 200, vegan),
  new Protein(1, 'Tofu', [tofuBacken, tofuBraten, tofuPanieren], 400, vegan),
  new Protein(2, 'Sojageschnezeltes', [sojageschnezeltesBraten], 100, vegan, [
    '2TL Knoblauchpulver',
    '1TL Zwiebelpulver',
    'ein paar Tropfen Liquidsmoke',
    '1TL Kreuzkümmel',
    '2TL Sojasauce',
    '1TL Ahornsirup',
    '1TL Gemüsebrühe oder Glutamat',
    '1/2TL Senf',
    '1TL Tomatenmark',
    '3EL Wasser',
  ]),
  new Protein(3, 'Schweinefleisch', [fleischBraten], 250, nichtVegan),
  new Protein(4, 'Hünchen', [fleischBraten], 250, nichtVegan),
  new Protein(5, 'Rind', [fleischBraten], 250, nichtVegan),
  // new Zutat('Erbsen', ['braten', 'kochen', 'stampfen'], 250),
];

export function setProteinquelle(proteine: Protein[]) {
  proteinquelle = proteine;
}