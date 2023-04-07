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
import {MainStyle} from '../../AppStyles';
import {AuthStyle} from './authStyles';
import {useDispatch, useSelector} from 'react-redux';
import {registerUser} from '../../storages/actions/authAction';
export default function RegisterView({navigation}) {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const formData = {
    name: name,
    email: email,
    password: password,
  };
  const registerSubmit = () => {
    dispatch(registerUser(formData));
  };
  const regis = useSelector(state => state.regis);
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
        <TextInput
          style={AuthStyle.input}
          placeholder="Name"
          value={name}
          onChangeText={value => setName(value)}
        />
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
        {regis.isError && <Text>Register Failed</Text>}
        {regis.isSuccess && <Text>Registration Successful</Text>}
        <TouchableOpacity style={AuthStyle.btn} onPress={registerSubmit}>
          <Text style={AuthStyle.btnlabel}>
            {regis.isLoading ? (
              <ActivityIndicator size="large" color="white" />
            ) : (
              'REGISTER'
            )}
          </Text>
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
