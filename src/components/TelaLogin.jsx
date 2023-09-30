import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'


const TelaLogin = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [autenticar, setAutenticar] = useState(false);
  const navigation = useNavigation();
  const usuarios = [
    { name: 'maria', senha: '1234' },
    { name: 'joao', senha: '5678' },
    { name: 'pedro', senha: '5555' },
  ]; // Mudar para contexto e adicionar na tela de perfil

  const FazLogin = () => {
    const usuarioEncontrado = usuarios.find(usuarios) => usuarios.name === usuario && usuarios.senha === senha);
if (usuarioEncontrado) {
  setAutenticar(true);
  navigation.navigate('Logado');
} else {
  Alert.alert('Erro!', 'Usuário ou senha incorreto(s).');
}
  };

return (
  <View style={styles.container}>
    <Text style={styles.header}>Faça login</Text>
    <TextInput
      style={styles.input}
      placeholder="Nome de usuário ou email"
      onChangeText={(text) => setUsuario(text)}
      value={usuario}
    />
    <TextInput
      keyboardType='numeric'
      style={styles.input}
      placeholder="Senha"
      onChangeText={(text) => setSenha(text)}
      value={senha}
      secureTextEntry={true}
    />
    <Button title="Entrar" onPress={FazLogin} color={'black'} />
  </View>
);
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffcd6d',
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
});

export default TelaLogin;



/*
    .Adicionar elementos VISUAIS que simulem um login
    .Estilizar
        -Logo
        -Entrada de usuário e senha
        -Opção de logar com google
*/


