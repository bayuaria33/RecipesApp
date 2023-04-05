/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {MainStyle} from '../../AppStyles';
export default function MyRecipeView({navigation}) {
  return (
    <View style={MainStyle.container}>
      <View style={MainStyle.main}>
        <Text style={MainStyle.headerText}>My Recipes</Text>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('Detail')}>
          <Image
            style={styles.img}
            source={{
              uri: 'https://res.cloudinary.com/dedas1ohg/image/upload/v1680575811/recipes_images/96bbf7e44d119d80a61c4894c5c96c74_ibqm5a.jpg',
            }}
          />
          <View>
            <Text style={styles.title}>Recipe Title</Text>
            <Text style={styles.title}>Category</Text>
            <Text style={styles.title}>Author</Text>
          </View>
          <View style={{marginTop: 15}}>
            <TouchableOpacity
              style={[styles.btn, {backgroundColor: '#30C0F3'}]}>
              <Text style={styles.btntext}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btn, {backgroundColor: '#F57E71'}]}>
              <Text style={styles.btntext}>Delete</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    marginVertical: 23,
    width: 343,
    height: 96,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 15,
  },
  title: {
    marginHorizontal: 10,
    marginTop: 5,
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 14,
    marginLeft: 50,
    backgroundColor: '#EFC81A',
    height: 32,
    width: 64,
    borderRadius: 6,
  },
  btntext: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    color: 'white',
  },
});
