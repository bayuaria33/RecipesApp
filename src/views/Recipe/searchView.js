/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {MainStyle} from '../../AppStyles';
import {useSelector} from 'react-redux';
import axios from 'axios';
export default function SearchView({navigation}) {
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
          'https://rich-colt-cuff.cyclic.app/recipes/',
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
        <TextInput style={styles.searchBar} placeholder="Search for Recipes">
          {''}
        </TextInput>
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
                  <Text style={styles.title}>By {item.author}</Text>
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
