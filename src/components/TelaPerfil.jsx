import React, {useContext, useEffect} from 'react';
import {View, Text, Button, StyleSheet, FlatList, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ListItem} from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {ContextoUser} from '../contexto/UserContext';

export default function TelaPerfil(props) {
  const nav = useNavigation();

  const logout = () => {
    resetUsuario();
    nav.navigate('Login');
  };

  const apagaPerfil = () => {
    resetUsuario();
    nav.navigate('Login');
    Alert.alert;
  };

  const {
    usuarioLogado,
    resetUsuario,
    atualizacao,
    apagarUsuario,
    setUsuarioLogado,
  } = useContext(ContextoUser);

  useEffect(() => {
    setUsuarioLogado(usuarioLogado);
  }, [atualizacao, usuarioLogado]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.texto}>Bem vindo(a), {usuarioLogado.nome}</Text>
      <FlatList
        data={[usuarioLogado]}
        extraData={atualizacao}
        keyExtractor={item => (item.id ? item.id.toString() : 'chave')}
        ListHeaderComponent={() => (
          <View>
            <Text>Detalhes do Usuário:</Text>
          </View>
        )}
        renderItem={({item}) => (
          <ListItem bottomDivider key={item.id ? item.id.toString() : 'chave'}>
            <ListItem.Content>
              <View>
                <ListItem.Title>{item.nome}</ListItem.Title>
                <ListItem.Title>{item.email}</ListItem.Title>
                <ListItem.Title>{item.endereco}</ListItem.Title>
                <ListItem.Title>
                  {item.cidade} - {item.estado}
                </ListItem.Title>
              </View>
              <ListItem.ButtonGroup
                style={styles.botaoContainer}
                buttons={[
                  <Icon
                    name="edit"
                    size={20}
                    color={'blue'}
                    onPress={() =>
                      props.navigation.navigate('EditarPerfil', {item})
                    }
                  />,
                  <Icon
                    name="trash-can"
                    size={20}
                    color={'red'}
                    /*onPress={() => {
                      apagarUsuario(item.id);
                      logout();
                    }}*/
                    onPress={() => {
                      Alert.alert(
                        'Deletar conta',
                        'Tem certeza?',
                        [
                          {
                            text: 'Sim',
                            onPress: () => {
                              apagarUsuario(item.id);
                              logout();
                            },
                          },
                        ],
                        {
                          cancelable: true,
                        },
                      );
                    }}
                  />,
                ]}
              />
            </ListItem.Content>
          </ListItem>
        )}
      />
      <View style={styles.botaoContainer}>
        <Button title="Fazer logout" onPress={logout} color={'#32123f'} />
      </View>
    </SafeAreaView>
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
    color: '#32123f',
  },
  content: {
    flex: 1,
  },
  botaoContainer: {
    padding: 16,
  },
});
