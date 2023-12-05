import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, FlatList, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ListItem } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome6'
import { ContextoUser } from '../contexto/UserContext';
import EditarPerfil from './EditarPerfil';

export default function TelaPerfil(props) {
  const nav = useNavigation();

  const logout = () => {
    resetUsuario();
    nav.navigate('Login');
  };


  const { usuarioLogado, resetUsuario, atualizacao } = useContext(ContextoUser)


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.texto}>Bem vindo(a), {usuarioLogado.nome}</Text>
      <FlatList
        data={[usuarioLogado]}
        extraData={atualizacao}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <View>
            <Text>Detalhes do Usuário:</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <ListItem bottomDivider>
            <ListItem.Content>
              <View>
                <ListItem.Title>{item.nome}</ListItem.Title>
                <ListItem.Title>{item.email}</ListItem.Title>
                <ListItem.Title>{item.endereco}</ListItem.Title>
                <ListItem.Title>{item.cidade} - {item.estado}</ListItem.Title>
              </View>
            </ListItem.Content>
          </ListItem>
        )}
      />

      <View style={styles.botaoContainer}>
        <Button
          title="Editar Perfil"
          onPress={() => nav.navigate("EditarPerfil", { usuarioLogado })}
          color={'#32123f'}
        />
      </View>
      <View style={styles.botaoContainer}>
        <Button title='Fazer logout' onPress={logout} color={'#32123f'} />
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
    color: '#32123f'
  },
  content: {
    flex: 1,
  },
  botaoContainer: {
    padding: 16
  },
});
