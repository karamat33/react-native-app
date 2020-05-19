import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import * as Colors from '../_constants/colors'

export default InputText = props => {

    return (

        <TextInput
            name={props.name}
            placeholder={props.Title}
            style={styles.input}
            onChangeText={props.onChange}
        />

    );

}

const styles = StyleSheet.create({

    input: {
        borderColor: Colors.BLACK,
        borderWidth: 0.5,
        padding:10
    }

});