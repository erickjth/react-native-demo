import React, { Component } from 'react';
import { FlatList, TouchableOpacity, StyleSheet, View } from 'react-native';
import ComicListItem from './ComicListItem';
import Separator from './Separator';

export default class ComicList extends Component {

	renderItem = ({ item }) => {
		const { onPressItem } = this.props;

		// The container is needed to avoid overlapping error in the list
		return (
			<TouchableOpacity onPress={onPressItem.bind(null, item)} style={styles.flex}>
				<ComicListItem {...item} />
			</TouchableOpacity>
		);
	}

	render() {
		const { comics, onRefresh, isRefreshing, ...rest } = this.props;

		return (
			<FlatList
				data={comics}
				style={styles.flex}
				renderItem={this.renderItem}
				keyExtractor={(item) => item.id.toString()}
				onRefresh={onRefresh}
				refreshing={isRefreshing}
				initialNumToRender={3}
			/>
		);
	}
}


const styles = StyleSheet.create({
	flex: {
		flex: 1,
	},
});
