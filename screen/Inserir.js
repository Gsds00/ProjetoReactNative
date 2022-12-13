import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import { ListItem, Avatar, Button, Header } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';




export default function ListaScreen({ route, navigation }) {

    const [getProduto, setProduto] = useState();
    const [getPreco, setPreco] = useState();
    const [getCpf, setCpf] = useState();


    

    async function inserirDados() {

     await axios.post('http://professornilson.com/testeservico/clientes'
                , {

                    nome: getProduto,
                    telefone: getPreco,
                    cpf: getCpf
                }).then(function (response) {
                    console.log(response);
                }).catch(function (error) {
                    console.log(error);

                });

        }





   

    return (
        <View style={{alignItems:'center'}}>
                     
                     <Header
           
           
           leftComponent={<Button
                 title="<=="
                  onPress={() => navigation.navigate('Listar')}

           />}
           centerComponent={{ text: 'Alterar Dados.', style: { color: '#fff' } }} 

/>


            <Text>Produto:</Text>
            <TextInput style={{ height: 40, backgroundColor: 'white', width: 300, borderWidth: 1 }}
                onChangeText={text => setProduto(text)}
                value={getProduto}
            />


            <Text>Capaciadade:</Text>
            <TextInput style={{ height: 40, backgroundColor: 'white', width: 300, borderWidth: 1 }}
                onChangeText={text => setPreco(text)}
                value={getPreco}
            />


            <Text>Preço(R$):</Text>
            <TextInput style={{ height: 40, backgroundColor: 'white', width: 300, borderWidth: 1 }}
                onChangeText={text => setCpf(text)}
                value={getCpf}
            />


            <Button title="salvar"
            
                onPress={() => inserirDados()}

            ></Button>
        </View>
    )
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