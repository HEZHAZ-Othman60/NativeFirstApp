import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import logo from './assets/tourEiffel.jpg';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.containerTwo}>
				<ImageBackground
					source={logo}
					style={{
						width: 355,
						height: 550,
						borderRadius: 10,
						overflow: 'hidden',
					}}
				>
					<View
						style={{
							position: 'absolute',
							top: '90%',
							left: 0,
							right: 0,
							bottom: 0,
							justifyContent: 'center',
							alignItems: 'left',
						}}
					>
						<Text style={styles.imageText} color="white">
							Voyage organiser à {"\n"} Paris Fr
						</Text>
					</View>
				</ImageBackground>

				<View style={styles.icons}>
					<AntDesign name="like2" size={45} color="grey" />
					<EvilIcons name="comment" size={45} color="grey" />
					<View style={styles.iconStar}>
						<SimpleLineIcons name="star" size={45} color="blue" />
					</View>
					<StatusBar style="auto" />
				</View>
				<View style={styles.textIcon}>
					<Text>J'aime</Text>
					<Text>Commenter</Text>
					<Text>Intéresser</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: 'red',
	},

	containerTwo: {
		borderWidth: 1,
		borderColor: 'grey',
		borderRadius: 10,
		padding: 15,
		margin: 25,
	},

	icons: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 25,
	},

	textIcon: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 25,
	},

	imageText: {
		color: 'white',
		fontWeight: '500',
		fontSize: 30,
		paddingLeft: 20,
		marginBottom: 50,
	},

	iconStar: {
		backgroundColor: 'grey',
	}
});
