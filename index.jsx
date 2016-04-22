import React, {
	AppRegistry,
	Component,
	Image,
	PropTypes,
	StyleSheet,
	Text,
	View
} from 'react-native';

class App extends Component {

	render() {
		return (
			<View style={styles.wrapper}>
				<Image style={styles.image} source={{uri: 'http://facebook.github.io/react-native/img/opengraph.png'}} />
				<Text>You're now using react-native-web!</Text>
			</View>
		);
	}
}

let styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	image: {
		alignSelf: 'center',
		width: 100,
		borderRadius: 12,
		marginBottom: 20
	}
});

// App registration and rendering
AppRegistry.registerComponent('HireMe', () => App);
AppRegistry.runApplication('HireMe', { rootTag: document.getElementById('react-root') });
