/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {MainStyle} from '../../AppStyles';
import {AuthStyle} from './authStyles';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ResetView({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.lock}>
          <Image
            style={{height: 200, width: 200}}
            source={require('../../assets/images/lock.png')}
          />
          <Text style={MainStyle.headerText}>Reset Password</Text>
        </View>
        <View style={styles.inputSection}>
          <Icon name="lock-closed-outline" size={16} />
          <TextInput
            style={styles.input}
            placeholder="New Password"
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.inputSection}>
          <Icon name="lock-open-outline" size={16} />
          <TextInput
            style={styles.input}
            placeholder="Confirm New Password"
            underlineColorAndroid="transparent"
          />
        </View>
      </View>
      <TouchableOpacity
        style={[AuthStyle.btn, {marginBottom: 32}]}
        onPress={() => navigation.navigate('Login')}>
        <Text style={AuthStyle.btnlabel}>Reset Password</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  lock: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  title: {
    marginTop: 20,
    color: '#EFC81A',
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputSection: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    width: 319,
    height: 50,
    borderRadius: 15,
    margin: 10,
    marginTop: 20,
    borderColor: '#EFC81A',
    color: '#EFC81A',
  },
  input: {
    flex: 1,
    minWidth: '70%',
    height: 40,
    borderColor: '#EFC81A',
    color: '#EFC81A',
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  btn: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: '78%',
    marginBottom: 10,
  },
});
