import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
export default function Entry({ data }) {
	return data.length ? (
		<View style={styles.container}>
			<Text style={styles.text}>Latest Entry:</Text>
			<Text style={styles.text}>Title: {`${data[data.length - 1].title}`}</Text>
			<Text style={styles.text}>Body: {`${data[data.length - 1].body}`}</Text>
			<Text style={styles.text}>Picture: </Text>
			{data[data.length - 1].image ? (
				<Image
					style={styles.image}
					source={{
						uri: `${data[data.length - 1].image}`,
					}}
				/>
			) : (
				<Text>No Image Available</Text>
			)}
			{data[data.length - 1].location ? (
				<Text>
					Location: Latitude: {data[data.length - 1].location.coords.latitude}{' '}
					Longitude: {data[data.length - 1].location.coords.longitude} Speed:{' '}
					{data[data.length - 1].location.coords.speed}
				</Text>
			) : (
				<Text>No Location Available</Text>
			)}
		</View>
	) : (
		<Text>No Entries Yet</Text>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		alignContent: 'center',
		padding: 20,
		backgroundColor: '#d3d3d370',
		borderRadius: 5,
		height: 400,
		margin: 10,
		alignContent: 'center',
		borderWidth: 0.2,
		borderBottomColor: '#5c374c',
		borderBottomWidth: 8,
	},
	title: {
		height: 50,
		padding: 10,
		margin: 20,
		backgroundColor: '#E2E2E2',
	},
	text: {
		paddingTop: 3,
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
		height: 50,
		width: 50,
	},
});
