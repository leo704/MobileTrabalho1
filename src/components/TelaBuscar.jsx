import React, { useState, useContext } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, Image } from 'react-native';
import { ProdContext } from '../contexto/ProdutosContext';

const TelaBuscar = () => {
  const [Produtos] = useContext(ProdContext);
  const [pesquisa, setPesquisa] = useState('');
  const [resultadoPesquisa, setResultadoPesquisa] = useState([]);

  const fazPesquisa = (prod) => {
    setPesquisa(prod);

    const filteredResults = Produtos.filter((item) =>
      item.title.toLowerCase().includes(prod.toLowerCase())
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
            <Text style={styles.texto}>{item.title}</Text>
            <Image source={{ uri: item.thumbnail }} style={styles.imagem} />
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
