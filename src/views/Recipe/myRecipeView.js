/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {MainStyle} from '../../AppStyles';
import {useSelector} from 'react-redux';
import axios from 'axios';
export default function MyRecipeView({navigation}) {
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
          'https://rich-colt-cuff.cyclic.app/recipes/my-recipe',
          config,
        );
        let res = result.data.data;
        res && setData(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRecipes();
  }, [auth.data.data.accessToken]);

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
  return (
    <View style={MainStyle.container}>
      <View style={MainStyle.main}>
        <Text style={MainStyle.headerText}>My Recipes</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {data?.map((item, index) => {
            return (
              <TouchableOpacity
                style={styles.item}
                key={index}
                onPress={() =>
                  navigation.navigate('Detail', {
                    itemId: item.id,
                  })
                }>
                <Image
                  style={styles.img}
                  source={{
                    uri: item.photo,
                  }}
                />
                <View>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.title}>{item.category}</Text>
                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                      style={[styles.btn, {backgroundColor: '#30C0F3'}]}>
                      <Text style={styles.btntext}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.btn, {backgroundColor: '#F57E71'}]}>
                      <Text style={styles.btntext}>Delete</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
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
    marginTop: 16,
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
    marginVertical: 6,
    marginLeft: 10,
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
