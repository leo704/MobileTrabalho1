import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, Image } from 'react-native';


const DATA = [
  { id: '1', name: 'AirPods', image: require('../assets/airpods.jpg') },
  { id: '2', name: 'Carregador de Celular', image: require('../assets/carregador.jpg') },
  { id: '3', name: 'Case de Celular', image: require('../assets/case.jpg') },
  { id: '4', name: 'SmartWatch', image: require('../assets/smartwatch.jpg') },
];

const TelaBuscar = () => {
  const [pesquisa, setPesquisa] = useState('');
  const [resultadoPesquisa, setResultadoPesquisa] = useState([]);

  const fazPesquisa = (prod) => {
    setPesquisa(prod);

    const filteredResults = DATA.filter((item) =>
      item.name.toLowerCase().includes(prod.toLowerCase())
    );
    setResultadoPesquisa(filteredResults);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite sua pesquisa"
        onChangeText={fazPesquisa}
        value={pesquisa}
      />
      <FlatList
        data={resultadoPesquisa}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.texto}>{item.name}</Text>
            <Image source={item.image} style={styles.imagem} />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e4a0ff',
    flex: 1,
    padding: 10,
  },
  input: {
    backgroundColor: '#e4a0ff',
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  texto: {
    backgroundColor: '#e4a0ff',
    flex: 1,
  },
  imagem: {
    width: 80,
    height: 80,
    resizeMode: 'stretch',
    alignSelf: 'flex-end',
  },
}
);

export default TelaBuscar;
