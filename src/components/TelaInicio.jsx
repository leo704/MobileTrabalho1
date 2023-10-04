import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native'
import React from 'react'
import styles from './Styles'
import Carousel from 'react-native-reanimated-carousel'

export default function TelaInicio() {
  return (
    <View style={estilo.topo}>
      <Image style={estilo.imagem} source={require('../assets/logo.png')} />
      {/* Logo ficar fixa no topo */}
      <ScrollView style={styles.todasTelas}>
        <Text style={estilo.texto}>PROMOÇÕES</Text>
      </ScrollView>
    </View >
  )
}

estilo = StyleSheet.create(
  {
    topo: {
      backgroundColor: '#32123f',
    },
    imagem: {
      resizeMode: 'cover',
      alignSelf: 'center',
      width: 85,
      height: 60,
      backgroundColor:'rgba(255,255,255,0.5)',

    },
    texto: {
      textAlign: 'center',
      fontFamily: 'sans-serif',
      fontWeight: '900',
      fontSize: 20,
      height: 33,
      borderWidth: 1,
      borderColor: 'black',
      paddingVertical: 2,
      paddingHorizontal: 10,
      color: 'black'
    },
  }
);


/*
  .Adicionar um carrossel de fotos/promoções
  npm install react-native-reanimated-carousel
*/