import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import AppNavigation from './AppNavigation'

export default class App extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<StatusBar barStyle="light-content" />
				<AppNavigation />
			</View>
		);
	}
}
