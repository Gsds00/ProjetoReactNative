import React, {useState, useEffect} from 'react';
import { View, TextInput,TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import { ListItem, Avatar, Button, Header } from 'react-native-elements'; 
import { ScrollView } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';
import { Card, Icon, Text } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';

export default function ListaScreen({route,navigation}){

      const [list,setlist] = useState([]);
      const refresh = useIsFocused();
        useEffect(()=>{
            function consultarDados() {
                axios.get('http://professornilson.com/testeservico/clientes')
                   .then( function (response) {
                         setlist(response.data);
                       }).catch(function (error) {
                 console.log(error);
               
               });
            }
             consultarDados();
            },[refresh])

  return(
     <View>
        <ScrollView>
       <Header
           
            centerComponent={{ text: 'Lista de produto', style:  { color: '#fff' }}}
             rightComponent={<Button
                   title="+"
                    onPress={() => navigation.navigate('Inserir')}
                
             />}
                  

/>


  {
    list.map((linha, indice) => (
      <ListItem key={indice} bottomDivider onPress={() =>navigation.navigate('Alterar',{

        nome:linha.nome,
        telefone:linha.telefone,
        email:linha.email,
        id:linha.id

     })}>
         <Card>
    
         <Card.Title>Produto</Card.Title>
         <Card.Divider/>
             <Card.Image
             source={{
              uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0pdWnd_KrvCX3hWHS6JsGp12lM65-G0iAtg&usqp=CAU',}}>
               <Text style={{marginBottom: 10}}>
        .............................................................................................................................
              </Text>
                  
              </Card.Image>
              
              <ListItem.Content>
                   <ListItem.Title>produto: {linha.nome}</ListItem.Title>
                    <ListItem.Subtitle>Capacidade: {linha.telefone}</ListItem.Subtitle>
               <ListItem.Subtitle>Preço: {linha.email}</ListItem.Subtitle>
          </ListItem.Content>
         </Card>
      </ListItem>
    ))
  }
           </ScrollView>
     </View>

  )





}
