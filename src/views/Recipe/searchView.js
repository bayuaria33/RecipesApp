import React from 'react';
import {View, TextInput, StyleSheet, Image, Text} from 'react-native';
import {MainStyle} from '../../AppStyles';
export default function SearchView() {
  return (
    <View style={MainStyle.container}>
      <View style={MainStyle.main}>
        <TextInput style={styles.searchBar} placeholder="Search for Recipes">
          {''}
        </TextInput>
        <View style={styles.item}>
          <Image
            style={styles.img}
            source={{
              uri: 'https://res.cloudinary.com/dedas1ohg/image/upload/v1680575811/recipes_images/96bbf7e44d119d80a61c4894c5c96c74_ibqm5a.jpg',
            }}
          />
          <View>
            <Text style={styles.title}>Recipe Title</Text>
            <Text style={styles.title}>4.3 Seafood</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#EFEFEF',
    borderRadius: 15,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 319,
    height: 50,
    fontSize: 14,
    fontWeight: '500',
  },
  item: {
    marginVertical: 23,
    paddingLeft: 10,
    width: 343,
    height: 96,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
