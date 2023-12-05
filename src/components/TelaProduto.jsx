import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useContext} from 'react';
import Carousel from 'react-native-reanimated-carousel';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {ContextoCarrinho} from '../contexto/CarrinhoContext';

export default function TelaProduto(props) {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('screen').height;

  const {item} = props.route.params;
  const {itensCarrinho, adicionarCarrinho} = useContext(ContextoCarrinho);

  function adicionarAoCarrinho() {
    adicionarCarrinho(item);
    props.navigation.navigate('Carrinho', {item});
  }

  const carrosselProduto = ({item: image}) => (
    <View>
      <Image style={styles.imagem} source={{uri: image}} resizeMode="contain" />
    </View>
  );

  return (
    <ScrollView>
      <Text style={styles.texto}>Detalhes do Produto</Text>
      <Text style={styles.texto}>{item.title}</Text>
      <Carousel
        data={item.images}
        renderItem={carrosselProduto}
        loop={true}
        width={width * 0.9}
        height={height * 0.4}
        autoPlay={true}
        scrollAnimationDuration={1000}
      />
      <Text style={styles.texto}>Preço: R$ {item.price}</Text>
      <Text style={styles.texto}>Descrição do produto: {item.description}</Text>
      <Text style={styles.texto}>Categoria: {item.category}</Text>
      <Text style={styles.texto}>Marca: {item.brand}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imagem: {
    marginLeft: 100,
    alignSelf: 'center',
    width: '100%',
    height: '100%',
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
  botaoContainer: {
    padding: 16,
    alignSelf: 'center',
  },
});
