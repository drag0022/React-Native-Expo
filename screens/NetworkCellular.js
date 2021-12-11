import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	ActivityIndicator,
} from 'react-native';
import * as Cellular from 'expo-cellular';

export default function NetworkCellular() {
	const [voip, setVoip] = useState(false);
	const [carrier, setCarrier] = useState(null);
	const [generation, setGeneration] = useState(0);
	const [isShowingLoader, setIsShowingLoader] = useState(false);

	useEffect(() => {
		setIsShowingLoader(true);
		setTimeout(async () => {
			setIsShowingLoader(false);
			setVoip(await Cellular.allowsVoipAsync());
			setCarrier(await Cellular.getCarrierNameAsync());
			setGeneration(await Cellular.getCellularGenerationAsync());
		}, 5000);
	}, []);

	return !isShowingLoader ? (
		<SafeAreaView>
			<Text>
				{voip
					? 'Your Phone can make phone calls.'
					: 'Your phone cannot make phone calls. You must be using a simulator'}
			</Text>
			<Text>Your Carrier Is: {carrier}</Text>
			<Text>
				Your phone is capable of {generation === 0 ? 'Simulator' : generation}{' '}
				connectivity. WOW!
			</Text>
		</SafeAreaView>
	) : (
		<View>
			<ActivityIndicator size="large" />
			<Text>Hacking your phone...</Text>
		</View>
	);
}

const styles = StyleSheet.create({});
