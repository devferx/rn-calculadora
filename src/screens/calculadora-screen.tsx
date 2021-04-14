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
    // No aceptar más de un punto
    if (number.includes('.') && numberText === '.') {
      return;
    }

    if (number.startsWith('0') || number.startsWith('-0')) {
      // Punto decimal
      if (numberText === '.') {
        setNumber(number + numberText);
        // Evaluar si es otro cero, y hay un punto
      } else if (numberText === '0' && number.includes('.')) {
        setNumber(number + numberText);
        // Evaluar si es diferente de cero y no tiene un punto
      } else if (numberText !== '0' && !number.includes('.')) {
        setNumber(numberText);
        // Evitar 0000.0
      } else if (numberText === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + numberText);
      }
    } else {
      setNumber(number + numberText);
    }
  };

  const btnDelete = () => {
    let negativo = '';
    let numberTemp = number;

    if (number.includes('-')) {
      negativo = '-';
      numberTemp = number.substr(1);
    }

    if (numberTemp.length > 1) {
      setNumber(negativo + numberTemp.slice(0, -1));
    } else {
      setNumber('0');
    }
  };

  const positivoNegativo = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.smallText}>{prevNumber}</Text>
      <Text style={styles.text} numberOfLines={1} adjustsFontSizeToFit={true}>
        {number}
      </Text>

      <View style={styles.row}>
        <ButtonCalc text="C" color="#9B9B9B" onPress={clean} />
        <ButtonCalc text="+/-" color="#9B9B9B" onPress={positivoNegativo} />
        <ButtonCalc text="del" color="#9B9B9B" onPress={btnDelete} />
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
