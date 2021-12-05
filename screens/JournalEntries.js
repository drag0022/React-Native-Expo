import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function JournalEntries({ data, setData }) {
	return (
		<View>
			<Text>{data[0].body}</Text>
		</View>
	);
}

const styles = StyleSheet.create({});
