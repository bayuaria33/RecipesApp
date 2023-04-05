/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  useWindowDimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {MainStyle} from '../../AppStyles';
export default function HomeView({navigation}) {
  const {width} = useWindowDimensions();
  const w = width * 0.8;
  const data = [
    {
      id: 1,
      title: 'Beef Steak',
      category: 'Main Course',
      photo:
        'https://res.cloudinary.com/dedas1ohg/image/upload/v1680575811/recipes_images/c63e16377fa5e9ecd8dde47ecf7cd683_z6pykn.jpg',
    },
    {
      id: 2,
      title: 'Spaghetti',
      category: 'Main Course',
      photo:
        'https://res.cloudinary.com/dedas1ohg/image/upload/v1680575810/recipes_images/40261c035eed315afdc149ee073393ea_ng6nb3.jpg',
    },
    {
      id: 3,
      title: 'Caesar Salad',
      category: 'Vegetarian',
      photo:
        'https://res.cloudinary.com/dedas1ohg/image/upload/v1680575810/recipes_images/9d38bac836d2d3d98930f6fc722bfdec_fnb5vs.jpg',
    },
    {
      id: 4,
      title: 'Egg Sandwich',
      category: 'Main Course',
      photo:
        'https://res.cloudinary.com/dedas1ohg/image/upload/v1680575811/recipes_images/96bbf7e44d119d80a61c4894c5c96c74_ibqm5a.jpg',
    },
  ];
  const dataMenu = [
    {
      id: 1,
      title: 'Soup',
      photo: require('../../assets/images/thumb_1.png'),
      color: '#57CE96',
    },
    {
      id: 2,
      title: 'Chicken',
      photo: require('../../assets/images/thumb_2.png'),
      color: '#FDE901',
    },
    {
      id: 3,
      title: 'Seafood',
      photo: require('../../assets/images/thumb_3.png'),
      color: '#000001',
    },
    {
      id: 4,
      title: 'Dessert',
      photo: require('../../assets/images/thumb_2.png'),
      color: '#01246B',
    },
    {
      id: 5,
      title: 'Vegetarian',
      photo: require('../../assets/images/thumb_1.png'),
      color: '#FDE901',
    },
  ];

  const MenuCategory = ({icon, backgroundColor}) => (
    <TouchableOpacity
      style={[styles.thumb, {backgroundColor}]}
      onPress={() => console.log('Button pressed!')}>
      <Image source={icon} />
    </TouchableOpacity>
  );

  return (
    <View style={MainStyle.container}>
      <View>
        <TouchableOpacity
          style={styles.searchBar}
          onPress={() => navigation.navigate('Search')}>
          <Text style={styles.textSub}>Search Pasta, Bread, etc</Text>
        </TouchableOpacity>
        <Text style={styles.textHeader}>Popular Recipes</Text>
        <Text style={styles.textSub}>Popular Check</Text>
        <View style={{height: 180, width: w}}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            bounces={false}>
            {/* Item 1 */}
            {data.map((item, index) => {
              return (
                <TouchableOpacity
                  style={styles.item}
                  key={index}
                  onPress={() => navigation.navigate('Popular')}>
                  <Image style={styles.img4} source={{uri: item.photo}} />
                  <View style={styles.img5}>
                    <Text style={styles.textImg2}>{item.title}</Text>
                    <Text style={styles.textImg2}>{item.category}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
        <Text style={styles.textHeader}>New Recipes</Text>
        <View style={{height: 95, width: w}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {dataMenu.map((item, index) => {
              return (
                <View key={index}>
                  <MenuCategory
                    icon={item.photo}
                    backgroundColor={item.color}
                  />
                  <Text style={[styles.textHeader, {alignSelf: 'center'}]}>
                    {item.title}
                  </Text>
                </View>
              );
            })}
          </ScrollView>
        </View>
        <Text style={styles.textHeader}>Popular for You</Text>
        <View style={{height: 180, width: w}}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            bounces={false}>
            {/* Item 1 */}
            {data.map((item, index) => {
              return (
                <TouchableOpacity style={styles.item} key={index}>
                  <Image style={styles.img2} source={{uri: item.photo}} />
                  <View style={styles.img3}>
                    <Text style={styles.textImg}>{item.title}</Text>
                    <Text style={styles.textImg}>{item.category}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
