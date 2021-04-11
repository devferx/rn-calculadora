import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  text: string;
  color: string;
}

export const ButtonCalc = ({text, color = '#333333'}: Props) => {
  return (
    <View style={{...styles.btn, backgroundColor: color}}>
      <Text style={styles.btnText}>{text}</Text>
    </View>
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
