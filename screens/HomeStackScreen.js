import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddNewJournal from './AddNewEntry';
import HomeScreen from './HomeScreen';
import NetworkCellular from './NetworkCellular';
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
				children={() => <AddNewJournal data={data} setData={setData} />}
				options={{ title: 'Add New Journal' }}
			/>
			<Stack.Screen
				name="NetworkCellular"
				children={() => <NetworkCellular />}
				options={{ title: 'Hacking your phone :)' }}
			/>
		</Stack.Navigator>
	);
}
