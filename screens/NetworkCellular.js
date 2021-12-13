import React, { useState, useEffect } from 'react';
import LottieView from 'lottie-react-native';
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	ActivityIndicator,
} from 'react-native';
import * as Cellular from 'expo-cellular';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { Center } from 'native-base';
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
		<SafeAreaView style={styles.safearea} >
			<View >
				<Card containerStyle={{
					backgroundColor: '#ffffff', shadowColor: "rgba(0, 0, 0, .5)",
					shadowOffset: { width: 4, height: 8 },
					shadowOpacity: 0.25,
					alignSelf:'center',
					shadowRadius: 12,
					borderBottomColor: '#A10582',
					borderBottomWidth: 8,
					borderRadius:10}}
				>
				<Card.Title style={{color: '#A10582'}}>Phone info</Card.Title>
					<Card.Divider/>
					<Text style={{marginBottom: 10}}>
						{voip
							? 'Your Phone can make phone calls.'
							: 'Your phone cannot make phone calls. You must be using a simulator'}
					</Text>
					<Text style={{marginBottom: 10}}>Your Carrier Is: {carrier}</Text>
					<Text style={{marginBottom: 10}}>
						Your phone is capable of {generation === 0 ? 'Simulator' : generation}{' '}
						connectivity. WOW!
					</Text>
					</Card>
			</View>
		</SafeAreaView>
	) : (
		<View style={styles.container} >
			<Text style={styles.text}>Hacking your phone...</Text>
			<LottieView
          style={{
            width: 400,
            height: 400,
            color: '#5c374c',
          }}
          source={require('../assets/lf30_editor_fvdnvkqk.json')}
					autoPlay loop
        />
		</View>
	);
}

const styles = StyleSheet.create({
	container:{
		flexDirection: 'column',
		alignContent: 'center',
		padding: 20,
		backgroundColor: '#d3d3d370',
		borderRadius: 5,
		height: 700,
		margin: 10,
		alignContent: 'center',
	},
	safearea:{
		flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
			paddingTop: 40,
			backgroundColor: '#ecf0f1',
			borderRadius:20,
			height:500,
	},
	text: {
		paddingTop: 15,
		alignItems: 'center',
		fontWeight: '700',
		fontSize: 20,
		color: '#A10582',
		marginLeft: 10,
	},
phonecard:{
		backgroundColor:'red',
		height:400
	}
	
});