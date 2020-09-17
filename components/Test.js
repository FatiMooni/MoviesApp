// Components/Test.js

import React from 'react';

/* class Test extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			topPosition: new Animated.Value(0),
			leftPosition: new Animated.Value(0),
		};
	}

	componentDidMount() {
		/*Animated.timing(this.state.topPosition, {
			toValue: 100,
			duration: 3000, // Le temps est en milliseconds ici (3000ms = 3sec)
			easing: Easing.elastic(4),
		}).start();

		/*Animated.spring(this.state.topPosition, {
			toValue: 100,
			speed: 4,
			bounciness: 30,
		}).start();

		/*Animated.decay(this.state.topPosition, {
			velocity: 0.7,
			deceleration: 0.997,
		}).start();

		//mixing : sequence / parallel
		Animated.parallel([
			Animated.spring(this.state.topPosition, {
				toValue: 100,
				tension: 8,
				friction: 3,
			}),
			Animated.timing(this.state.leftPosition, {
				toValue: 100,
				duration: 1000,
				easing: Easing.elastic(2),
			}),
		]).start();
	}

	render() {
		return (
			<View style={styles.main_container}>
				<Animated.View
					style={[
						styles.animation_view,
						{ top: this.state.topPosition, left: this.state.leftPosition },
					]}
				></Animated.View>
			</View>
		);
	}
}
 */

//paNresponder

import { PanResponder, Dimensions, StyleSheet, View } from 'react-native';

class Test extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			topPosition: 0,
			leftPosition: 0,
		};

		var { height, width } = Dimensions.get('window');
		this.panResponder = PanResponder.create({
			onStartShouldSetPanResponder: (evt, gestureState) => true,
			onPanResponderMove: (evt, gestureState) => {
				let touches = evt.nativeEvent.touches;
				if (touches.length == 1) {
					this.setState({
						topPosition: touches[0].pageY - height / 2,
						leftPosition: touches[0].pageX - width / 2,
					});
				}
			},
		});
	}

	render() {
		return (
			<View style={styles.main_container}>
				<View
					{...this.panResponder.panHandlers}
					style={[
						styles.animation_view,
						{ top: this.state.topPosition, left: this.state.leftPosition },
					]}
				></View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	main_container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	animation_view: {
		backgroundColor: 'red',
		width: 100,
		height: 100,
	},
});

export default Test;
