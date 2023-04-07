/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {AuthStyle} from './authStyles';
import {MainStyle} from '../../AppStyles';
import {loginUser} from '../../storages/actions/authAction';
import {useDispatch, useSelector} from 'react-redux';
export default function LoginView({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const formData = {
    email: email,
    password: password,
  };

  const loginSubmit = () => {
    dispatch(loginUser(formData));
  };
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
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
        <TextInput
          style={AuthStyle.input}
          placeholder="Email"
          value={email}
          onChangeText={value => setEmail(value)}
        />
        <Text style={AuthStyle.label}>Password</Text>
        <TextInput
          style={AuthStyle.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={value => setPassword(value)}
        />
        {auth.isError && <Text>Wrong Email / Password</Text>}

        <Text style={AuthStyle.subHeaderText}>Forgot Password?</Text>
        <TouchableOpacity style={AuthStyle.btn} onPress={loginSubmit}>
          <Text style={AuthStyle.btnlabel}>
            {auth.isLoading ? (
              <ActivityIndicator size="large" color="white" />
            ) : (
              'LOGIN'
            )}
          </Text>
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