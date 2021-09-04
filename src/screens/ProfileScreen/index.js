import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import {DefaultStyles} from '../../constants';

import {useSelector, useDispatch} from 'react-redux';
import {capitalizeFirstChar} from '../../utils';

const ProfileScreen = props => {
  const {userDetails} = useSelector(state => state);

  const profileList = [
    {title: 'General', navigateTo: 'Home'},
    {title: 'Account Settings', navigateTo: 'Home'},
    {title: 'App Settings', navigateTo: 'Home'},
    {title: 'Offline Books', navigateTo: 'Home'},
    {title: 'Listening Goals', navigateTo: 'Home'},
    {title: 'Help Center', navigateTo: 'Home'},
    {title: 'Logout', navigateTo: 'Login'},
  ];

  return (
    <View style={DefaultStyles.container}>
      <View style={styles.separateCard}>
        <Icon
          style={styles.icon}
          color="#ffe5e5"
          name="user-circle"
          size={150}
        />
        <View style={styles.profileWrap}>
          <Text style={styles.profileText}>
            Hi {capitalizeFirstChar(userDetails.username) || 'Guest'}
          </Text>
          <Text style={[styles.profileText, {fontSize: 16}]}>100</Text>
          <Text style={[styles.profileText, {fontSize: 12, color: '#fff'}]}>
            FOLLOWING
          </Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.settingView}>
          {profileList.map((item, index) => {
            return (
              <TouchableOpacity
                  key={Math.random() * index}
                onPress={() => props.navigation.navigate(item.navigateTo)}>
                <Text style={styles.textContent}>{item.title}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  separateCard: {
    backgroundColor: '#ff4c4c',
    width: '100%',
    height: 275,
    elevation: 10,
    padding: 10,
  },
  icon: {
    textAlign: 'center',
  },
  profileWrap: {
    marginVertical: 15,
    textAlign: 'center',
    alignSelf: 'center',
  },
  profileText: {
    fontSize: 25,
    color: '#fff',
    marginVertical: 2,
    textAlign: 'center',
  },
  settingView: {},
  textContent: {
    marginVertical: 8,
    fontSize: 20,
    marginHorizontal: 20,
  },
});

export default ProfileScreen;
