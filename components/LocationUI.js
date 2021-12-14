import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function LocationUI({ locationData, city }) {
	return (
		<View>
			<Text>City: {city}</Text>
			<Text>Latitude: {locationData.coords.latitude}</Text>
			<Text>Longitude: {locationData.coords.longitude}</Text>
			<Text>Speed: {locationData.coords.speed}</Text>
		</View>
	);
}

const styles = StyleSheet.create({});
