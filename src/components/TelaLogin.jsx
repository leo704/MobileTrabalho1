import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import styles from './Styles'


export default function TelaLogin(props) {
  return (
    <View style={styles.todasTelas}>
      <Text>Tela de Login</Text>
      <Button title='Login' onPress={()=>{props.navigation.navigate('Logado')}}/>
    </View>
  )
}


/*
    .Adicionar elementos VISUAIS que simulem um login
    .Estilizar
        -Logo
        -Entrada de usuário e senha
        -Opção de logar com google
*/


