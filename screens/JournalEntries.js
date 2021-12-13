import React, { useEffect } from 'react';
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	FlatList,
	Image,
} from 'react-native';

export default function JournalEntries({ data, setData }) {
	console.log({ data });
	return (
		<SafeAreaView>
			<FlatList
				data={data}
				renderItem={(item) => (
					<View>
						<Text>ID: {item.item.id ? item.item.id : 'no id available'}</Text>
						<Text>
							Title: {item.item.title ? item.item.title : 'no title available'}
						</Text>
						<Text>
							Body: {item.item.body ? item.item.body : 'no body available'}
						</Text>
						<Text>
							City: {item.item.city ? item.item.city : 'no city available'}
						</Text>
						{item.item.location ? (
							<Text>
								Location: Latitude: {item.item.location.coords.latitude}{' '}
								Longitude: {item.item.location.coords.longitude} Speed:{' '}
								{item.item.location.coords.speed}
							</Text>
						) : (
							<Text>no location information available</Text>
						)}

						{item.item.image ? (
							<Image
								style={styles.image}
								source={{
									uri: `${item.item.image}`,
								}}
							/>
						) : (
							<Text>No Image Available</Text>
						)}
					</View>
				)}
				keyExtractor={(item) => item.id}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	image: {
		width: 100,
		height: 100,
	},
});
