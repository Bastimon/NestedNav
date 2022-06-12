import AsyncStorage from '@react-native-async-storage/async-storage';
import {gemuese, setGemuesquelle} from './data/gemuese';
import {kohlenhydrate, setKohlenhydrate} from './data/kohlenhydrate';
import {Protein} from './data/protein';
import {proteinquelle, setProteinquelle} from './data/proteine';
import {Zutat} from './data/zutat';

export enum StorageKey {
  PROTEIN = 'PROTEIN',
  GEMUESE = 'GEMUESE',
  KOHLENHYDRAT = 'KOHLENHYDRAT',
}
export class Storage {
  private async updateData(key: StorageKey) {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        switch (key) {
          case StorageKey.PROTEIN:
            setProteinquelle(JSON.parse(value) as Protein[]);
            break;
          case StorageKey.GEMUESE:
            setGemuesquelle(JSON.parse(value) as Zutat[]);
            break;
          case StorageKey.KOHLENHYDRAT:
            setKohlenhydrate(JSON.parse(value) as Zutat[]);
            break;
          default:
            break;
        }
      }
    } catch (e) {
      console.log(e);
    }
  }

  public async storeData(key: StorageKey, data: any) {
    try {
      switch (key) {
        case StorageKey.PROTEIN:
          let newProtein: Protein[] = [];
          proteinquelle.forEach(_ => newProtein.push(_));
          newProtein.push(data as Protein);
          setProteinquelle(newProtein);
          await AsyncStorage.setItem(key, JSON.stringify(newProtein));
          break;
        case StorageKey.GEMUESE:
          let newGemuese: Zutat[] = [];
          gemuese.forEach(_ => newGemuese.push(_));
          newGemuese.push(data as Zutat);
          setGemuesquelle(newGemuese);
          await AsyncStorage.setItem(key, JSON.stringify(newGemuese));
          break;
        case StorageKey.KOHLENHYDRAT:
          let newKohlenhydrat: Zutat[] = [];
          kohlenhydrate.forEach(_ => newKohlenhydrat.push(_));
          newKohlenhydrat.push(data as Zutat);
          setKohlenhydrate(newKohlenhydrat);
          await AsyncStorage.setItem(key, JSON.stringify(newKohlenhydrat));
          break;
        default:
          break;
      }
    } catch (e) {
      console.log(e);
    }
  }

  public async init() {
    await this.updateData(StorageKey.PROTEIN);
    await this.updateData(StorageKey.GEMUESE);
    await this.updateData(StorageKey.KOHLENHYDRAT);
  }
}

// function handleGenerate(): void {
//     console.log(proteinquelle);

//     let newProt = new Protein(
//       proteinquelle.length,
//       'test',
//       [new Zubereitungsart(Zubereitungstyp.Braten, 'test')],
//       200,
//       true,
//     );
//     let newQuelle: Protein[] = [];
//     proteinquelle.forEach(element => newQuelle.push(element));
//     newQuelle.push(newProt);
//     setProteinquelle(newQuelle);

//     storeData(PROTEIN, proteinquelle);
//     console.log(proteinquelle);
//   }
