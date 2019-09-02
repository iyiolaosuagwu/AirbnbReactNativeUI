import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, Platform, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


class Explore extends Component{

   state = {
      startHeaderHeight: 80
   }

   componentDidMount() {
      if(Platform.OS == "android"){
         this.state.startHeaderHeight = 100 + StatusBar.currentHeight;
      }
   }

   render() {
      return (
         <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1}}>
               <View style={{height: 80, backgroundColor: 'white', borderBottomColor: '#dddd', borderBottomWidth: 1}}>
                  <View style={styles.input}>
                     <Icon name="ios-search" size={20} style={{paddingRight: 10}} />
                     <TextInput 
                        underlineColorAndroid="transparent"
                        placeholder="Try New Delhi" 
                        placeholderTextColor="gray"
                        style={{flex: 1, fontWeight: '400', backgroundColor: 'white'}}
                     />
                  </View>
               </View>
            </View>
         </SafeAreaView>
      )
   }
}


export default Explore;

const styles = StyleSheet.create({
   container: {
      flex: 1
   },
   input: {
      flexDirection: 'row',
      padding: 10,
      backgroundColor: 'white',
      marginHorizontal: 20,
      shadowOffset: {width: 0, height: 0},
      shadowColor: 'black',
      shadowOpacity: 0.1,
      elevation: 1,
      marginTop: Platform.OS == 'android' ? 30 : null
   }
});