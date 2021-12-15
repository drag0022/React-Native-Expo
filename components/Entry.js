import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
export default function Entry({ data }) {
	//component displaying the latest entry on the home page
	return data.length ? (
		<View style={styles.container}>
			<Text style={styles.title}>Latest Entry:</Text>
			<Text style={styles.text}>Picture: </Text>
			{data[data.length - 1].image ? (
				<Image
					style={styles.image}
					source={{
						uri: `${data[data.length - 1].image}`,
					}}
				/>
			) : (
				<Text style={styles.text}>No Image Available</Text>
			)}

			<Text style={styles.text}>Title: {`${data[data.length - 1].title}`}</Text>
			<Text style={styles.text}>Body: {`${data[data.length - 1].body}`}</Text>

			<Text>City: {data[data.length - 1].city}</Text>

			{data[data.length - 1].location ? (
				<Text style={styles.text}>
					Location: Latitude: {data[data.length - 1].location.coords.latitude}{' '}
					Longitude: {data[data.length - 1].location.coords.longitude} Speed:{' '}
					{data[data.length - 1].location.coords.speed}
				</Text>
			) : (
				<Text style={styles.text}>No Location Available</Text>
			)}
		</View>
	) : (
		<Text style={styles.text}>No Entries Yet</Text>
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
		margin: 10,
		alignContent: 'center',
		borderWidth: 0.2,
		borderBottomColor: '#5c374c',
		borderBottomWidth: 8,
	},
	title: {
		alignItems: 'center',
		fontWeight: '500',
		fontSize: 25,
		color: '#5c374c',
	},
	text: {
		alignItems: 'center',
		fontWeight: '500',
		fontSize: 15,
		color: '#5c374c',
		paddingVertical: 10,
		paddingHorizontal: 10,
		margin: 10,
		borderRadius: 15,
	},
	textarea: {
		height: 200,
		padding: 10,
		margin: 20,
		backgroundColor: '#E2E2E2',
	},
	image: {
		height: 150,
		width: 250,
		alignSelf: 'center',
		borderRadius: 5,
	},
});
