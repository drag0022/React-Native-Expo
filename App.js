import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeStackScreen from './screens/HomeStackScreen';
import JournalEntries from './screens/JournalEntries';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import initialData from './data/data';
const Tab = createBottomTabNavigator();
export default function App() {
	const [data, setData] = useState(initialData);

	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;
						focused
							? (iconName = route.name.toLocaleLowerCase())
							: (iconName = `${route.name.toLocaleLowerCase()}-outline`);
						return <Ionicons name={iconName} size={size} color={color} />;
					},
				})}
			>
				<Tab.Screen
					name="Home"
					component={HomeStackScreen}
					options={{ headerShown: false }}
				/>
				<Tab.Screen
					name="Journal"
					children={() => <JournalEntries data={data} setData={setData} />}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
