import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginView from '../views/Auth/LoginView';
import RegisterView from '../views/Auth/RegisterView';
import HomeView from '../views/Home/HomeView';
import AddView from '../views/Recipe/addView';
import MyRecipeView from '../views/Recipe/myRecipeView';
import ProfileView from '../views/Profile/ProfileView';
import SearchView from '../views/Recipe/searchView';
import PopularView from '../views/Recipe/popularView';
import DetailView from '../views/Recipe/detailView';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'orange',
        tabBarShowLabel: false,
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeView}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="AddRecipe"
        component={AddView}
        options={{
          tabBarLabel: 'Add Menu',
          tabBarIcon: ({color, size}) => (
            <Icon name="add-circle-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MyMenu"
        component={MyRecipeView}
        options={{
          tabBarLabel: 'My Menu',
          tabBarIcon: ({color, size}) => (
            <Icon name="menu-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileView}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Icon name="person-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Popular"
        component={PopularView}
        options={{
          headerShown: false,
          tabBarButton: () => null,
          tabBarVisible: true,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchView}
        options={{
          headerShown: false,
          tabBarButton: () => null,
          tabBarVisible: true,
        }}
      />
      <Tab.Screen
        name="Detail"
        component={DetailView}
        options={{
          headerShown: false,
          tabBarButton: () => null,
          tabBarVisible: true,
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();
export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Auth Group */}
        <Stack.Group>
          <Stack.Screen
            name="Login"
            component={LoginView}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterView}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Group>
        {/* Main Group */}
        <Stack.Group>
          <Stack.Screen
            name="Main"
            component={TabNavigator}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
