import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import LoginScreen from './screen/Login';
import CadastrarScreen from './screen/Cadastrar';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastrar" component={CadastrarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;