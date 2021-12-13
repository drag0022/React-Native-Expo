import React from 'react';
import {
	ImageBackground,
	StyleSheet,
	Text,
	View,
	Platform,
	ScrollView,
} from 'react-native';
import Entry from '../components/Entry';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import CustomButton from '../components/CustomButton';

export default function HomeScreen({ data, setData }) {
	const navigation = useNavigation();
	const image = {
		uri:
			'https://images.unsplash.com/photo-1578941838877-141265f3a898?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGpvdXJuYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60',
	};

	return (
		<ScrollView>
			<View style={styles.container}>
				<ImageBackground source={image} resizeMode="cover" style={styles.image}>
					<Text style={styles.title}>My Journal on {Platform.OS}</Text>
					<CustomButton
						color="#5c374c"
						onPress={() => {
							navigation.navigate('NetworkCellular');
						}}
						title="Hack My Phone"
					/>
					<StatusBar style="auto" />

					<Entry data={data} setData={setData} />
					<CustomButton
						color="#5c374c"
						onPress={() => {
							navigation.navigate('AddNewJournal');
						}}
						title="Add New Journal"
					/>
				</ImageBackground>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		minHeight: '100%',
	},
	image: {
		flex: 1,
		borderWidth: 0.2,
		borderBottomColor: '#5c374c',
		borderBottomWidth: 8,
	},
	title: {
		paddingTop: 0,
		color: '#5c374c',
		fontSize: 42,
		lineHeight: 84,
		fontWeight: 'bold',
		marginLeft: 15,
	},
	text: {
		paddingTop: 15,
		alignItems: 'center',
		fontWeight: '700',
		fontSize: 20,
		color: '#A10582',
		marginLeft: 10,
	},
	textBody: {
		paddingTop: 3,
		alignItems: 'center',
		borderWidth: 0.5,
		fontWeight: '500',
		fontSize: 15,
		color: 'white',
		paddingVertical: 10,
		paddingHorizontal: 10,
		backgroundColor: '#5c374c90',
		margin: 10,
		borderRadius: 15,
	},
	button: {
		borderRadius: 10,
		padding: 10,
		color: '#5c374c',
		backgroundColor: 'pink',
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		color: '#fff',
	},
});
