import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Button} from 'react-native-elements';

export default function TelaCriarConta() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [usuario, setusuario] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [endereço, setEndereço] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');

  function fazVerificacao() {
    //senhas coincidentes
    if (senha != confirmaSenha) {
      Alert.alert('Senhas não concidem');
      return false;
    }
    if (
      nome == '' ||
      email == '' ||
      senha == '' ||
      usuario == '' ||
      endereço == '' ||
      cidade == '' ||
      estado == ''
    ) {
      Alert.alert('Preencha todos os campos!');
      return false;
    }
    //campos preenchidos
    //usuario ja nao existe
    return true;
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
            onChangeText={text => setusuario(text)}
            value={usuario}
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
            onChangeText={text => setEndereço(text)}
            value={endereço}
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
          onPress={() => fazVerificacao()}
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
