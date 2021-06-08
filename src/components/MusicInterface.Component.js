import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import { data } from '../mocks/data';
import { styles } from './MusicInterface.Styles';
const MusicInterfaceComponent = () => {
	return (
		<SafeAreaView>
			<ScrollView>
				{/* BANNER */}
				<Image style={styles.banner} source={data.banner.img} />
				{/* MOOD WEEKEND */}
				<View style={styles.titleContainer}>
					<Text style={styles.titleIcon}>{data.moodWeekend.title}</Text>
					<Image style={styles.icon} source={data.moodWeekend.rightIcon}></Image>
				</View>
				<ScrollView horizontal>
					{data.moodWeekend.images.map((image, index) => (
						<Image style={styles.moodImage} source={image.img} key={index}></Image>
					)

					)}

				</ScrollView>
				{/* TOP ALBUNS */}
				<View style={styles.titleContainer}>
						<Text style={styles.titleIcon}>{data.topAlbums.title}</Text>
				</View>
				{
					data.topAlbums.images.map((image, index) => (
						<Image key={index} style={styles.topAlmunsImg} source={image.img} />
					))
				}
				{/* BROWSE ALL */}
				<View style={styles.titleContainer}>
					<Text style={styles.titleIcon}>{data.browseAll.title}</Text>
				</View>
				<View style={styles.browseAllContainer}>
					{
						data.browseAll.images.map((image, index) => (
							<Image key={index} style={styles.browseImage} source={image.img}/>
						))
					}
				</View>

			</ScrollView>
		</SafeAreaView>
	)
}

export default MusicInterfaceComponent