import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

interface Props {
  text: string;
  color?: '#9B9B9B' | '#FF9427' | '#333333';
  width?: number;
}

export const ButtonCalc = ({text, color = '#333333', width = 80}: Props) => {
  const btnTextStyle = {
    ...styles.btnText,
    color: color === '#9B9B9B' ? 'black' : 'white',
  };

  return (
    <TouchableOpacity>
      <View style={{...styles.btn, width, backgroundColor: color}}>
        <Text style={btnTextStyle}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    width: 80,
    height: 80,
    marginHorizontal: 10,
    borderRadius: 100,
  },
  btnText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'white',
    fontWeight: '300',
  },
});
