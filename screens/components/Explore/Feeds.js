 import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');


class Feeds extends Component{
   render() {
      return (
         <View style={{marginTop: 40, paddingHorizontal: 20}}>
            <Text style={{fontSize: 24, fontWeight: '700', letterSpacing: 2}}>
               {this.props.FeedsHeaderText}
            </Text>
            <Text style={{marginTop: 8, lineHeight: 20, fontWeight: '100'}}>
               {this.props.FeedsText}
            </Text>
            <View style={{width: width - 40, height: 200, marginTop: 20}}>
               <Image source={this.props.FeedsImg} style={{flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddd'}} />
            </View>
         </View>
      )
   }
}


export default Feeds;

const styles = StyleSheet.create({
   
});