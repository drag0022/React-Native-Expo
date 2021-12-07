import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Camera } from 'expo-camera';
export default function CameraUI({ setIsCameraOpen }) {
	const [ready, setReady] = useState(false);
	const [hasPermission, setHasPermission] = useState(null);
	const [type, setType] = useState(Camera.Constants.Type.front);
	//inside the camera compoennt, add the ref pointer
	const camera = useRef();

	return (
		<View>
			<Button
				title="Back"
				onPress={() => {
					setIsCameraOpen(false);
				}}
			/>
			<Text>Camera View</Text>
		</View>
	);
}

const styles = StyleSheet.create({});
