import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Entry() {
	return (
		<View style={styles.container}>
			<Text>This is the latest entry</Text>
			<Text>Title:</Text>
			<Text>Description:</Text>
			<Text>Picture:</Text>
			<Text>Location Data:</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignContent: 'center',
		padding: 20,
		backgroundColor: 'lightgrey',
	},
	title: {
		height: 50,
		padding: 10,
		margin: 20,
		backgroundColor: '#E2E2E2',
	},
	textarea: {
		height: 200,
		padding: 10,
		margin: 20,
		backgroundColor: '#E2E2E2',
	},
});
