 import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';


class Category extends Component{
   render() {
      return (
         <View style={{height: 130, width: 140, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddd'}}>
            <View style={{flex: 2}}>
               <Image source={this.props.imageUri} style={styles.image}/>
            </View>
            <View style={{flex: 1}}>
               <Text style={{paddingLeft: 10, paddingTop: 10,fontWeight: '600'}}>{this.props.name}</Text>
            </View>
         </View>
      )
   }
}


export default Category;

const styles = StyleSheet.create({
   image: {
      flex: 1,
      height: null,
      width: null,
      resizeMode: 'cover'
   }
});