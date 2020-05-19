import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import * as Colors from '../_constants/colors';

export default class RadioSquareButtons extends Component {
	constructor(props){
		super(props);
		this.state = {
			value: props.options[0].key,
		}
	  }
	  
	componentDidMount(){
		this.props.getSelectedValue(this.state.value ? this.state.value : '', '');
	  }
	  
	setValue = (value) =>{
		this.setState({
			value: value,
		});
	}

	render() {
		const { options } = this.props;
		const { value } = this.state;
		
		return (
			<View style={styles.container}>
				{options.map(item => {
					return (
						<View key={item.key} style={styles.buttonContainer}>

							<TouchableOpacity
								style={[styles.circle, { width: this.props.width }]}
								onPress={() => {
									this.setValue(item.key)
									this.props.getSelectedValue(item.key ? item.key : '', item.value ? item.value : '');
								}}
							>
								<Text style={styles.text}>{item.label}</Text>
								{value === item.key && <View style={[styles.checkedCircle, { width: this.props.width }]} />}

							</TouchableOpacity>

						</View>
					);
				})}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		marginTop: 5
	},
	buttonContainer: {
		flexDirection: 'row',
		marginBottom: 10,
	},

	circle: {
		height: 40,
		justifyContent: 'center',
		borderRadius: 5,
		backgroundColor: Colors.WHITE,
		alignItems: 'center',
		borderWidth: 1,
		borderColor: Colors.LIGHTGRAY,
		marginRight: 5
	},

	checkedCircle: {
		height: 40,
		borderRadius: 5,
		backgroundColor: Colors.LIGHTGRAY
	},
	text: {
		position: 'absolute',
		margin: 'auto',
		zIndex: 100,
	}
});
