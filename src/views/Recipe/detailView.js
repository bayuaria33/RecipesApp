/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {MainStyle} from '../../AppStyles';
export default function DetailView() {
  return (
    <View style={MainStyle.container}>
      <ImageBackground
        style={styles.main}
        source={{
          uri: 'https://res.cloudinary.com/dedas1ohg/image/upload/v1680575811/recipes_images/96bbf7e44d119d80a61c4894c5c96c74_ibqm5a.jpg',
        }}
      />
      <View style={styles.titlebox}>
        <Text style={styles.title}>Sandwich With Egg</Text>
        <Text style={styles.subtitle}>By chef</Text>
      </View>
      <View style={styles.card}>
        <View style={{padding: 10}}>
          <Text style={{marginTop: 10}}>Ingredients</Text>
          <Text style={{marginTop: 10}}>
            - 2 slices whole-grain bread (bakery-fresh recommended) - 1
            tablespoon hummus - 2 slices tomato - 1/2 small cucumber, thinly
            sliced lengthwise - 1 slice low-fat cheese
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    height: 300,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  card: {
    zIndex: 1,
    marginTop: -10,
    marginHorizontal: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#ffffff',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width * 0.9,
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    marginHorizontal: 15,
  },
  namelabel: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    color: 'white',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 60,
  },
  titlebox: {
    zIndex: 2,
    marginTop: -85,
    marginBottom: 40,
    marginLeft: 16,
    alignSelf: 'flex-start',
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 48,
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '900',
    lineHeight: 18,
  },
});
