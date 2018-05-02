import React, { PureComponent } from 'react';
import { StyleSheet, Image, ScrollView, View, Text } from 'react-native';
import { get } from 'lodash';

export default class ComicListItem extends PureComponent {

	render() {
		const {
			title,
			variantDescription,
			creators,
			images,
			format,
		} = this.props;

		const imagePath = get(images, '[0].path', null);
		const imageExtension = get(images, '[0].extension', null);
		const imageSource = imagePath ? `${imagePath}/landscape_incredible.${imageExtension}` : 'https://spiralcomics.com/images/default_comic_cover.png';

		return (
			<ScrollView style={{ flex: 1 }} contentContainerStyle={styles.container}>
				<Image
					style={styles.image}
					source={{ uri: imageSource }}
				/>
				<View style={styles.content}>
					<Text style={styles.title} numberOfLines={2}>{title}</Text>

					<View style={styles.itemInfo}>
						<Text style={styles.infoLabel}>Variant Description</Text>
						<Text style={styles.infoContent}>{variantDescription}</Text>
					</View>

					{creators.available > 0 ?
						<View style={styles.itemInfo}>
							<Text style={styles.infoLabel}>Creators</Text>
							{creators.items.map((creator, idx) => (
								<Text key={idx} style={styles.infoContent}>{`${creator.name} - ${creator.role}`}</Text>
							))}
						</View>
					: null}
				</View>
			</ScrollView>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
		paddingBottom: 20,
	},

	imageContainer: {
		flex: 1,
	},

	image: {
		flex: 1,
		width: null,
		height: null,
		resizeMode: Image.resizeMode.cover,
	},

	content: {
		flex: 1,
		paddingHorizontal: 8,
		marginTop: 16,
	},

	title: {
		fontSize: 22,
		lineHeight: 22,
		color: 'rgba(0, 0, 0, 0.87)',
	},

	format: {
		fontSize: 12,
	},

	itemInfo: {
		marginTop: 16,
	},

	infoLabel: {
		fontSize: 12,
	},

	infoContent: {
		fontSize: 16,
	}
});
