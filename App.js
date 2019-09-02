import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Explore from './screens/Explore';
import Inbox from './screens/Inbox';
import Saved from './screens/Saved';
import Trips from './screens/Trips';
import Profile from './screens/Profile';


class App extends Component{
  render(){
    return (
      <View style={styles.container}>
        <Text>Airbnb</Text>
      </View>
    );
  }
}


export default createBottomTabNavigator({
  Explore: {
    screen: Explore,
    navigationOptions: {
      tabBarlabel: 'EXPLORE',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-search" color={tintColor} size={24} />
      )
    }
  },
  Saved: {
    screen: Saved,
    navigationOptions: {
      tabBarlabel: 'SAVED',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-heart-empty" color={tintColor} size={24} />
      )
    }
  },
  Trips: {
    screen: Trips,
    navigationOptions: {
      tabBarlabel: 'TRIPS',
      tabBarIcon: ({tintColor}) => (
        <Image source={require('./assets/airbnb.png')} style={{width: 24, height: 24, tintColor: tintColor}} />
        // <Icon name="ios-chatboxes" color={tintColor} size={24} />
      )
    }
  },
  Inbox: {
    screen: Inbox,
    navigationOptions: {
      tabBarlabel: 'INBOX',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-chatboxes" color={tintColor} size={24} />
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarlabel: 'PROFILE',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-person" color={tintColor} size={24} />
      )
    }
  }
},
{
  tabBarOptions: {
    activeTintColor: 'red',
    inactiveTintColor: 'gray',
    style: {
      backgroundColor: 'white',
      borTopWidth: 0,
      shadowOffset: {width: 5, height: 3},
      shadowColor: 'black',
      shadowOpacity: 0.5,
      elevation: 5,
      paddingTop: 3
    }
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
