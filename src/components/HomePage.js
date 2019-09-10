import React, { Component } from 'react';
import { Button, View, Text, TextInput, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';
import newUser from './user.js';
import LocationTracker from '../services/LocationTracker.js';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class RegisterPage extends Component{
     constructor(props){
            super(props);
            console.log(this.props);

            }


    render() {
      return (
       <View style = {styles.container}>
          <Text style = {styles.text}>Welcome to Piggy</Text>
          <Button
             title="App requests Location tracking"
             onPress={() => this.props.navigation.navigate('LocationTracker')}
          />
          <Button
             title="Set your Interests"
             onPress={() => this.props.navigation.navigate('Interests')}
          />
          <Button
            title = "Logout from Piggy"
            onPress = {this.logout}
          />
       </View>
       );
}

  logout = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Login');
  }
}

const styles = StyleSheet.create({
   container : {
     padding :20,
     flex : 1,
     backgroundColor : '#ecf0f1',
     justifyContent : 'center',
     alignItems : 'stretch'
   },
   text : {
     textAlign : 'center',
     color : 'black',
     fontSize : 20
     }
})

