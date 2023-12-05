import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import React, { useContext, useEffect } from 'react';
import styles from './Styles';
import Carousel from 'react-native-reanimated-carousel';
import { ProdContext } from '../contexto/ProdutosContext';


export default function TelaInicio() {

  const width = Dimensions.get('window').width;
  const height = Dimensions.get('screen').height;

  const { produtos } = useContext(ProdContext);

  return (

    <View style={{ flexDirection: 'column', backgroundColor: '#fff' }}>
      <Image
        style={estilo.imagem}
        source={require('../assets/logo.png')}
        resizeMode="contain"
      />
      {/* Logo ficar fixa no topo */}
      <ScrollView style={{ backgroundColor: '#fff', height: '100%' }}>
        <Text style={estilo.texto}>PROMOÇÕES</Text>
        <Carousel
          loop={true}
          width={width * 0.9}
          height={height * 0.4}
          autoPlay={true}
          data={produtos}
          scrollAnimationDuration={1000}
          renderItem={({ item, index }) => (
            <View style={{ flex: 1, borderWidth: 0, justifyContent: 'flex-start' }}>
              <Text style={estilo.texto}>{item.title}</Text>
              <Text style={estilo.texto} >
                PREÇO: ${item.price} DESCONTO: {item.discountPercentage}%
              </Text>
              <Image
                key={index}
                style={{ width: '100%', height: '100%' }}
                resizeMode="contain"
                source={{ uri: item.thumbnail }}
              />
            </View>
          )}
          style={{ alignSelf: 'center' }}
        />
      </ScrollView>
    </View>
  );
}

const estilo = StyleSheet.create({
  imagem: {
    alignSelf: 'flex-start',
    width: 100,
    height: 100,
    backgroundColor: '#fff',
  },
  texto: {
    textAlign: 'center',
    fontFamily: 'sans-serif',
    fontWeight: '900',
    fontSize: 20,
    height: 'auto',
    borderWidth: 1,
    borderColor: 'black',
    paddingVertical: 2,
    paddingHorizontal: 10,
    color: 'black',
  },
});

/*
  npm install react-native-reanimated-carousel
  npm install react-native-gesture-handler
  npm install react-native-reanimated
*/
