import { Center } from "native-base";
import React from "react";
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native'


const CustomButton = (props) =>{
    return(
        <>
            <View style={styles.container}>
                <TouchableOpacity 
                    onPress={()=> props.onPress?.() }
                    style={styles.button}>
                    <Text style={styles.buttonText}>{props.title}</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}


export default CustomButton;
const styles = StyleSheet.create({
    container:{
        padding:15
    },
    button:{
        borderRadius:5,
        width:230,
        fontWeight:'bold',
        alignSelf:'center',
        padding:10,
        backgroundColor:'#5c374c',
        justifyContent:'center',
        alignItems:'center',
        color:'#5c374c',
        width:170,
	    height:45,
    },
    buttonText:{
        color:'#fff'
    },
})