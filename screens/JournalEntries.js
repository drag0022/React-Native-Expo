import React, { useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Dimensions } from 'react-native';
import { Card } from 'react-native-elements';
const { width } = Dimensions.get('window')

export default function JournalEntries({ data, setData }) {
	console.log({ data });
	return (
		<SafeAreaView>
			<FlatList
				data={data}
				renderItem={(item) => (
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
								width
							}}
						>
							<Card.Title style={{ color: '#A10582' }}>
								Title:{' '}
								{item.item.title ? item.item.title : 'no title available'}
							</Card.Title>
							<Card.Divider />
							{item.item.image ? (
								<Card.Image
									resizeMode="cover"
									style={styles.image}
									source={{
										uri: `${item.item.image}`,
									}}
								/>
							) : (
								<Text style={styles.text}>No Image Available</Text>
							)}

							<Text style={styles.text}>
								ID: {item.item.id ? item.item.id : 'no id available'}
							</Text>
							<Text style={styles.text}>
								Body: {item.item.body ? item.item.body : 'no body available'}
							</Text>

							{item.item.location ? (
								<View>
									<Text style={styles.text}>
										Location Data: Latitude:{' '}
										{item.item.location.coords.latitude} Longitude:{' '}
										{item.item.location.coords.longitude} Speed:{' '}
										{item.item.location.coords.speed}
									</Text>
								</View>
							) : (
								<Text style={styles.text}>
									no location information available
								</Text>
							)}
						</Card>
					</View>
				)}
				keyExtractor={(item) => item.id}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	text: {
		color: '#A10582',
		marginTop: 5,
	
	},

	image: {
		width: 220,
		height: 200,
		borderRadius: 10,
		alignSelf: 'center',
	},
});
