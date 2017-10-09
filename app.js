/**
 *  Play Weather Application
 *  @author: Augusto Gonzalez
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    StatusBar,
    View
} from 'react-native';

import {Provider} from 'react-redux';
import store from './src/redux/store';
import {load} from './src/redux/actions/weatherActions';

import axios from 'axios';

import MainWeatherDashboard from './src/MainWeatherDashboard';

// Constants
const API_KEY = "ccae33f84fd15281";

export default class PlayWeatherApp extends Component {

    constructor() {
        super();
    }
    componentDidMount() {
        var currentPosition = {};
        navigator.geolocation.getCurrentPosition((position) =>{
            var lat = parseInt(''+ (position.coords.latitude*1000000) ) /1000000
            var long = parseInt(''+ (position.coords.longitude*1000000) ) /1000000

            currentPosition = {
                latitude: lat,
                longitude: long
            }
            console.log(currentPosition.latitude, currentPosition.longitude)
            load(store.dispatch, currentPosition.latitude, currentPosition.longitude)
        },
        (error) => console.log(error) )

    }
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <StatusBar hidden/>
                    <MainWeatherDashboard />
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#587486',
    }
});

AppRegistry.registerComponent('PlayWeatherApp', () => PlayWeatherApp);
