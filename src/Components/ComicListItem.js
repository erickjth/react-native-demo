import React, { PureComponent } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { get } from 'lodash';

export default class ComicListItem extends PureComponent {

	render() {
		const { title, images, format  } = this.props;

		const imagePath = get(images, '[0].path', null);
		const imageExtension = get(images, '[0].extension', null);
		const imageSource = imagePath ? `${imagePath}/standard_xlarge.${imageExtension}` : 'https://spiralcomics.com/images/default_comic_cover.png';

		return (
			<View style={styles.container}>
				<View style={styles.imageContainer}>
					<Image
						style={styles.image}
						source={{ uri: imageSource }}
					/>
				</View>
				<View style={styles.content}>
					<Text
						style={styles.title}
						numberOfLines={2}
					>{title}
					</Text>
					<Text
						style={styles.format}
						numberOfLines={1}
					>{format}
					</Text>
				</View>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		backgroundColor: '#ffffff',
		flexDirection: 'row',
		paddingHorizontal: 8,
		paddingVertical: 16,
		marginVertical: 3,
	},

	imageContainer: {
		width: 51,
		height: 51,
	},

	image: {
		width: 51,
		height: 51,
		resizeMode: Image.resizeMode.cover,
	},

	content: {
		flex: 1,
		marginLeft: 8,
	},

	title: {
		fontSize: 16,
		lineHeight: 16,
		color: 'rgba(0, 0, 0, 0.87)',
	},

	format: {
		fontSize: 12,
	}
});
