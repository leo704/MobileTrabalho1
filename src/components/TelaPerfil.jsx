import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

//adicionar contexto de login

export default function TelaPerfil() {
  const nav = useNavigation();
  const logout = () => { nav.navigate('Login'); };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>TelaPerfil</Text>
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
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoContainer: {
    padding: 16
  },
});