import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ContextoUser } from '../contexto/UserContext';

export default function TelaPerfil() {
  const nav = useNavigation();

  const logout = () => {
    resetUsuario();
    nav.navigate('Login');
  };


  const { usuarioLogado, resetUsuario } = useContext(ContextoUser);


  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.texto}>Bem vindo(a), {usuarioLogado.nome}</Text>
        <Text>Email: {usuarioLogado.email}</Text>
      </View>
      <View style={styles.botaoContainer}>
        <Button title='Fazer logout' onPress={logout} color={'#32123f'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
  },
  texto: {
    textAlign: 'center',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: 25,
    height: 40,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#32123f',
    paddingVertical: 2,
    paddingHorizontal: 10,
    marginVertical: 16,
    marginHorizontal: 16,
    color: '#32123f'
  },
  content: {
    flex: 1,
  },
  botaoContainer: {
    padding: 16
  },
});
