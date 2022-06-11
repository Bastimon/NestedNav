import { Zubereitungsart, Zubereitungstyp } from './zubereitungsart';
import { Zutat } from './zutat';

const anbratenText =
  'Das Gemüse in die Pfanne geben und ca. 5 Minuten mitbraten';
const dünstenText =
  'Gemüse putzen und in Streifen schneiden und ca. 5 Minuten mitbraten';
const backenText =
  'Gemüse putzen und in Streifen schneiden und ca. 5 Minuten mitbraten';

const anbratenSuffix =
  'Anschließend in die Pfanne geben und für 5 Minuten mitbraten.';
const backenSuffix = '';

const brokkoliVorbereitung =
  'Den Brokkoli putzen und anschließend in Rösschen schneiden. Den Strunk schälen und klein schneiden.';
const brokkoliKochen = new Zubereitungsart(
  Zubereitungstyp.Kochen,
  brokkoliVorbereitung +
  'Alles in reichlich kochendem Salzwasser etwa 5 Minuten bissfest garen',
);

const paprikaVorbereitung =
  'Die Paprika putzen und entkernen. Anschließend Paprika in feine Streifen schneiden.';
const paprikaBraten = new Zubereitungsart(
  Zubereitungstyp.Braten,
  paprikaVorbereitung + anbratenSuffix,
);

const pilzeVorbereitung =
  'Die Pilze putzen. Anschließend die Pilze in Scheiben schneiden.';
const pilzeBraten = new Zubereitungsart(
  Zubereitungstyp.Braten,
  pilzeVorbereitung + anbratenSuffix,
);

const zucchiniVorbereitung =
  'Die Zucchini putzen und in Scheiben oder Würfel schneiden.';
const zucchiniBraten = new Zubereitungsart(
  Zubereitungstyp.Braten,
  zucchiniVorbereitung + anbratenSuffix,
);

const kürbisVorbereitung =
  'Den Kürbis putzen und halbieren. Mit einem Löffel die Kerne und Fasern herausslösen. Den Rest des Kürbis in mundgerechte Würfel schneiden.';
const kürbisBacken = new Zubereitungsart(
  Zubereitungstyp.Backen,
  kürbisVorbereitung +
  ' Die Stücke auf einem Backblech verteilen. 1EL Öl, 1/2 TL Salz, 1/2TL Pfeffer, 1/2 TL Curry Pulver vermischen und die Kürbisstücke damit bepinseln. Den Kürbis bei 200° Grad für 30 Minuten im Ofen rösten.',
);

const spinatVorbereitung =
  'Den Spinat waschen und mit einem Tuch oder einer Salatschleuder vom Wasser befreien.';
const spinatKochen = new Zubereitungsart(
  Zubereitungstyp.Kochen,
  spinatVorbereitung +
  'Spinat in die Pfanne geben und solange mitkochen, bis er eingefallen ist.',
);

const pakChoiVorbereiten =
  'Den Pak Choi waschen und mit einem Tuch oder einer Salatschleuder vom Wasser befreien.';
const pakChoiBraten = new Zubereitungsart(
  Zubereitungstyp.Braten,
  pakChoiVorbereiten + 'Pak Choi in die Pfanne geben und kurz mitanbraten',
);

const aubergineVorbereitung =
  'Die Aubergine putzen und in etwa 1cm große Scheiben schneiden.';
const aubergineBraten = new Zubereitungsart(
  Zubereitungstyp.Braten,
  aubergineVorbereitung +
  'Anschließend die Aubergine für ca. 10 Minuten anbraten.',
);

const blumenkohlVorbereitung =
  'Den Blumenkohl putzen und anschließend in Rösschen schneiden.';
const blumenkohlKochen = new Zubereitungsart(
  Zubereitungstyp.Kochen,
  blumenkohlVorbereitung +
  'Alles in reichlich kochendem Salzwasser etwa 5 Minuten bissfest garen',
);

const vegan = true;

export const gemuese: Zutat[] = [
  new Zutat(0, 'Paprika', [paprikaBraten], 400, vegan),
  new Zutat(1, 'Pak Choi', [pakChoiBraten], 400, vegan),
  new Zutat(2, 'Zucchini', [zucchiniBraten], 500, vegan),
  new Zutat(2, 'Brokkoli', [brokkoliKochen], 400, vegan),
  new Zutat(3, 'Blumenkohl', [blumenkohlKochen], 400, vegan),
  new Zutat(4, 'Pilze', [pilzeBraten], 500, vegan),
  new Zutat(5, 'Kürbis', [kürbisBacken], 500, vegan),
  new Zutat(6, 'Spinat', [spinatKochen], 400, vegan),
  new Zutat(7, 'Aubergine', [aubergineBraten], 400, vegan),
];
