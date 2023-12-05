import {View, Text, FlatList} from 'react-native';
import React, {useContext} from 'react';
import styles from './Styles';

export default function TelaCarrinho() {
  return (
    <View style={styles.todasTelas}>
      <Text>Carrinho vazio</Text>
    </View>
  );
}
