import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import * as Colors from '../_constants/colors';

export default ErrorMessage = props => {

        return (
                    <Text style = {styles.errorMessage} >{props.error}</Text>

        );

}

const styles = StyleSheet.create({

    errorMessage:{
        fontSize:10,
        color:Colors.RED,
        marginTop:2
        
    }


});