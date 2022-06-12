import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {FAB, Provider, Switch, Text, TextInput} from 'react-native-paper';
import DropDown from 'react-native-paper-dropdown';
import {Protein} from '../data/protein';
import {Zubereitungsart, Zubereitungstyp} from '../data/zubereitungsart';
import {Zutat} from '../data/zutat';
import {Storage, StorageKey} from '../storage';
import {styles} from './styles';

let newZutat = new Zutat(
  0,
  '',
  [new Zubereitungsart(Zubereitungstyp.Braten, '')],
  0,
  false,
);

const proteinQuelle = 'Proteinquelle';
const kohlenhydrate = 'Kohlenhydrate';
const gemuese = 'Gemüse';

async function saveData(typ: string, data: Zutat) {
  console.log('Saving ' + typ + JSON.stringify(data));
  let storage = new Storage();
  switch (typ) {
    case proteinQuelle:
      console.log('bindrin');
      await storage.storeData(
        StorageKey.PROTEIN,
        new Protein(
          data.id,
          data.name,
          data.zubereitungsarten,
          data.menge,
          data.isVegan,
        ),
      );
      break;
    case kohlenhydrate:
      await storage.storeData(StorageKey.KOHLENHYDRAT, data);
      break;
    case gemuese:
      await storage.storeData(StorageKey.GEMUESE, data);
      break;
    default:
      break;
  }
}

export function ZutatScreen() {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = (value: boolean) => {
    newZutat.isVegan = value;
    setIsSwitchOn(!isSwitchOn);
  };

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [pickedItem, setPickedItem] = useState('');

  const [items, setItems] = useState([
    {label: proteinQuelle, value: proteinQuelle},
    {label: kohlenhydrate, value: kohlenhydrate},
    {label: gemuese, value: gemuese},
  ]);

  return (
    <Provider>
      <ScrollView>
        <View style={styles.paddingForm}>
          <DropDown
            label={'Typ'}
            mode={'flat'}
            visible={open}
            showDropDown={() => setOpen(true)}
            onDismiss={() => setOpen(false)}
            value={pickedItem}
            setValue={setPickedItem}
            list={items}
          />
        </View>
        <TextInput
          style={styles.paddingForm}
          label="Name"
          onChangeText={name => (newZutat.name = name)}></TextInput>
        <TextInput
          style={styles.paddingForm}
          label="Zubereitungsart"
          onChangeText={art =>
            (newZutat.zubereitungsarten = [
              new Zubereitungsart(Zubereitungstyp.Braten, art),
            ])
          }
          multiline></TextInput>
        <TextInput
          style={styles.paddingForm}
          label="Menge"
          keyboardType="numeric"
          onChangeText={menge =>
            (newZutat.menge = Number.parseInt(menge))
          }></TextInput>
        <View style={styles.paddingForm}>
          <Text>Vegan</Text>
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        </View>
        <View style={styles.buttonContainer}>
          <FAB
            icon="plus"
            style={styles.fab}
            onPress={() => {
              saveData(pickedItem, newZutat);
              console.log(
                new Zutat(
                  0,
                  newZutat.name,
                  newZutat.zubereitungsarten,
                  newZutat.menge,
                  newZutat.isVegan,
                ),
              );
            }}></FAB>
        </View>
      </ScrollView>
    </Provider>
  );
}
