import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import StarRating from 'react-native-star-rating';


class Homes extends Component{
   render() {
      const {rating, name, price, type} = this.props;
      return (
         <View style={{width: this.props.width / 2 - 30, height: this.props.width / 2 - 30, borderWidth: 0.5, borderColor: '#dddd', borderRadius: 5, marginBottom: 10}}>
            {/*  */}
            <View style={{flex: 1}}>
               <Image 
                  source={require('../../../assets/home.jpg')} 
                  style={{flex: 1, width: null, height: null, resizeMode: 'cover'}} 
               />
            </View>
            <View style={{flex: 1, paddingLeft: 10, alignItems: 'flex-start', justifyContent: 'space-evenly',}}>
               <Text style={{fontWeight: '700', fontSize: 10}}>{type}</Text>
               <Text style={{fontSize: 12}}>{name}</Text>
               <Text style={{fontSize: 10}}>{price}</Text>
               <StarRating 
                  disabled={true}
                  maxStars={5}
                  starSize={10}
                  rating={rating}
                  fullStarColor={'orange'}
               />
            </View>
            {/*  */}
         </View>
      )
   }
}


export default Homes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});