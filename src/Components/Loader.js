import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

export default class Loader extends Component {

	render() {
		const { show } = this.props;

		return (
			show ? <View style={styles.container}><ActivityIndicator size="large" /></View> : null
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
});
