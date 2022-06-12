import React from 'react';
import {Switch, Text, View} from 'react-native';
import {FAB} from 'react-native-paper';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export function HomeScreen({navigation}: {navigation: any}) {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
  };
  return (
    <View style={styles.buttonContainer}>
      <Text>Veganer Modus</Text>
      <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
      <FAB
        icon="silverware-fork-knife"
        style={styles.fab}
        onPress={() => {
          navigation.navigate('Rezept', {isVegan: isSwitchOn});
        }}></FAB>
    </View>
  );
}
