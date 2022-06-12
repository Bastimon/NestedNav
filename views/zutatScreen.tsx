import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {Provider, Switch, Text, TextInput} from 'react-native-paper';
import DropDown from 'react-native-paper-dropdown';
import {styles} from './styles';

export function ZutatScreen() {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [pickedItem, setPickedItem] = useState(undefined);

  const [items, setItems] = useState([
    {label: 'Proteinquelle', value: 'proteinquelle'},
    {label: 'Kohlenhydrate', value: 'kohlenhydrate'},
    {label: 'Gemüse', value: 'gemüse'},
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
        <TextInput style={styles.paddingForm} label="Name"></TextInput>
        <TextInput
          style={styles.paddingForm}
          label="Zubereitungsart"
          multiline></TextInput>
        <TextInput style={styles.paddingForm} label="Menge"></TextInput>
        <View style={styles.paddingForm}>
          <Text>Vegan</Text>
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        </View>
      </ScrollView>
    </Provider>
  );
}
