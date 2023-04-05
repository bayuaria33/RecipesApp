import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {MainStyle} from '../../AppStyles';

export default function AddView() {
  return (
    <View style={MainStyle.container}>
      <View style={MainStyle.main}>
        <Text style={MainStyle.headerText}>Add Your Recipe</Text>
        <Text style={styles.label}>Title</Text>
        <View>
          <TextInput style={styles.input} placeholder="Title">
            {''}
          </TextInput>
        </View>
        <Text style={styles.label}>Ingredients</Text>
        <TextInput style={styles.inputLarge} placeholder="Ingredients">
          {''}
        </TextInput>
        <Text style={styles.label}>Photo</Text>
        <TextInput style={styles.input} placeholder="Photo">
          {''}
        </TextInput>
        <Text style={styles.label}>Category</Text>
        <TextInput style={styles.input} placeholder="Category">
          {''}
        </TextInput>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnlabel}>POST</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 16,
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 15,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 319,
    height: 50,
  },
  inputLarge: {
    marginBottom: 16,
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 15,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 319,
    height: 200,
  },
  label: {
    marginBottom: 10,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#EFC81A',
    padding: 10,
    borderRadius: 15,
    width: 183,
    height: 50,
  },
  btnlabel: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    color: 'white',
  },
});
