
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import {useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';

export default function App() {
  //Carregamento das fontes a serem usadas
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });


  let [numHome,aumentaHome] = useState(0);
  let [numMuie,aumentaMuie] = useState(0);
  let [total,aumentaTotal] = useState(0);
  function addHomem(){
    aumentaHome(numHome+1);
    aumentaTotal(total+1);
  }
  function addMulher(){
    aumentaMuie(numMuie+1);
    aumentaTotal(total+1);
  }

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Mega Contador</Text>
      <View style={styles.containerValores}>
        <Text style={styles.escrita}>Numero de Machos</Text>
        {<View><Text style={styles.escrita_num}> {numHome} </Text></View>}
        <Button title='Add 1' onPress={addHomem} />
      </View>
      <View style={styles.containerValores}>
        <Text style={styles.escrita}>Numero de Femeas</Text>
        {<View><Text style={styles.escrita_num}> {numMuie} </Text></View>}
        <Button title='Add 1' onPress={addMulher} />
      </View>
      <View style={styles.containerValores}>
        <Text style={styles.escrita}>Numero Total</Text>
        {<View><Text style={styles.escrita_num_t}> {total} </Text></View>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#3F0F6B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    color:'white',
    fontFamily: 'Poppins_700Bold',
    fontSize:28,
    margin:16,
    padding:8,
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
  escrita_num_t:{
    color:'white',
    fontFamily:'Poppins_500Medium',
    fontSize:20,
    fontWeight:'bold',
    marginBottom:'30%',
  },
  containerValores: {
    width:'50%',
    height:'20%',
    margin:10,
    padding:20,
    borderRadius:5,
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:'#7726BD',  
  },

});
