import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native'
import React, { useContext } from 'react'
import styles from './Styles'
import Carousel from 'react-native-reanimated-carousel'
import { ProdContext } from '../contexto/ProdutosContext'

export default function TelaInicio() {

  const [Produtos] = useContext(ProdContext);
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('screen').height;

  return (
    <View style={estilo.topo}>
      <Image style={estilo.imagem} source={require('../assets/logo.png')} />
      {/* Logo ficar fixa no topo */}
      <ScrollView style={styles.todasTelas}>
        <Text style={estilo.texto}>PROMOÇÕES</Text>
        <Carousel
          loop={true}
          width={width}
          height={height / 2}
          autoPlay={true}
          data={Produtos}
          scrollAnimationDuration={1000}
          renderItem={({ item, index }) => (
            <View
              style={{ flex: 1, borderWidth: 0 }}>
              <Text style={estilo.texto} >
                {item.title}
              </Text>
              <Text style={estilo.texto} >
                PREÇO: ${item.price}   DESCONTO: {item.discountPercentage}%
              </Text>
              <Image
                key={index}
                style={{ width: '100%', height: '100%' }}
                resizeMode='contain'
                source={{ uri: item.thumbnail }}
              />
            </View>
          )}
        />
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
      backgroundColor: 'rgba(255,255,255,0.5)',

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
  npm install react-native-reanimated-carousel
  npm install react-native-gesture-handler
  npm install react-native-reanimated
*/