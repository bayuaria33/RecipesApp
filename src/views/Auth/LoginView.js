/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {AuthStyle} from './authStyles';
import {MainStyle} from '../../AppStyles';
export default function LoginView({navigation}) {
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
        <Text style={MainStyle.subHeaderText}>Login to existing account </Text>
        <Text style={AuthStyle.label}>Email</Text>
        <TextInput style={AuthStyle.input} placeholder="Email" />
        <Text style={AuthStyle.label}>Password</Text>
        <TextInput
          style={AuthStyle.input}
          placeholder="Password"
          secureTextEntry={true}
        />
        <Text style={AuthStyle.subHeaderText}>Forgot Password?</Text>
        <TouchableOpacity
          style={AuthStyle.btn}
          onPress={() => navigation.navigate('Main')}>
          <Text style={AuthStyle.btnlabel}>LOGIN</Text>
        </TouchableOpacity>
        <Text>
          <Text style={MainStyle.subHeaderText}>Don't have an account? </Text>
          <Text
            style={{color: '#EFC81A'}}
            onPress={() => navigation.navigate('Register')}>
            Sign in
          </Text>
        </Text>
      </View>
    </View>
  );
}
