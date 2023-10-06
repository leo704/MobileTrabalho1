import { View, Text } from 'react-native'
import React from 'react'
import styles from './Styles'


export default function TelaCarrinho() {
  return (
    <View style={styles.todasTelas}>
      <Text style={{alignSelf:'center', justifyContent:'center'}}>Carrinho vazio :(</Text>
    </View>
  )
}