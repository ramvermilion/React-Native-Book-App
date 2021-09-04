import {StyleSheet} from 'react-native';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SearchScreen from './screens/SearchScreen';
import BookShelfScreen from './screens/BookShelfScreen';
import IndividualCard from './screens/IndividualCard';

export const NavConstants = [
  {
    Screen: 'Login',
    Icon: null,
    Component: LoginScreen,
  },
  {
    Screen: 'Home',
    Icon: 'home',
    Component: HomeScreen,
  },
  {
    Screen: 'Search',
    Icon: 'sistrix',
    Component: SearchScreen,
  },
  {
    Screen: 'BookShelf',
    Icon: 'bookmark',
    Component: BookShelfScreen,
  },
  {
    Screen: 'Profile',
    Icon: 'user',
    Component: ProfileScreen,
  },
  {
    Screen: 'BookSection',
    Icon: null,
    Component: IndividualCard,
  },
];

export const DefaultStyles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 0.9,
  },
});
