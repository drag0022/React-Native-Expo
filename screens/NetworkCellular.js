import React, { useState, useEffect } from 'react';
import LottieView from 'lottie-react-native';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import * as Cellular from 'expo-cellular';
import { Card } from 'react-native-elements';

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
		<SafeAreaView style={styles.loader}>
			<View>
				<Card
					containerStyle={{
						backgroundColor: '#ffffff',
						shadowColor: 'rgba(0, 0, 0, .5)',
						shadowOffset: { width: 4, height: 8 },
						shadowOpacity: 0.25,
						alignSelf: 'center',
						shadowRadius: 12,
						borderBottomColor: '#A10582',
						borderBottomWidth: 8,
						borderRadius: 10,
					}}
				>
					<Card.Title style={{ color: '#A10582' }}>Phone info</Card.Title>
					<Card.Divider />
					<Text style={{ marginBottom: 10 }}>
						{voip
							? 'Your Phone can make phone calls.'
							: 'Your phone cannot make phone calls. You must be using a simulator'}
					</Text>
					<Text style={{ marginBottom: 10 }}>Your Carrier Is: {carrier}</Text>
					<Text style={{ marginBottom: 10 }}>
						Your phone is capable of{' '}
						{generation === 0 ? 'Simulator' : generation} connectivity. WOW!
					</Text>
				</Card>
			</View>
		</SafeAreaView>
	) : (
		<View style={styles.container}>
			<Text style={styles.text}>Hacking your phone...</Text>
			<LottieView
				source={require('../assets/lf30_editor_fvdnvkqk.json')}
				autoPlay
				loop
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		borderRadius: 5,
		height: 700,
		margin: 10,
	},
	loader: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 40,
		backgroundColor: '#ecf0f1',
		borderRadius: 20,
		height: 500,
	},
	text: {
		paddingTop: 25,
		fontWeight: '700',
		fontSize: 20,
		color: '#A10582',
		alignSelf: 'center',
	},
});
