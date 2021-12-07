import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Entry from '../components/Entry';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen({ data, setData }) {
	const navigation = useNavigation();
	return (
		<View>
			<Entry data={data} setData={setData} />
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
