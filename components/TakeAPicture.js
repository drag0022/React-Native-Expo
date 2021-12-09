import React from "react";
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native'

const TakeAPicture = (props) =>{
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


export default TakeAPicture;
const styles = StyleSheet.create({
    container:{
        padding:15
    },
    button:{
      borderRadius:10,
      width:230,
      fontWeight:'bold',
      alignSelf:'center',
      padding:10,
      backgroundColor:'#5c374c',
      justifyContent:'center',
      alignItems:'center',
      color:'#5c374c',
  },
  buttonText:{
      color:'#fff'
  }
})