import { View, Text, Button } from 'react-native'
import React from 'react'

export default function TelaLogin(props) {
  return (
    <View>
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