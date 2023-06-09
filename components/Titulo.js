import { useState } from "react";
import { TextInput, View, StyleSheet} from "react-native";


function Titulo(props){
    let [contadorTittle,setTitle] = useState(props.titulo);
    function mudaTitulo(enteredText){
        
        props.mudaTitulo(props.id,contadorTittle);
        setTitle(enteredText);

    }
    return(
        <View style={styles.container}>
            <TextInput style={styles.escrita} placeholder='De um Titulo' placeholderTextColor="grey" value={contadorTittle} onChangeText={mudaTitulo}/>
        </View>
    );

};
export default Titulo

const styles = StyleSheet.create({
    container:{
        width:'100%',
        color:'white',
        alignItems:'center'
    },
    escrita:{
        borderWidth:2,
        borderColor:'dodgerblue',
        padding:5,
        borderRadius:16,
        fontSize:18,
        flex:1,
        width:'80%',
        color:'white',
        textAlign:"center",
        fontFamily:'Poppins_500Medium',
    },
})