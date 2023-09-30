import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert, Image, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native'


const TelaLogin = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [autenticar, setAutenticar] = useState(false);
  const navigation = useNavigation();
  const usuarios = [
    { name: 'maria', senha: '1234' },
    { name: 'joao', senha: '5678' },
    { name: 'pedro@email.com', senha: '5555' },
  ]; // Mudar para contexto e adicionar na tela de perfil

  const FazLogin = () => {
    const usuarioEncontrado = usuarios.find((user) => user.name === usuario && user.senha === senha);
    if (usuarioEncontrado) {
      setAutenticar(true);
      navigation.navigate('Logado');
    } else {
      Alert.alert('Erro!', 'Usuario ou senha incorreto(s).');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'android' ? 'padding' : 'height'}
      style={styles.container}>
      <View>
        <Image style={styles.imagem} source={require('../assets/logo.png')} />
        <Text style={styles.header}>LOGIN</Text>
        <TextInput
          keyboardType='email-address'
          style={styles.input}
          placeholder="Nome de usuario ou email"
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
    </KeyboardAvoidingView>

  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffad15',
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  header: {
    color: 'black',
    fontSize: 28,
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

  imagem: {

    resizeMode: 'cover',
    alignSelf: 'center',
  }
});

export default TelaLogin;


/*
    .Adicionar elementos VISUAIS que simulem um login
    .Estilizar
        -Logo
        -Entrada de usuário e senha
        -Opção de logar com google
*/


