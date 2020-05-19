import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import * as Colors from '../_constants/colors';

 
export default class Calendar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
    this.props.getSelectedStartDate(date ? date.toString() : '');
    
  }
  render() {    
    let d = new Date(this.state.selectedStartDate)
    console.log(d.getDay())
    return (
      <View style={styles.container}>
        <CalendarPicker
          enableSwipe={true}
          onDateChange={this.onDateChange}
          allowRangeSelection={true}
          //minRangeDuration={0}
          //maxRangeDuration={this.props.maxRangeDuration ? this.props.maxRangeDuration - 1 : 2}
          selectedDayColor={Colors.LIGHTGRAY}
          selectedRangeStyle={{backgroundColor:Colors.LIGHTGRAY}}
          //disabledDates = {[this.state.selectedStartDate]}
        />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
});