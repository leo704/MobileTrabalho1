import React, { useState, useContext } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, Image } from 'react-native';
import { ProdContext } from '../contexto/ProdutosContext';
import TelaCarrinho from './TelaCarrinho';

const TelaBuscar = () => {
  const { produtos } = useContext(ProdContext);
  const [pesquisa, setPesquisa] = useState('');
  const [resultadoPesquisa, setResultadoPesquisa] = useState([]);

  const fazPesquisa = prod => {
    setPesquisa(prod);

    const filteredResults = produtos.filter(item =>
      item.title.toLowerCase().includes(prod.toLowerCase()),
    );
    setResultadoPesquisa(filteredResults);
  };

  function calculaDisconto(valor, desconto) {
    let resultado = valor;
    resultado -= valor * (desconto / 100);
    resultadoFormatado = resultado.toFixed(2);
    return resultadoFormatado;
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          style={styles.input}
          placeholder="Digite sua pesquisa"
          onChangeText={fazPesquisa}
          value={pesquisa}
        />
        <Image source={require('../assets/logo.png')} style={{ width: '20%', height: 50 }} resizeMode="contain" />
      </View>
      <FlatList
        data={resultadoPesquisa}
        renderItem={({ item }) => (
          <View style={styles.containerPesquisa}>
            <Image source={{ uri: item.thumbnail }} style={styles.imagem} />
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 5, color: 'black' }}>{item.title}</Text>
              <Text style={{ color: 'black' }}>de: {item.price}</Text>
              <Text style={{ fontSize: 20, alignSelf: 'center', fontWeight: 'bold', color: 'black' }}>Por: {calculaDisconto(item.price, item.discountPercentage)}</Text>
              <Text style={{ color: 'black' }}>desconto: {item.discountPercentage}% </Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 10,
  },
  input: {
    backgroundColor: '#fff',
    height: 50,
    width: '80%',
    borderWidth: 2,
    borderRadius: 25,
    paddingHorizontal: 12,
    marginBottom: 8,
    borderColor: '#32123f'
  },
  imagem: {
    width: 100,
    height: 100,
    resizeMode: 'stretch',
    alignSelf: 'flex-end',
    margin: 5,
    flex: 1 / 2
  },
  containerPesquisa: {
    backgroundColor: '#f2d2ff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 3,
    justifyContent: 'flex-start',
    flex: 1,
  },
});

export default TelaBuscar;
