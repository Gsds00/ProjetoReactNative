import * as React from 'react';
import { View, Text } from 'react-native';


import { Button } from 'react-native-elements';

import {TextInput} from 'react-native';
import { StyleSheet} from 'react-native';

export default function CadastrarScreen({navigation}) {
    return (
  <View style={styles.container}>
      <View style={{marginTop:30, width:200}}>
        
         <Text>Login:</Text>
             <TextInput style={{backgroundColor: 'white', height:30}}/>
          
          <Text>Senha:</Text>
             <TextInput style={{backgroundColor: 'white', height:30}}/>
        
        <View style={{paddingTop:20}}>
           <Button
              title="Salvar"
              //onPress={ ()=> navigation.navigate('Login')}
              //style={{paddingTop:20}}
              
              />  
        </View>

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
  });