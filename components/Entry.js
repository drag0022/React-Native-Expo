import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
export default function Entry({ data }) {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>This is the latest entry</Text>
			<Text style={styles.text}>Title: {`${data[0].title}`}</Text>
			<Text style={styles.text}>Description:</Text>
			<Text style={styles.text}>Picture:</Text>
			<Text style={styles.text}>Location Data:</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		alignContent: 'center',
		padding: 20,
		backgroundColor: '#d3d3d370',
		borderRadius: 5,
		height: 300,
		margin: 10,
		alignContent: 'center',
    borderWidth: 0.2,
		borderBottomColor:'#5c374c',
		borderBottomWidth:8,
	
	},
	title: {
		height: 50,
		padding: 10,
		margin: 20,
		backgroundColor: '#E2E2E2',
	},
	text:{
		paddingTop:3,
		alignItems:'center',
		fontWeight:'500',
		fontSize:15,
		color:'#5c374c',
		paddingVertical:10,
		paddingHorizontal:10,
		margin:10,
		borderRadius:15
	},
	textarea: {
		height: 200,
		padding: 10,
		margin: 20,
		backgroundColor: '#E2E2E2',
	},
});
