import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TelaInicio from './src/components/TelaInicio';
import TelaBuscar from './src/components/TelaBuscar';
import TelaLogin from './src/components/TelaLogin';
import TelaCarrinho from './src/components/TelaCarrinho';
import TelaPerfil from './src/components/TelaPerfil';

const navStack = createNativeStackNavigator();
const navBottom = createBottomTabNavigator();

function Logado(){
  /*
    Retirar a palavra 'Logado' em options
  */
  return (
    <navBottom.Navigator>
      <navBottom.Screen name='Inicio' component={TelaInicio}/>
      <navBottom.Screen name='Buscar' component={TelaBuscar}/>
      <navBottom.Screen name='Carrinho' component={TelaCarrinho}/>
      <navBottom.Screen name='Perfil' component={TelaPerfil}/>
    </navBottom.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <navStack.Navigator>
        <navStack.Screen name='Login' component={TelaLogin}/>
        <navStack.Screen name='Logado' component={Logado}/>
      </navStack.Navigator>
    </NavigationContainer>
  );
}
