import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Colors from '../_constants/colors'


const CountryScreen = props => {

    return (

        <View style={styles.screen}>


            <View>
                <TouchableOpacity style={styles.flagContainer}>
                <View><Image style={styles.flag} source={require('../assets/icons/united-arab-emirates.png')}></Image></View>
                <View><Text style={styles.flagTitle}>United Arab Emirates</Text></View>
                </TouchableOpacity>
            </View>

            <View >
            <TouchableOpacity style={styles.flagContainer}>
                <View><Image style={styles.flag} source={require('../assets/icons/lebanon.png')}></Image></View>
                <View><Text style={styles.flagTitle}>Lebanon</Text></View>
                </TouchableOpacity>
            </View>

            <View >
            <TouchableOpacity style={styles.flagContainer}>
                <View><Image style={styles.flag} source={require('../assets/icons/jordan.png')}></Image></View>
                <View><Text style={styles.flagTitle}>Jordan</Text></View>
                </TouchableOpacity>
            </View>


        </View>

    )

};


CountryScreen.navigationOptions = {
    title: "Change Country"
};


const styles = StyleSheet.create({

    screen: {
        padding:10
    },
    flagContainer:{
        borderBottomWidth:0.5,
        borderColor:Colors.LIGHTGRAY,
        flexDirection:'row',
        paddingBottom:10,
        paddingTop:10,
        alignItems:'center'
    },
    flag:{
        width: 25,
        height:20,
        marginRight:12
    },
    flagTitle:{
       fontSize:12
    }

});

export default CountryScreen;