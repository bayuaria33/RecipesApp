/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {MainStyle} from '../../AppStyles';
import axios from 'axios';
import {useSelector} from 'react-redux';
export default function DetailView({route, navigation}) {
  const {itemId} = route.params;
  const id = JSON.stringify(itemId);
  const auth = useSelector(state => state.auth);
  const [data, setData] = useState('');
  useEffect(() => {
    const config = {
      headers: {
        Authorization: 'Bearer ' + auth.data.data.accessToken,
      },
    };
    const fetchRecipes = async () => {
      try {
        const result = await axios.get(
          'https://rich-colt-cuff.cyclic.app/recipes/' + id,
          config,
        );
        let res = result.data.data;
        res && setData(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRecipes();
  }, [auth.data.data.accessToken, id]);

  if (!data) {
    return (
      <View style={MainStyle.container}>
        <View style={MainStyle.main}>
          <ActivityIndicator
            size={'large'}
            color={'#EFC81A'}
            style={{alignSelf: 'center'}}
          />
        </View>
      </View>
    );
  }
  const recipe = data[0];
  return (
    <View style={MainStyle.container}>
      <ImageBackground
        style={styles.main}
        source={{
          uri: recipe.photo,
        }}
      />
      <View style={styles.titlebox}>
        <View
          style={{
            width: 240,
            maxHeight: 64,
          }}>
          <View>
            <Text style={styles.title}>{recipe.title}</Text>
          </View>
          <Text style={styles.subtitle}>By {recipe.author}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            maxHeight: 64,
            alignItems: 'center',
            marginStart: 16,
          }}>
          <TouchableOpacity style={styles.btn}>
            <Icon name="bookmark" size={23} color="#E9E9E8" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Icon name="thumbs-up" size={23} color="#E9E9E8" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.card}>
        <View
          style={{
            padding: 10,
            justifyContent: 'flex-start',
            alignSelf: 'flex-start',
          }}>
          <Text style={{marginTop: 10}}>Ingredients: </Text>
          <Text style={{marginTop: 10}}>{recipe.ingredients}</Text>
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
    flexDirection: 'row',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 48,
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '900',
    lineHeight: 18,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 10,
    backgroundColor: '#EFC81A',
    height: 36,
    width: 36,
    borderRadius: 16,
  },
});
