import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//component that gets rendered after a button is pressed in the addNewEntry form
export default function LocationUI({ locationData, city }) {
	return (
		<View>
			<Text style={styles.text}>Location: {city}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	text:{
		paddingTop: 15,
		alignItems: 'center',
		fontWeight: '500',
		fontSize: 15,
		color: '#5c374c',
		marginLeft: 10,
	}
	
});
