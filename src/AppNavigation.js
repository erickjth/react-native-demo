import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './Screens/HomeScreen';
import DetailsScreen from './Screens/DetailsScreen';

const navHeaderStyle = {
	backgroundColor: '#427682',
};

const RootStack = StackNavigator({
	Home: { screen: HomeScreen },
	Details: { screen: DetailsScreen },
}, {
	navigationOptions: {
		headerStyle: navHeaderStyle,
		headerTintColor: '#ffffff'
	}
});

export default RootStack;
