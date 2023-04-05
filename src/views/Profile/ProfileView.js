import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import {MainStyle} from '../../AppStyles';
import Icon from 'react-native-vector-icons/Ionicons';
export default function ProfileView() {
  return (
    <View style={MainStyle.container}>
      <View style={styles.main}>
        <Image
          style={styles.img}
          source={{
            uri: 'https://res.cloudinary.com/dedas1ohg/image/upload/v1680659284/recipes_images/18f59bbdfe6e4e4901e5ee2ec3b54bb1_o4e3qy.jpg',
          }}
        />
        <Text style={styles.namelabel}>User Name</Text>
      </View>
      <View style={styles.card}>
        <TouchableOpacity style={styles.tabTop}>
          <Icon name="person-outline" color={'#EFC81A'} size={25} />
          <Text style={styles.label}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Icon name="book-outline" color={'#EFC81A'} size={25} />
          <Text style={styles.label}>My Recipe</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Icon name="bookmark-outline" color={'#EFC81A'} size={25} />
          <Text style={styles.label}>Saved Recipe</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Icon name="thumbs-up-outline" color={'#EFC81A'} size={25} />
          <Text style={styles.label}>Liked Recipe</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#EFC81A',
    height: 300,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    zIndex: 1,
    marginTop: -40,
    marginHorizontal: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#ffffff',
    height: Dimensions.get('window').height,
    width: 367,
    alignItems: 'center',
  },
  tabTop: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: 64,
    width: 367,
    marginVertical: 14,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tab: {
    height: 64,
    width: 367,
    marginTop: 7,
    paddingHorizontal: 30,
    flexDirection: 'row',
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
});
