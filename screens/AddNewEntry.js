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
import LocationUI from '../components/LocationUI';
import { useNavigation } from '@react-navigation/native';
export default function AddNewEntry({ setData, data }) {
	const [isCameraOpen, setIsCameraOpen] = useState(false);
	const [hasLocationPermission, setHasLocationPermission] = useState(false);
	const [hasCameraPermission, setHasCameraPermission] = useState(false);
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [locationData, setLocationData] = useState(undefined);
	const [pictureURI, setPictureURI] = useState('');
	const navigation = useNavigation();
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

	const handleSubmitJournal = () => {
		const journal = {
			id: Date.now(),
			title: title,
			body: body,
			image: pictureURI,
			location: locationData,
		};
		setData([...data, journal]);
		navigation.navigate('Journal');
	};
	return (
		<SafeAreaView>
			{isCameraOpen ? (
				<CameraUI
					setIsCameraOpen={setIsCameraOpen}
					hasCameraPermission={hasCameraPermission}
					setPictureURI={setPictureURI}
				/>
			) : (
				<SafeAreaView>
					<ScrollView>
						<Text style={styles.heading}>New Entry</Text>
						<View style={styles.container}>
							<Text style={styles.text}>Enter A Title:</Text>
							<TextInput
								style={styles.title}
								onChangeText={(text) => {
									setTitle(text);
								}}
								placeholder="Journal Title..."
								value={title}
							/>
							<Text style={styles.text}>Describe your day:</Text>
							<TextInput
								style={styles.textarea}
								onChangeText={(text) => {
									setBody(text);
								}}
								placeholder="Description of journal..."
								value={body}
							/>
							<CustomButton
								onPress={() => {
									handleGetLocation();
								}}
								title="Add Location"
							/>
							<Text>
								{locationData && <LocationUI locationData={locationData} />}
							</Text>
							<CustomButton
								onPress={() => {
									handleOpenCamera();
								}}
								title="Take a Picture"
							/>
						</View>
						<CustomButton
							onPress={() => {
								handleSubmitJournal();
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
