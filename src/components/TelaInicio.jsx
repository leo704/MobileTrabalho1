import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'
import styles from './Styles'

export default function TelaInicio() {
  return (
    <View style={estilo.topo}>
      <Image style={estilo.imagem} source={require('../assets/logoSemText.png')} />
      {/* Logo ficar fixa no topo */}
      <ScrollView style={styles.todasTelas}>
        <Text>Tela do inicio</Text>
      </ScrollView>
    </View >
  )
}

estilo = StyleSheet.create(
  {
    topo: {
      backgroundColor: '#ffae15',
    },
    imagem: {
      resizeMode: 'cover',
      alignSelf: 'center',
      width: 85,
      height: 60,

    }
  }
);


/*
  .Adicionar um carrossel de fotos/promoções
*/