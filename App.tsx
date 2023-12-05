﻿import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TelaInicio from './src/components/TelaInicio';
import TelaBuscar from './src/components/TelaBuscar';
import TelaLogin from './src/components/TelaLogin';
import TelaCarrinho from './src/components/TelaCarrinho';
import TelaPerfil from './src/components/TelaPerfil';
import TelaCriarConta from './src/components/TelaCriarConta';
import styles from './src/components/Styles';
import Icon from 'react-native-vector-icons/FontAwesome6';
import UserProvider from './src/contexto/UserContext';
import ProdProvider from './src/contexto/ProdutosContext';

const navStack = createNativeStackNavigator();
const navBottom = createBottomTabNavigator();
const estiloPadrao = styles.fonteMaior;

function Logado() {
  return (
    <navBottom.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: '#e4a0ff',
        tabBarInactiveBackgroundColor: '#32123f',
        tabBarShowLabel: true, //mostrar label
        //tabBarLabelStyle:{fontSize:15}
        tabBarLabelStyle: estiloPadrao,
      }}>
      <navBottom.Screen
        name="Inicio"
        options={{
          tabBarInactiveTintColor: 'gray', //Por padrão
          tabBarIcon: () => {
            return <Icon name="house" size={24} color="white" />;
          },
        }}
        component={TelaInicio}
      />
      <navBottom.Screen
        name="Buscar"
        component={TelaBuscar}
        options={{
          tabBarIcon: () => {
            return <Icon name="magnifying-glass" size={24} color="white" />;
          },
        }}
      />
      <navBottom.Screen
        name="Carrinho"
        component={TelaCarrinho}
        options={{
          tabBarIcon: () => {
            return <Icon name="cart-shopping" size={24} color="white" />;
          },
        }}
      />
      <navBottom.Screen
        name="Perfil"
        component={TelaPerfil}
        options={{
          tabBarIcon: () => {
            return <Icon solid name="user" size={24} color="white" />;
          },
        }}
      />
    </navBottom.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <UserProvider>
        <ProdProvider>
          <navStack.Navigator initialRouteName="Login">
            <navStack.Screen
              name="Login"
              component={TelaLogin}
              options={{headerShown: false}}
            />
            <navStack.Screen name="Criar Conta" component={TelaCriarConta} />
            <navStack.Screen
              name="Logado"
              component={Logado}
              options={{headerShown: false}}
            />
          </navStack.Navigator>
        </ProdProvider>
      </UserProvider>
    </NavigationContainer>
  );
}
