import { View, Text, Button, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

//adicionar contexto de login

export default function TelaPerfil() {
  const nav = useNavigation();
  const logout = () => { nav.navigate('Login'); };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.texto}>-NOME DO USUÁRIO- </Text>
      </View>
      <View style={styles.botaoContainer}>
        <Button title='Fazer logout' onPress={logout} color={'black'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffcd6d',
    flex: 1,
    flexDirection: 'column',
  },
  texto: {
    textAlign: 'center',
    backgroundColor: 'black',
    fontFamily: 'sans-serif',
    fontWeight: '900',
    fontSize: 20,
    height: 33,
    borderWidth: 1,
    borderColor: 'black',
    paddingVertical: 2,
    paddingHorizontal: 10,
    marginVertical: 16,
    marginHorizontal: 16,
    color: 'white'
  },
  content: {
    flex: 1,
  },
  botaoContainer: {
    padding: 16
  },
});