import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {ButtonCalc} from '../components/button-calc';

import {styles} from '../theme/app-theme';

export const CalculadoraScreen = () => {
  const [prevNumber, setPrevNumber] = useState('0');
  const [number, setNumber] = useState('100');

  const clean = () => {
    setNumber('0');
  };

  const createNumber = (numberText: string) => {
    setNumber(number + numberText);
  };

  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.smallText}>{prevNumber}</Text>
      <Text style={styles.text} numberOfLines={1} adjustsFontSizeToFit={true}>
        {number}
      </Text>

      <View style={styles.row}>
        <ButtonCalc text="C" color="#9B9B9B" onPress={clean} />
        <ButtonCalc text="+/-" color="#9B9B9B" onPress={clean} />
        <ButtonCalc text="del" color="#9B9B9B" onPress={clean} />
        <ButtonCalc text="/" color="#FF9427" onPress={clean} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="7" onPress={createNumber} />
        <ButtonCalc text="8" onPress={createNumber} />
        <ButtonCalc text="9" onPress={createNumber} />
        <ButtonCalc text="X" color="#FF9427" onPress={clean} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="4" onPress={createNumber} />
        <ButtonCalc text="5" onPress={createNumber} />
        <ButtonCalc text="6" onPress={createNumber} />
        <ButtonCalc text="-" color="#FF9427" onPress={clean} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="1" onPress={createNumber} />
        <ButtonCalc text="2" onPress={createNumber} />
        <ButtonCalc text="3" onPress={createNumber} />
        <ButtonCalc text="+" color="#FF9427" onPress={clean} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="0" width={180} onPress={createNumber} />
        <ButtonCalc text="." onPress={createNumber} />
        <ButtonCalc text="=" color="#FF9427" onPress={clean} />
      </View>
    </View>
  );
};
