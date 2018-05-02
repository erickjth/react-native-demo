import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import ComicItem from '../Components/ComicItem';

export default class DetailsScreen extends Component {
	static navigationOptions = {
		title: 'Comic details',
	};

	render() {
		const comic = this.props.navigation.getParam('comic', null);

		return (
			<View style={styles.container}>
				{comic ? <ComicItem {...comic} /> : <Text>Invalid Comic</Text>}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF',
	},
});
