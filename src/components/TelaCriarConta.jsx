import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Button} from 'react-native-elements';
import {ContextoUser} from '../contexto/UserContext';

export default function TelaCriarConta(props) {
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const {
    usuarios,
    nome,
    email,
    senha,
    username,
    endereco,
    cidade,
    estado,
    setNome,
    setEmail,
    setSenha,
    setUsername,
    setEndereco,
    setCidade,
    setEstado,
    gravarDados,
  } = useContext(ContextoUser);

  function fazVerificacao() {
    if (senha != confirmaSenha) {
      //senhas nao coincidentes
      Alert.alert('Senhas não concidem');
    } else if (
      //campos nao estão preenchidos
      nome == '' ||
      email == '' ||
      senha == '' ||
      username == '' ||
      endereco == '' ||
      cidade == '' ||
      estado == ''
    ) {
      Alert.alert('Preencha todos os campos!');
    } else {
      //ultimo caso
      //usuario ja existe
      let usernames = [];
      let achou = false;
      usuarios.forEach(user => {
        usernames.push(user.username);
      });
      usernames.forEach(item => {
        //usuario ja existe
        if (username == item) {
          Alert.alert('Nome de usuario ja esta sendo utilizado!');
          achou = true;
        }
      });
      if (!achou) {
        fazPost();
      }
    }
  }

  function fazPost() {
    let aAdicionar = {
      nome: nome,
      email: email,
      senha: senha,
      username: username,
      endereco: endereco,
      cidade: cidade,
      estado: estado,
    };
    gravarDados(aAdicionar);
    //adicionar ao json de usuarios
    //salvar as informações, informar ao usuario que deu certo e limpar os dados
    console.log('fazendo post!');
    props.navigation.goBack();
    Alert.alert('Concluido!');
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.caixaRegistra}>
        <GestureHandlerRootView style={styles.inputss}>
          <TextInput
            keyboardType="default"
            placeholder="Nome"
            onChangeText={text => setNome(text)}
            value={nome}
            style={styles.inputStyle100}
          />
          <TextInput
            keyboardType="email-address"
            placeholder="e-mail"
            onChangeText={text => setEmail(text)}
            value={email}
            style={styles.inputStyle100}
          />
          <TextInput
            keyboardType="default"
            placeholder="Nome de usuario"
            onChangeText={text => setUsername(text)}
            value={username}
            style={styles.inputStyle100}
          />
          <TextInput
            keyboardType="default"
            placeholder="senha"
            onChangeText={text => setSenha(text)}
            secureTextEntry={true}
            value={senha}
            style={styles.inputStyle50}
          />
          <TextInput
            keyboardType="default"
            placeholder="Confirme sua senha"
            onChangeText={text => setConfirmaSenha(text)}
            secureTextEntry={true}
            value={confirmaSenha}
            style={styles.inputStyle50}
          />
          <TextInput
            keyboardType="default"
            placeholder="Endereço"
            onChangeText={text => setEndereco(text)}
            value={endereco}
            style={styles.inputStyle50}
          />
          <TextInput
            keyboardType="default"
            placeholder="Cidade"
            onChangeText={text => setCidade(text)}
            value={cidade}
            style={styles.inputStyle25}
          />
          <TextInput
            keyboardType="default"
            placeholder="UF"
            onChangeText={text => setEstado(text.toLocaleUpperCase())}
            value={estado}
            style={styles.inputStyle25}
            maxLength={2}
          />
        </GestureHandlerRootView>
        <Button
          title={'Registrar'}
          onPress={() => {
            fazVerificacao();
          }}
          buttonStyle={styles.botaoLogin}
          // titleStyle={{fontSize: 20, fontWeight: 'bold', width:alturaJanela / 6}}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  inputStyle100: {
    height: 50,
    borderWidth: 1,
    borderColor: '#32123f',
    borderRadius: 8,
    width: '100%',
  },
  inputStyle50: {
    height: 50,
    borderWidth: 1,
    borderColor: '#32123f',
    borderRadius: 8,
    width: '49%',
  },
  inputStyle25: {
    height: 50,
    borderWidth: 1,
    borderColor: '#32123f',
    borderRadius: 8,
    width: '24%',
  },
  inputss: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    // gap: 10,
  },
  container: {
    backgroundColor: '#32123f',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  caixaRegistra: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    height: '70%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  botaoLogin: {
    backgroundColor: '#32123f',
    borderRadius: 20,
  },
});
