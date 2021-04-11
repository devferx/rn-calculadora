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
        <ButtonCalc text="C" color="#9B9B9B" />
        <ButtonCalc text="+/-" color="#9B9B9B" />
        <ButtonCalc text="del" color="#9B9B9B" />
        <ButtonCalc text="/" color="#FF9427" />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="7" />
        <ButtonCalc text="8" />
        <ButtonCalc text="9" />
        <ButtonCalc text="X" color="#FF9427" />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="4" />
        <ButtonCalc text="5" />
        <ButtonCalc text="6" />
        <ButtonCalc text="-" color="#FF9427" />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="1" />
        <ButtonCalc text="2" />
        <ButtonCalc text="3" />
        <ButtonCalc text="+" color="#FF9427" />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="0" width={180} />
        <ButtonCalc text="." />
        <ButtonCalc text="=" color="#FF9427" />
      </View>
    </View>
  );
};
