import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
	SafeAreaView,
} from 'react-native';

export default function AddNewEntry() {
	return (
		<SafeAreaView>
			<View style={styles.container}>
				<Text>Enter A Title:</Text>
				<TextInput style={styles.title} placeholder="Journal Title..." />
				<Text>Describe your day:</Text>
				<TextInput
					style={styles.textarea}
					placeholder="Description of journal..."
				/>
				<Button
					title="Take A Picture"
					onPress={() => {
						console.log('taking a picture');
					}}
				/>
			</View>
			<Button
				title="Submit Journal"
				onPress={() => {
					console.log('submitting journal');
				}}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignContent: 'center',
		padding: 20,
		backgroundColor: 'lightgrey',
	},
	title: {
		height: 50,
		padding: 10,
		margin: 20,
		backgroundColor: '#E2E2E2',
	},
	textarea: {
		height: 200,
		padding: 10,
		margin: 20,
		backgroundColor: '#E2E2E2',
	},
});
