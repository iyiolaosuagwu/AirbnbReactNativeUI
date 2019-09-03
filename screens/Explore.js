import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, Platform, StatusBar, ScrollView, Image, Dimensions, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Category from './components/Explore/Category';
import Feeds from './components/Explore/Feeds';
import Homes from './components/Explore/Homes';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const {height, width} = Dimensions.get('window');

class Explore extends Component{

   state = {
      startHeaderHeight: 80,
      value: ''
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
               
               <View style={{height: this.state.startHeaderHeight, backgroundColor: 'white', borderBottomColor: '#dddd', borderBottomWidth: 1}}>
                  <View style={styles.input}>
                     <Icon name="ios-search" size={20} style={{paddingRight: 10}} />
                     <TextInput 
                        underlineColorAndroid="transparent"
                        placeholder="Try New Delhi" 
                        placeholderTextColor="gray"
                        style={{flex: 1, fontWeight: '400', backgroundColor: 'white'}}
                        onChangeText={text => this.setState({value: text})}
                     />
                  </View>
               </View>
               

               <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
                  <View style={{flex: 1 ,backgroundColor: 'white', paddingTop: 20}}>
                     <Text style={{fontSize: 24, fontWeight: '700', paddingHorizontal: 20, letterSpacing: 3}}>
                        What can we help you find, Varun?
                     </Text>
                     {/* Category */}
                     <View style={{height: 130, marginTop: 20}}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                           <Category imageUri={require('../assets/home.jpg')} name="Home" />
                           <Category imageUri={require('../assets/experiences.jpg')} name="Experiences" />
                           <Category imageUri={require('../assets/restaurant.jpg')} name="Restaurant" />
                           <Category imageUri={require('../assets/restaurant.jpg')} name="Restaurant" />
                           <Category imageUri={require('../assets/restaurant.jpg')} name="Restaurant" />
                        </ScrollView>
                     </View>
                     {/* Feeds */}
                     <View>
                        <Feeds FeedsHeaderText="Introducing Airbnb Plus." FeedsText="A new selection of homes verified for quality & comfort" FeedsImg={require('../assets/home.jpg')}/>
                     </View>
                     {/*  */}
                     <View style={{marginTop: 25}}>
                        <Text style={{paddingHorizontal: 20, fontSize: 23, fontWeight: '700', letterSpacing: 2}}>
                           Homes around the world
                        </Text>
                        <View style={{marginTop: 20, paddingHorizontal: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                           <Homes width={width} type="Private Rooms - 2 BEDS" name="The coury place" price="100$" rating={4} />
                           <Homes width={width} type="Private Rooms - 4 BEDS" name="The coury place" price="80$" rating={2} />
                           <Homes width={width} type="Self Contain" name="The coury place" price="200$" rating={3} />
                           <Homes width={width} type="Self Contain" name="The coury place" price="200$" rating={3} />
                        </View>
                     </View>
                  </View>
               </ScrollView>
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
   },
   image: {
      flex: 1,
      height: null,
      width: null,
      resizeMode: 'cover'
   }
});