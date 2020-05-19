import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import * as Colors from '../_constants/colors';

export default class RadioButtons extends Component {
	state = {
		value: null,
	};

	render() {
		const { options } = this.props;
		const { value } = this.state;

		return (
			<View>
				{options.map(item => {
					return (
						<View key={item.key} style={styles.buttonContainer}>
							
							<TouchableOpacity
								style={styles.circle}
								onPress={() => {
									this.setState({
										value: item.key,
                                    });
                               
								}}
							>
								{value === item.key && <View style={styles.checkedCircle} />}
							</TouchableOpacity>
                            <Text>{item.text}</Text>
						</View>
					);
				})}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	buttonContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 10,
	},

	circle: {
		height: 20,
		width: 20,
		borderRadius: 10,
		backgroundColor:Colors.LIGHTGRAY,
		alignItems: 'center',
        justifyContent: 'center',
        marginRight:5
	},
  
	checkedCircle: {
		width: 20,
		height: 20,
		borderRadius: 10,
		backgroundColor: Colors.DARKGRAY
	},
});
