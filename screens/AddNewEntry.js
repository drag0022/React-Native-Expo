import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	SafeAreaView,
	ScrollView,
	KeyboardAvoidingView,
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
	const [city, setCity] = useState('');
	const [pictureURI, setPictureURI] = useState('');
	const navigation = useNavigation();

	//get camera permissions as soon as user lands on page
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

	//take in lat and long and convert to city (address) by calling hereAPI
	const convertCoordsToCity = async (latitude, longitude) => {
		const KEY = '?apiKey=GoSI2hPI3gCWq2Xf78Zfl6eOjO0EWYUdiSx6DB78ybE';
		const URL =
			'https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json';
		const MODE = '&mode=retrieveAddresses';
		const AREA = '250';

		const COORDS = `&prox=${latitude},${longitude},${AREA}`;

		const resp = await fetch(`${URL}${KEY}${MODE}${COORDS}`);
		const data = await resp.json();
		//address string from response object
		setCity(data.Response.View[0].Result[0].Location.Address.Label);
	};
	const handleGetLocation = async () => {
		await getLocationPermission();
		let location = await Location.getCurrentPositionAsync({ accuracy: 1 });

		convertCoordsToCity(location.coords.latitude, location.coords.longitude);

		setLocationData(location);
	};

	//save into state data
	const handleSubmitJournal = () => {
		const journal = {
			id: Date.now(),
			title: title,
			body: body,
			image: pictureURI,
			city: city,
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
					<KeyboardAvoidingView
						behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
					>
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
								<Text style={styles.text}>
									{locationData && (
										<LocationUI locationData={locationData} city={city} />
									)}
								</Text >
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
					</KeyboardAvoidingView>
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
		height: 'auto',
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
		paddingTop: 5,
	},
});
