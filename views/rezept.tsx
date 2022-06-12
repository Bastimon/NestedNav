import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {List, Text, Title} from 'react-native-paper';
import {Protein} from '../data/protein';
import {proteinquelle, setProteinquelle} from '../data/proteine';
import {Zubereitungsart, Zubereitungstyp} from '../data/zubereitungsart';
import {RezeptGenerator} from '../rezeptGenerator';
import {styles} from './styles';

const Generator = new RezeptGenerator();
function formatText(text: string): string {
  const re = /(\.)(\w)/g;
  return text.replace(re, '$1 $2');
}

export function Rezept({route, navigation}: any) {
  Generator.init(route.params.isVegan);
  const [displayTitle, setTitle] = useState(Generator.generateTitle());
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
      style={styles.listItem}
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
      style={styles.listItem}
      title={gewürzZutat.name}
      key={key}
      description={gewürzZutat.getDescription()}
    />
  ));
  const marinadeSection = (
    <List.Section style={styles.listSection}>
      <List.Subheader style={styles.listSubheader}>Marinade:</List.Subheader>
      {proteinZutat.zusatzGewürze.map((marinadeZutat, key) => (
        <List.Item
          style={styles.listItem}
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
        <List.Section style={styles.listSection}>
          <List.Subheader style={styles.listSubheader}>Zutaten:</List.Subheader>
          <List.Item
            style={styles.listItem}
            title={proteinZutat.name}
            description={proteinZutat.getMengeinGramm()}
          />
          <List.Item
            style={styles.listItem}
            title={hydrateZutat.name}
            description={hydrateZutat.getMengeinGramm()}
          />
          <List.Item
            style={styles.listItem}
            title={gemueseZutat.name}
            description={gemueseZutat.getMengeinGramm()}
          />
        </List.Section>
        {proteinZutat.zusatzGewürze.length > 0 ? (
          marinadeSection
        ) : (
          <View></View>
        )}
        <List.Section style={styles.listSection}>
          <List.Subheader style={styles.listSubheader}>Sauce:</List.Subheader>
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
