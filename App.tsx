/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {
  Button,
  TextInput,
  Switch,
  Text,
  Title,
  List,
  Provider,
} from 'react-native-paper';
import {FAB} from 'react-native-paper';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import DropDown from 'react-native-paper-dropdown';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RezeptGenerator} from './rezeptGenerator';
import {foodEmojis} from './data/foodEmojis';
import {proteinquelle, setProteinquelle} from './data/proteine';
import {Protein} from './data/protein';
import {Zubereitungsart, Zubereitungstyp} from './data/zubereitungsart';
import {kohlenhydrate} from './data/kohlenhydrate';
import {gemuese} from './data/gemuese';
import {saucen} from './data/saucen';
import {gewuerze} from './data/gewuerze';

type RootStackParamList = {
  navigate(arg0: string): void;
  'Rezept Generator 9000': undefined;
  Rezept: {isVegan: boolean};
};

type Props = {
  navigation: RootStackParamList;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Generator = new RezeptGenerator();

const storeData = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // saving error
  }
};
const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);

    if (value !== null) {
      setProteinquelle(JSON.parse(value) as Protein[]);
    }
  } catch (e) {
    // error reading value
  }
};

const PROTEIN = 'proteine';

function HomeScreen({navigation}: Props) {
  getData(PROTEIN);
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <View style={styles.buttonContainer}>
      <View style={styles.paddingForm}>
        <Text>Veganer Modus</Text>
        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
      </View>
      <FAB
        icon="pizza"
        style={styles.fab}
        onPress={() => {
          navigation.navigate('Rezept');
        }}></FAB>
    </View>
  );
}

function RezeptGeneratorAnzeigen() {
  Generator.init(false);
  const [displayRecipe, setRecipe] = useState('');
  const [displayTitle, setTitle] = useState(Generator.generateTitle());
  const [displayZutatenListe, setZutatenListe] = useState('');

  function handleGenerate(): void {
    console.log(proteinquelle);

    let newProt = new Protein(
      proteinquelle.length,
      'test',
      [new Zubereitungsart(Zubereitungstyp.Braten, 'test')],
      200,
      true,
    );
    let newQuelle: Protein[] = [];
    proteinquelle.forEach(element => newQuelle.push(element));
    newQuelle.push(newProt);
    setProteinquelle(newQuelle);

    storeData(PROTEIN, proteinquelle);
    console.log(proteinquelle);
  }

  const [proteinZutat, setProteinZutat] = useState(Generator.chosenProtein);
  const [hydrateZutat, setHydrateZutat] = useState(
    Generator.chosenKohlenhydrat,
  );
  const [gemueseZutat, setGemueseZutat] = useState(Generator.chosenGemüse);
  const [sauceZutat, setSauceZutat] = useState(Generator.chosenSauce);
  const [gewuerzMischung, setGewuerzZutat] = useState(
    Generator.chosenGewürzmischung,
  );

  const sauceSection = sauceZutat.zutaten.map((gewürz, key) => (
    <List.Item
      style={{margin: -5, padding: 0}}
      title={gewürz.name}
      key={key}
      description={gewürz.getDescription()}
    />
  ));
  gewuerzMischung.gewürzZutat.forEach(element => {
    console.log();
  });

  const gewürzeSection = gewuerzMischung.gewürzZutat.map((gewürzZutat, key) => (
    <List.Item
      style={{margin: -5, padding: 0}}
      title={gewürzZutat.name}
      key={key}
      description={gewürzZutat.getDescription()}
    />
  ));
  const marinadeSection = (
    <List.Section style={{margin: 0, padding: 0}}>
      <List.Subheader style={{margin: -15, padding: 0}}>
        Marinade:
      </List.Subheader>
      {proteinZutat.zusatzGewürze.map((marinadeZutat, key) => (
        <List.Item
          style={{margin: -5, padding: 0}}
          key={key}
          title={marinadeZutat.name}
          description={marinadeZutat.getDescription()}
        />
      ))}
    </List.Section>
  );

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={styles.paddingForm}>
        <Title>{displayTitle}</Title>
        <List.Section style={{margin: 0, padding: 0}}>
          <List.Subheader style={{margin: -15, padding: 0}}>
            Zutaten:
          </List.Subheader>
          <List.Item
            style={{margin: -5, padding: 0}}
            title={proteinZutat.name}
            description={proteinZutat.getMengeinGramm()}
          />
          <List.Item
            style={{margin: -5, padding: 0}}
            title={hydrateZutat.name}
            description={hydrateZutat.getMengeinGramm()}
          />
          <List.Item
            style={{margin: -5, padding: 0}}
            title={gemueseZutat.name}
            description={gemueseZutat.getMengeinGramm()}
          />
        </List.Section>
        {proteinZutat.zusatzGewürze.length > 0 ? (
          marinadeSection
        ) : (
          <View></View>
        )}
        <List.Section style={{margin: 0, padding: 0}}>
          <List.Subheader style={{margin: -15, padding: 0}}>
            Sauce:
          </List.Subheader>
          {sauceSection}
          {sauceZutat.mitGewürzen ? gewürzeSection : <View></View>}
        </List.Section>
      </View>
      <View style={styles.paddingForm}>
        <Title>Zubereitung</Title>
        <Text>{formatText(hydrateZutat.getZubereitungsText())}</Text>
        <Text>{formatText(proteinZutat.getZubereitungsText())}</Text>
        <Text>{formatText(gemueseZutat.getZubereitungsText())}</Text>
        <Text>{formatText(sauceZutat.getZubereitungsText())}</Text>
      </View>
    </ScrollView>
  );
}

function ZutatScreen() {
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

const Tab = createMaterialBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#ffffff"
      inactiveColor="#d6bdfa"
      barStyle={{backgroundColor: '#6200ee'}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <Icon name="home" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Neue Zutat"
        component={ZutatScreen}
        options={{
          tabBarLabel: 'neue Zutat',
          tabBarIcon: ({color}) => <Icon name="plus" size={24} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Rezept Generator 9000" component={HomeTabs} />
        <Stack.Screen name="Rezept" component={RezeptGeneratorAnzeigen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fab: {
    margin: 16,
  },
  paddingForm: {
    margin: 20,
  },
  listForm: {
    flex: 1,
  },
});

function formatText(text: string): string {
  const re = /(\.)(\w)/g;
  return text.replace(re, '$1 $2');
}

export default App;
