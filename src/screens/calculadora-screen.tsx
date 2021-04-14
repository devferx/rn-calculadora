import React from 'react';
import {Text, View} from 'react-native';

import {ButtonCalc} from '../components/button-calc';
import {useCalc} from '../hooks/useCalc';
import {styles} from '../theme/app-theme';

export const CalculadoraScreen = () => {
  const {
    number,
    prevNumber,
    calc,
    clean,
    btnDelete,
    createNumber,
    positivoNegativo,
    btnSumar,
    btnRestar,
    btnDividir,
    btnMultiplicar,
  } = useCalc(0);

  return (
    <View style={styles.calculadoraContainer}>
      {prevNumber !== '0' && <Text style={styles.smallText}>{prevNumber}</Text>}

      <Text style={styles.text} numberOfLines={1} adjustsFontSizeToFit={true}>
        {number}
      </Text>

      <View style={styles.row}>
        <ButtonCalc text="C" color="#9B9B9B" onPress={clean} />
        <ButtonCalc text="+/-" color="#9B9B9B" onPress={positivoNegativo} />
        <ButtonCalc text="del" color="#9B9B9B" onPress={btnDelete} />
        <ButtonCalc text="/" color="#FF9427" onPress={btnDividir} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="7" onPress={createNumber} />
        <ButtonCalc text="8" onPress={createNumber} />
        <ButtonCalc text="9" onPress={createNumber} />
        <ButtonCalc text="X" color="#FF9427" onPress={btnMultiplicar} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="4" onPress={createNumber} />
        <ButtonCalc text="5" onPress={createNumber} />
        <ButtonCalc text="6" onPress={createNumber} />
        <ButtonCalc text="-" color="#FF9427" onPress={btnRestar} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="1" onPress={createNumber} />
        <ButtonCalc text="2" onPress={createNumber} />
        <ButtonCalc text="3" onPress={createNumber} />
        <ButtonCalc text="+" color="#FF9427" onPress={btnSumar} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="0" width={180} onPress={createNumber} />
        <ButtonCalc text="." onPress={createNumber} />
        <ButtonCalc text="=" color="#FF9427" onPress={calc} />
      </View>
    </View>
  );
};
