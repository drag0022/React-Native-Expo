import React, { useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function JournalEntries({ data, setData }) {
	console.log({ data });
	return (
		<SafeAreaView>
			<Text>{data[0].body}</Text>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({});
