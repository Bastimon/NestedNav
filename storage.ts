import AsyncStorage from '@react-native-async-storage/async-storage';
import {setGemuesquelle} from './data/gemuese';
import {setKohlenhydrate} from './data/kohlenhydrate';
import {Protein} from './data/protein';
import {setProteinquelle} from './data/proteine';
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
      await AsyncStorage.setItem(key, JSON.stringify(data));
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
