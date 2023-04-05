/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {MainStyle} from '../../AppStyles';
import {AuthStyle} from './authStyles';
export default function RegisterView({navigation}) {
  return (
    <View style={MainStyle.container}>
      <ImageBackground
        style={AuthStyle.header}
        source={{
          uri: 'https://res.cloudinary.com/dedas1ohg/image/upload/v1680575811/recipes_images/96bbf7e44d119d80a61c4894c5c96c74_ibqm5a.jpg',
        }}
        imageStyle={AuthStyle.img}
      />
      <View style={AuthStyle.main}>
        <Text style={MainStyle.headerText}>Welcome !</Text>
        <Text style={MainStyle.subHeaderText}>Register to Recipe App</Text>
        <Text style={AuthStyle.label}>Name</Text>
        <TextInput style={AuthStyle.input} placeholder="Name" />
        <Text style={AuthStyle.label}>Email</Text>
        <TextInput style={AuthStyle.input} placeholder="Email" />
        <Text style={AuthStyle.label}>Password</Text>
        <TextInput
          style={AuthStyle.input}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={AuthStyle.btn}
          onPress={() => navigation.navigate('Main')}>
          <Text style={AuthStyle.btnlabel}>REGISTER</Text>
        </TouchableOpacity>
        <Text>
          <Text style={MainStyle.subHeaderText}>Already have an account? </Text>
          <Text
            style={{color: '#EFC81A'}}
            onPress={() => navigation.navigate('Login')}>
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
}
