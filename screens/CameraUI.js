import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Camera } from 'expo-camera';
import CustomButton from '../components/CustomButton';

import { MaterialIcons } from '@expo/vector-icons';

export default function CameraUI({
	setIsCameraOpen,
	hasCameraPermission,
	setPictureURI,
}) {
	const [type, setType] = useState(Camera.Constants.Type.back);
	//inside the camera component, add the ref pointer
	let camera = useRef();

	const takePicture = () => {
		const options = {
			quality: 1,
		};
		camera
			.takePictureAsync(options)
			.then(({ uri }) => {
				setPictureURI(uri);
			})
			.then(() => {
				setIsCameraOpen(false);
			});
	};

	useEffect(() => {
		console.log({ hasCameraPermission });
	}, []);

	if (hasCameraPermission === null) {
		return <View style={styles.container} />;
		//empty view until we have permission
	}
	if (hasCameraPermission === false) {
		return (
			<View style={styles.container}>
				<Text>No access to camera</Text>;
			</View>
		);
		//message about permission being denied by user
	}

	return (
		hasCameraPermission && (
			<View style={styles.container}>
				<Text style={styles.title}>Take a picture</Text>
				<View>
					<Camera
						style={styles.camera}
						type={type}
						ref={(r) => {
							camera = r;
						}}
					/>
				</View>
				<View style={styles.btnFlip}>
					<MaterialIcons.Button
						name="flip-camera-android"
						backgroundColor="#c197ae"
						onPress={() => {
							setType(
								type === Camera.Constants.Type.back
									? Camera.Constants.Type.front
									: Camera.Constants.Type.back
							);
						}}
					>
						Flip
					</MaterialIcons.Button>
				</View>
				<View>
					<CustomButton
						color="#5c374c"
						onPress={() => {
							takePicture();
						}}
						title="Take Picture"
					/>
				</View>
			</View>
		)
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
	camera: {
		width: 300,
		height: 400,
	},
	btnFlip: {
		color: '#ffffff',
		width: 100,
		height: 40,
		borderRadius: 5,
		marginLeft: 20,
		marginTop: 10,
	},
	title: {
		marginLeft: 20,
		paddingTop: 10,
		color: '#5c374c',
		fontSize: 30,
		lineHeight: 54,
		fontWeight: 'bold',
	},
});
