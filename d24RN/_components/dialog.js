
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import * as Colors from '../_constants/colors';


export default class DrawerMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = { visible: false };
    }

    handleDialog = () => this.setState({ visible: true });

    render() {
        return (
            <View>

                <Dialog
                    visible={this.state.visible}
                    width={0.8}
                    onTouchOutside={() => {
                        this.setState({ visible: false });
                    }}
                >
                    <DialogContent>

                        <View>
                            <View style={styles.dialogTitleCont}>
                                <Text style={styles.dialogTitle}>Expriences</Text>
                            </View>

                            <View style={styles.dialogTextCont}>
                                <Text style={[styles.dialogText, styles.textCenter]}>We offer different experiences to fit all your needs.</Text>
                            </View>

                            <View style={styles.dialogTextRow}>

                                <View style={[styles.justifyContentCenter,styles.textWidth]}><Text style={[styles.dialogText, styles.dialogTextRowText]}>Rent Now:</Text></View>
                                <View style={styles.textWrap}><Text style={[styles.dialogText]}>Rent your style for the number of days you need it, on any of the available dates.</Text></View>

                            </View>

                            <View style={styles.dialogTextRow}>

                                <View style={[styles.justifyContentCenter,styles.textWidth]}><Text style={[styles.dialogText, styles.dialogTextRowText]}>Try on:</Text></View>
                                <View style={styles.textWrap}><Text style={[styles.dialogText]}>Choose up to 5 styles with backup sizes, and try them at your preferred location for only the delivery fee. Pay for what you keep. ZERO obligation, ZERO guilt!</Text></View>

                            </View>

                            <View style={styles.dialogTextRow}>

                                <View style={[styles.justifyContentCenter,styles.textWidth]}><Text style={[styles.dialogText, styles.dialogTextRowText]}>Book An Appointment:</Text></View>
                                <View style={styles.textWrap}><Text style={[styles.dialogText]}>Pick an available slot and we'll be happy to have you at our showroom. Come try your item and many more!</Text></View>

                            </View>


                        </View>
                    </DialogContent>
                </Dialog>
            </View>

        )
    }
}

const styles = StyleSheet.create({

    dialogTitleCont: {
        paddingTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: Colors.LIGHTGRAY,
        justifyContent: 'center',
        alignItems: 'center'
    },

    dialogTitle: {
        fontSize: 20,
        color: Colors.BLACK,
        fontWeight: 'bold',
        fontFamily: 'Avenir',
    },

    dialogText: {
        fontSize: 12,
        color: Colors.LIGHTBLACK,
        fontFamily: 'Avenir',
    },

    textCenter: {
        textAlign: 'center',
    },
    justifyContentCenter: {
        justifyContent: 'center',
        alignItems:'center',
    },
    textWrap:{
        flexWrap: 'wrap',
        flex:1
    },
    textWidth:{
        width:120,
    },
    dialogTextCont: {

        marginTop: 12
    },

    dialogTextRow: {
        marginTop: 12,
        flexDirection: 'row',
    },
    dialogTextRowText: {
        color: Colors.BLACK,
        marginRight: 12,
        justifyContent: 'center'
    }

});