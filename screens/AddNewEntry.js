import React, { useRef, useState, useEffect } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
	SafeAreaView,
} from 'react-native';
import CameraUI from './Camera';
import { Camera } from 'expo-camera';
import TakeAPicture from '../components/TakeAPicture';
export default function AddNewEntry({ navigation }) {
	const [isCameraOpen, setIsCameraOpen] = useState(false);

	const [hasPermission, setHasPermission] = useState(true);

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestCameraPermissionsAsync();
			setHasPermission(status === 'granted');
		})();
		console.log(hasPermission);
	}, []);

	const handleOpenCamera = () => {
		setIsCameraOpen(true);
	};
	return (
		<SafeAreaView>
			{isCameraOpen ? (
				<CameraUI
					setIsCameraOpen={setIsCameraOpen}
					hasPermission={hasPermission}
				/>
			) : (
				<SafeAreaView>
					<Text style={styles.heading}>New Entry</Text>
					<View style={styles.container}>
						<Text style={styles.text}>Enter A Title:</Text>
						<TextInput style={styles.title} placeholder="Journal Title..." />
						<Text style={styles.text}>Describe your day:</Text>
						<TextInput
							style={styles.textarea}
							placeholder="Description of journal..."
						/>
						<TakeAPicture onPress={() => {
								handleOpenCamera();
							}}
							title="Take a Picture" />
					</View>
					<TakeAPicture onPress={() => {
							console.log('submitting journal');
				}} title="Submit Journal" />
				</SafeAreaView>
			)}
		</SafeAreaView>
	);
}



const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		alignContent: 'center',
		padding: 20,
		backgroundColor: '#d3d3d370',
		borderRadius: 5,
		height: 500,
		marginTop: 1,
		margin: 20,
		alignContent: 'center',
    borderWidth: 0.2,
		borderBottomColor:'#5c374c',
		borderBottomWidth:8,
	},
	heading:{
		paddingTop:0,
    color: '#5c374c',
    fontSize: 35,
    lineHeight: 84,
    fontWeight: 'bold',
		marginLeft: 10
	},
	title: {
		height: 50,
		padding: 10,
		margin: 20,
		backgroundColor: '#FFF',
	},
	textarea: {
		height: 180,
		padding: 10,
		margin: 20,
		backgroundColor: '#FFF',
	},
	text:{
		color: '#5c374c',
		marginLeft: 18,
		paddingTop: 25,
		
	}
});
