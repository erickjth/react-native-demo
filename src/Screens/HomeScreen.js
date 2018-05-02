import React, { Component } from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native';
import Loader from '../Components/Loader';
import ComicList from '../Components/ComicList';
import ApiService from '../Services/Api';

export default class HomeScreen extends Component {
	static navigationOptions = {
		title: 'Home',
	};

	constructor(props) {
		super(props);
		this.state = { error: false, isLoading: false, data: [] };
	}

	componentDidMount() {
		this.loadComics();
	}

	async loadComics () {
		try {
			this.setState({ isLoading: true });
			const response = await ApiService.getComics();
			this.setState({ isLoading: false, data: response.data.results, error: false, });
		} catch (error) {
			this.setState({ isLoading: false, error: true, });
		}
	}


	onPressItem = (comic) => {
		this.props.navigation.navigate('Details', { comic });
	}

	onRefresh = () => {
		this.loadComics();
	}

	render() {
		const { isLoading, error, data } = this.state;

		return (
			<View style={styles.container}>
				{error && <Text style={styles.error}>Oops, Something went wrong!</Text>}
				<ComicList
					comics={data}
					isRefreshing={isLoading}
					onRefresh={this.onRefresh}
					onPressItem={this.onPressItem}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF',
	},
	error: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
		color: 'red',
	},
});
