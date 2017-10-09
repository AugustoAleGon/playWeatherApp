/**
  Libraries
*/
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  StatusBar,
  View,
  Dimensions,
  Image
} from 'react-native';

class MainWeatherDashboard extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <View style={styles.mainContainer}>
        <View style={styles.horizontalContainer}>
          <View style={styles.verticalContainer}>
            <Text style={styles.mainCityText}>{this.props.city}</Text>
            <Text style={styles.mainConditionText}>{this.props.condition}</Text>
            <Text style={styles.mainTemperatureText}>{this.props.temperature}</Text>
          </View>
          <View style={styles.verticalContainer}>
            <Image style={styles.mainImageWeather} source={{ uri: this.props.iconWeather}} />
          </View>
        </View>

      </View>
    )
  }

}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    paddingTop: 15,
    width: Dimensions.get('window').width,
    backgroundColor: 'white'
  },
  horizontalContainer: {
    flexDirection: 'row'
  },
  verticalContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainImageWeather: {
    width: 50,
    height: 50
  },
  mainCityText: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  mainConditionText: {
    display:'flex',
    fontSize: 20
  },
  mainTemperatureText: {
    fontSize: 15,
    fontStyle: 'italic',
    fontWeight: '400'
  }
})
export default connect((states) => ({
  city: states.weather.geo ? states.weather.geo.city : "",
  condition: states.weather.response[0] ? states.weather.response[0].conditions : "",
  temperature: states.weather.response[0] ? states.weather.response[0].high.celsius +"°" : "",
  iconWeather: states.weather.response[0] ? states.weather.response[0].icon_url : "https://goo.gl/FKh7sD"
}))(MainWeatherDashboard)
