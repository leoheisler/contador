
import { useState } from 'react';
import { Button, Modal, ScrollView, StyleSheet, Text, View } from 'react-native';
import Contador from './components/Contador';
import {useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';

export default function App() {
  //Carregamento das fontes a serem usadas
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });
  //useState para controlar o modal do total
  let [modalVisibility,setVisibility] = useState(false);

  //useState para controlar os contadores da aplicação(especificamente o valor, titulo e o index de cada um)
  let [counterList,setCounterList] = useState([]);
  let [titleList,setTitleList] = useState([]);
  let [index,setIndex] = useState(0);

  //useState para controlar o total dos contadores
  let [total,setTotal]=useState(0);

  /*
    FUNÇÃO AUMENTA LISTA e DIMINUI LISTA,
    quando chamada aumenta a lista de contadores, aumentando o counterList,TitleList e o INDEX
    *diminui lista faz o oposto
  */
  function aumentaLista(){
    setCounterList(counterList=>[...counterList,{valorInicial: 0, id: index}]);
    setTitleList(titleList => [...titleList,{tituloInicial:'',id:index}]);
    setIndex(index + 1);
  }
  function diminuiLista(){
    if(index !== 0){
      counterList.pop();
      titleList.pop();
      setIndex(index - 1);
    }
    
  }

  /*
    FUNÇÃO SETVALORESSINGULARES E ALTERA TOTAL
    setvaloressingulares pega o id de um dos contadores e atualiza seu valor para o valor passado para função
    alteratotal atualiza o total somando todos os contadores individuais
  
  */
  function setValoresSingulares(id,valor) {
    counterList[id].valorInicial=valor;
    alteraTotal();
  }
  function alteraTotal(){
    let x = 0
    counterList.forEach(counter =>{
      x += counter.valorInicial;
    })
    setTotal(x);
  }
  /*
    FUNÇÃO SETTITULOSINGULAR
    altera o valor do titulo de um contador expecifico, passada sua id

  */
  function setTituloSingular(id,titulo){
    titleList[id].tituloInicial = titulo;
  }
  /*
    FUNÇÃO MUDAVISIBILIDADE
    quando chamada muda a visibilidade do modal
  
  */
  function mudaVisibilidade(){
    setVisibility(!modalVisibility);
  }

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/*Texto com o Titulo*/}
      <Text style={styles.titulo}>Mega Contador</Text>

      {/*SCROLL VIEW CONTENDO OS CONTADORES*/}
      <ScrollView style={styles.scrollabe}>
        {counterList.map((item,i)=><Contador valor={item.valorInicial} key={i} id={item.id} titulo={titleList[item.id].tituloInicial} attValor={setValoresSingulares}  attTitulo={setTituloSingular}/>)}
      </ScrollView>

      {/*Modal com a tela do total*/}
      <Modal visible={modalVisibility} animationType='fade'>
        <View style={styles.modal}>
          <View style={styles.containerValores}>
            <Text style={styles.escrita}>Total</Text>
            {<Text style={styles.escrita_num}>{total}</Text>}
          </View>
          <Button title='close' onPress={mudaVisibilidade}/>
        </View>
      </Modal>

      {/*Container com as funcionalidades dos botoes */}
      <View style={styles.containerBotao}>
        <Button title='- contador' onPress={diminuiLista}/>
        <Button title='Total' onPress={mudaVisibilidade}/>
        <Button title='+ contador' onPress={aumentaLista}/>
      </View>
    </View>
  );
}
/*
  A partir dessa linha se encontram os estilos que são utilizados na aplicação
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical:16,
    flexDirection:'column',
    backgroundColor: '#3F0F6B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    color:'white',
    fontFamily: 'Poppins_700Bold',
    fontSize:28,
    marginVertical:15,
    paddingTop:8,
  },
  escrita:{
    color:'white',
    fontFamily:'Poppins_500Medium',
  },
  escrita_num:{
    color:'white',
    fontFamily:'Poppins_500Medium',
    fontSize:20,
    fontWeight:'bold',
  },
  containerValores: {
    width:'70%',
    margin:10,
    padding:20,
    borderRadius:5,
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:'#7726BD',  
  },
  scrollabe:{
    flex:1,
    width:'80%',
    padding: 5,
  },
  containerBotao:{
    flexDirection:'row',
    margin:20,
    width:'80%',
    justifyContent:'space-between'
  },
  modal:{
    flex:1,
    backgroundColor:'#3F0F6B',
    alignItems:'center',
    justifyContent:'center'
  }

});
