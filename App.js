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


/*import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, View, Button, TextInput} from 'react-native';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input} from 'react-native-elements';
import { Text } from 'react-native-elements';

export default function App() {
  return (
<View style={styles.container}>
    <View style={{alignItems: 'center'}}>

       <Avatar

            size="large"rounded source={{ uri:'https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-gris.png',}}/>

    </View>  
    <View style={{marginTop:30, width:200,}}>


      <Text>Login:</Text>
        <TextInput style={{backgroundColor: 'white', height:30}}/>
          
      <Text>Senha:</Text>
        <TextInput style={{backgroundColor: 'white', height:30}}/>
      

   </View>
      <View style={{marginTop:30, width:200}}>
            <Button title="Login"/>
       
      </View>
   <View style={{marginTop:20, width:200}}>
           <Button title="Cadastre-se"
                     color={'red'}/>

   </View>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3dbc3',
  },
});*/
