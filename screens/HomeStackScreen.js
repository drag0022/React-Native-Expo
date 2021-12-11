import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AddNewJournal from './AddNewEntry';
import HomeScreen from './HomeScreen';
import CameraUI from './CameraUI';
const Stack = createStackNavigator();

export default function HomeStackScreen({ data, setData }) {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Home"
				children={() => <HomeScreen data={data} setData={setData} />}
			/>
			<Stack.Screen
				name="AddNewJournal"
				component={AddNewJournal}
				options={{ title: 'Add New Journal' }}
			/>
		</Stack.Navigator>
	);
}
