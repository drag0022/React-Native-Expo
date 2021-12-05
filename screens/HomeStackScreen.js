import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AddNewJournal from './AddNewEntry';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

export default function HomeStackScreen() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={HomeScreen} />
			<Stack.Screen
				name="AddNewJournal"
				component={AddNewJournal}
				options={{ title: 'Add New Journal' }}
			/>
		</Stack.Navigator>
	);
}
