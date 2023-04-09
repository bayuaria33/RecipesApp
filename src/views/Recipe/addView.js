/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {launchImageLibrary} from 'react-native-image-picker';
import {MainStyle} from '../../AppStyles';
import {useDispatch, useSelector} from 'react-redux';
import {addRecipe} from '../../storages/actions/recipeAction';
export default function AddView() {
  const dispatch = useDispatch();
  const [filePath, setFilePath] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [fileType, setFileType] = useState(null);

  const token = useSelector(state => state.auth.data.data.accessToken);
  const users_id = useSelector(state => state.auth.data.data.id);
  const data = useSelector(state => state.add);
  const [title, setTitle] = useState();
  const [ingredients, setIngredients] = useState();
  const [categories_id, setCategories_id] = useState();

  const postForm = e => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('ingredients', ingredients);
    formData.append('categories_id', parseInt(categories_id, 10));
    formData.append('users_id', users_id);
    formData.append('photo', {
      uri: filePath,
      type: fileType,
      name: fileName,
    });
    console.log(formData);
    dispatch(addRecipe(token, formData));
  };

  const chooseFile = type => {
    let options = {
      mediaType: type,
      quality: 1,
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        alert('Upload photo canceled');
        return;
      } else if (response.errorCode === 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode === 'permission') {
        alert('Permission not granted');
        return;
      } else if (response.errorCode === 'others') {
        alert(response.errorMessage);
        return;
      }
      let assets = response.assets[0];

      console.log('fileName = ', assets.fileName);
      console.log('type = ', assets.type);
      console.log('uri = ', assets.uri);
      setFilePath(assets.uri);
      setFileName(assets.fileName);
      setFileType(assets.type);
    });
  };

  return (
    <View style={MainStyle.container}>
      <View style={MainStyle.main}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={MainStyle.headerText}>Add Your Recipe</Text>
          <Text style={styles.label}>Title</Text>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Title"
              value={title}
              onChangeText={value => setTitle(value)}
            />
          </View>
          <Text style={styles.label}>Ingredients</Text>
          <TextInput
            style={styles.inputLarge}
            placeholder="Ingredients"
            value={ingredients}
            onChangeText={value => setIngredients(value)}
          />
          <Text style={styles.label}>Photo</Text>
          {filePath === null ? (
            <Image
              source={{
                uri: 'https://res.cloudinary.com/dedas1ohg/image/upload/v1680855181/recipes_images/toppng.com-clipart-free-seaweed-clipart-draw-food-placeholder-323x257_bl22rr.png',
              }}
              style={{
                width: 319,
                height: 200,
                alignSelf: 'center',
                borderRadius: 16,
                backgroundColor: 'grey',
              }}
            />
          ) : (
            <Image
              source={{uri: filePath}}
              style={{
                width: 319,
                height: 200,
                alignSelf: 'center',
                borderRadius: 16,
                backgroundColor: 'grey',
                marginBottom: 10,
              }}
            />
          )}
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.btn}
            onPress={() => chooseFile('photo')}>
            <Text style={styles.btnlabel}>Choose Photo</Text>
          </TouchableOpacity>

          <Text style={styles.label}>Category</Text>
          <Picker
            style={styles.input}
            selectedValue={categories_id}
            onValueChange={item => setCategories_id(item)}>
            <Picker.Item label="Nasi" value={6} />
            <Picker.Item label="Soup" value={4} />
            <Picker.Item label="Vegetarian" value={3} />
            <Picker.Item label="Dessert" value={7} />
            <Picker.Item label="Breakfast" value={2} />
          </Picker>
          {data.isSuccess && (
            <Text style={styles.label}>Add Recipe Successful!</Text>
          )}
          {data.isError && <Text style={styles.label}>Add Recipe Failed.</Text>}
          <TouchableOpacity style={styles.btn} onPress={postForm}>
            <Text style={styles.btnlabel}>
              {data.isLoading ? (
                <ActivityIndicator size="large" color="white" />
              ) : (
                'POST'
              )}
            </Text>
          </TouchableOpacity>
        </ScrollView>
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
    elevation: 5,
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
    elevation: 5,
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
    marginBottom: 16,
  },
  btnlabel: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    color: 'white',
  },
});
