import React, { useRef, useState, useEffect } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
	SafeAreaView,
	ScrollView,
} from 'react-native';
import CameraUI from './CameraUI';
import { Camera } from 'expo-camera';
import * as Location from 'expo-location';
import CustomButton from '../components/CustomButton';
export default function AddNewEntry({ navigation }) {
	const [isCameraOpen, setIsCameraOpen] = useState(false);
	const [hasLocationPermission, setHasLocationPermission] = useState(false);
	const [hasCameraPermission, setHasCameraPermission] = useState(false);
	const [locationData, setLocationData] = useState(undefined);

	useEffect(async () => {
		await getCameraPermission();
	}, []);

	const getCameraPermission = async () => {
		const { status } = await Camera.requestCameraPermissionsAsync();
		setHasCameraPermission(status === 'granted');
	};

	const getLocationPermission = async () => {
		let { status } = await Location.requestForegroundPermissionsAsync();
		setHasLocationPermission(status === 'granted');
	};

	const handleOpenCamera = () => {
		setIsCameraOpen(true);
	};

	const handleGetLocation = async () => {
		await getLocationPermission();
		let location = await Location.getCurrentPositionAsync({ accuracy: 1 });
		setLocationData(location);
	};

	return (
		<SafeAreaView>
			{isCameraOpen ? (
				<CameraUI
					setIsCameraOpen={setIsCameraOpen}
					hasCameraPermission={hasCameraPermission}
				/>
			) : (
				<SafeAreaView>
					<ScrollView>
						<Text style={styles.heading}>New Entry</Text>
						<View style={styles.container}>
							<Text style={styles.text}>Enter A Title:</Text>
							<TextInput style={styles.title} placeholder="Journal Title..." />
							<Text style={styles.text}>Describe your day:</Text>
							<TextInput
								style={styles.textarea}
								placeholder="Description of journal..."
							/>
							<CustomButton
								onPress={() => {
									handleGetLocation();
								}}
								title="Add Location"
							/>
							<Text>{locationData && locationData.coords.latitude}</Text>
							<CustomButton
								onPress={() => {
									handleOpenCamera();
								}}
								title="Take a Picture"
							/>
						</View>
						<CustomButton
							onPress={() => {
								console.log('submitting journal');
							}}
							title="Submit Journal"
						/>
					</ScrollView>
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
		height: 600,
		marginTop: 1,
		margin: 20,
		alignContent: 'center',
		borderWidth: 0.2,
		borderBottomColor: '#5c374c',
		borderBottomWidth: 8,
	},
	heading: {
		paddingTop: 0,
		color: '#5c374c',
		fontSize: 35,
		lineHeight: 84,
		fontWeight: 'bold',
		marginLeft: 10,
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
	text: {
		color: '#5c374c',
		marginLeft: 18,
		paddingTop: 25,
	},
});
