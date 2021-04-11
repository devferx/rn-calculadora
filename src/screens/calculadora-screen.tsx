import React from 'react';
import {Text, View} from 'react-native';

import {styles} from '../theme/app-theme';

export const CalculadoraScreen = () => {
  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.smallText}>1500</Text>
      <Text style={styles.text}>1500</Text>
      <View>
        {/* boton */}
        <View style={styles.btn}>
          <Text style={styles.btnText}>1</Text>
        </View>
      </View>
    </View>
  );
};
