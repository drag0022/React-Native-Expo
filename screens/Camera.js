import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Camera } from 'expo-camera';
export default function CameraUI({ setIsCameraOpen, hasPermission }) {
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
				console.log(uri);
			})
			.then(() => {
				setIsCameraOpen(false);
			});
	};

	useEffect(() => {
		console.log({ hasPermission });
	}, []);

	if (hasPermission === null) {
		return <View style={styles.container} />;
		//empty view until we have permission
	}
	if (hasPermission === false) {
		return (
			<View style={styles.container}>
				<Text>No access to camera</Text>;
			</View>
		);
		//message about permission being denied by user
	}

	return (
		hasPermission && (
			<View>
				<Button
					title="Back"
					onPress={() => {
						setIsCameraOpen(false);
					}}
				/>
				<Text>Take A Picture</Text>
				<View>
					<Camera
						style={styles.camera}
						type={type}
						ref={(r) => {
							camera = r;
						}}
					/>
				</View>
				<Button
					title="Take Picture"
					onPress={() => {
						takePicture();
					}}
				/>
			</View>
		)
	);
}

const styles = StyleSheet.create({
	camera: {
		width: 300,
		height: 400,
		margin: 10,
	},
});
