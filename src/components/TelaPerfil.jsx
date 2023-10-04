import { View, Text, Button, StyleSheet, Image } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ContextoUser } from '../contexto/UserContext';

//adicionar contexto de login

export default function TelaPerfil() {
  const nav = useNavigation();
  const logout = () => { nav.navigate('Login'); };
  const [usuarios, setUsuarios] = useContext(ContextoUser);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.texto}>Bem vindo(a), {usuarios.name}</Text>
      </View>
      <View style={styles.botaoContainer}>
        <Button title='Fazer logout' onPress={logout} color={'#32123f'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e4a0ff',
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