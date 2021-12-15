import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//component that gets rendered after a button is pressed in the addNewEntry form
export default function LocationUI({ locationData, city }) {
	return (
		<View>
			<Text>Location: {city}</Text>
		</View>
	);
}

const styles = StyleSheet.create({});
