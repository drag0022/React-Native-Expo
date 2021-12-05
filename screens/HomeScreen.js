import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Entry from '../components/Entry';
export default function HomeScreen({ navigation }) {
	return (
		<View>
			<Entry />
			<Button
				onPress={() => {
					navigation.navigate('AddNewJournal');
				}}
				title="Add New Journal"
				color="black"
				accessibilityLabel="Add a new entry to the journal"
			/>
		</View>
	);
}

const styles = StyleSheet.create({});
