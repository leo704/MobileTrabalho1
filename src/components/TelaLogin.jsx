import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Alert,
  Image,
  KeyboardAvoidingView,
  Dimensions,
  ImageBackground,
  ScrollView,
  keyboardAppearance
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button} from 'react-native-elements';

//instalar npm install react-native-elements

const TelaLogin = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [autenticar, setAutenticar] = useState(false);
  const nav = useNavigation();
  
  const usuarios = [
    {id:1, name: 'maria', senha: '1234'},
    {id:2, name: 'joao', senha: '5678'},
    {id:3, name: 'pedro@email.com', senha: '5555'},
  ]; // Mudar para contexto e adicionar na tela de perfil

  

  const FazLogin = () => {
    const usuarioEncontrado = usuarios.find(
      user => user.name === usuario && user.senha === senha,
    );
    if (usuarioEncontrado) {
      setAutenticar(true);
      nav.navigate('Logado');
    } else {
      Alert.alert('Erro!', 'Usuário ou senha incorreto(s).');
    }
  };

  return (
    <SafeAreaView>
    <ScrollView style={styles.container}>
      {/* <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'padding' : 'height'}
        style={styles.container}> */}
        <ImageBackground
          source={require('../assets/planoDefundoLoja.png')}
          resizeMode="cover"
          style={styles.planoDeFundoTelaLogin}>
          <View style={styles.divLogo}>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
          </View>
        </ImageBackground>
        <View style={styles.loginBox}>
          <Text style={styles.textoRoxo}>
            Bem-vindo, faça login para continuar
          </Text>
          <View>
            <Text style={styles.textoRoxo}>Usuário</Text>
            <TextInput
              keyboardType="email-address"
              style={styles.input}
              placeholder="Nome de usuário ou email"
              onChangeText={text => setUsuario(text)}
              value={usuario}
              keyboardAppearance='dark'
            />
          </View>
          <View>
            <Text style={styles.textoRoxo}>Senha</Text>
            <TextInput
              keyboardType="numeric"
              style={styles.input}
              placeholder="Senha"
              onChangeText={text => setSenha(text)}
              value={senha}
              secureTextEntry={true}
            />
          </View>
          <Button
            title="Login"
            onPress={() => {
              if (usuario && senha) {
                FazLogin();
              } else {
                Alert.alert('Preencha os campos!');
              }
            }}
            buttonStyle={styles.botaoLogin}
            titleStyle={{fontSize: 30, fontWeight: 'bold',}}
          />
        </View>
      {/* </KeyboardAvoidingView> */}
      </ScrollView>
      </SafeAreaView>
  );
};

const alturaJanela = Dimensions.get('window').height;
const larguraJanela = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    maxHeight: alturaJanela,
  },
  planoDeFundoTelaLogin: {
    height: alturaJanela * 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginBox: {
    height: alturaJanela * 0.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  input: {
    height: 50,
    width: larguraJanela * 0.85,
    borderWidth: 2,
    borderColor: '#32123f',
    borderRadius: 15,
  },
  divLogo: {
    backgroundColor: 'rgba(255,255,255,0.55)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    height: alturaJanela / 4,
    width: alturaJanela / 4,
  },
  logo: {
    height: alturaJanela / 4,
    width: alturaJanela / 4,
  },
  textoRoxo: {
    fontSize: 20,
    color: '#32123f',
  },
  botaoLogin: {
    backgroundColor: '#32123f',
    paddingHorizontal: larguraJanela / 12,
    paddingVertical: alturaJanela * 0.01,
    borderRadius: 20,    
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

/*
backgroundColor: 'rgba(255,255,255,0.5)',
flex:1,
justifyContent:'center',
borderRadius: 20,

*/
