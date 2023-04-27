import { useState } from 'react';
import { View,Button,Text,StyleSheet } from "react-native";
import {useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import Titulo from './Titulo';

function Contador(props){
    //PEGA AS FONTES
    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
    });

    //SETA O CONTADOR DO COMPONENTE CONTADOR
    let [numCounter,setCounter] = useState(props.valor);

    //FUNÇÕES BASICAS DO CONTADOR
    function aumentaUm(){
        setCounter(numCounter+1);
        props.attValor(props.id,numCounter + 1);
    }
    function diminuiUm(){
        setCounter(numCounter - 1);
        props.attValor(props.id,numCounter - 1);
    }
    function reseta(){
        setCounter(0);
        props.attValor(props.id,0);
    }
    if (!fontsLoaded) {
        return null;
    }

    return(
        <View style={styles.containerValores}>
            <Titulo id={props.id} mudaTitulo={props.attTitulo} titulo={props.titulo}/>
                 {<View><Text style={styles.escrita_num}> {numCounter} </Text></View>}
            <View style={styles.container_botao}>
                <Button title= 'Sub 1' onPress={diminuiUm}/>
                <Button title='reset' onPress={reseta}/>
                <Button title='Add 1' onPress={aumentaUm} />
            </View> 
        </View>
    );
};

export default Contador;
/*
    stylesheet contendo os estilos do contador
*/
const styles = StyleSheet.create({
    containerValores: {
        width:'95%',
        margin:10,
        padding:20,
        borderRadius:5,
        alignItems:'center',
        backgroundColor:'#7726BD',  
    },
    escrita:{
        color:'white',
        fontFamily:'Poppins_500Medium',
    },
    escrita_num:{
        color:'white',
        fontFamily:'Poppins_500Medium',
        fontSize:20,
        margin:10,
        fontWeight:'bold',
       
    },
    container_botao:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        borderColor:'black',
    },

});