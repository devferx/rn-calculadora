import React from 'react';
import {Text, View} from 'react-native';
import {ButtonCalc} from '../components/button-calc';

import {styles} from '../theme/app-theme';

export const CalculadoraScreen = () => {
  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.smallText}>1500</Text>
      <Text style={styles.text}>1500</Text>
      <View style={styles.row}>
        {/* boton */}
        <ButtonCalc text="C" color="#9B9B9B" />
        <ButtonCalc text="+/-" color="#9B9B9B" />
        <ButtonCalc text="del" color="#9B9B9B" />
        <ButtonCalc text="/" color="#FF9427" />
      </View>
    </View>
  );
};
