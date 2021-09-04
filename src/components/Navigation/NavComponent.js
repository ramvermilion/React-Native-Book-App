import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const NavComponent = props => {
  const route = useRoute();

  return (
    <TouchableOpacity
      style={styles.navBar}
      onPress={() => props.navigation.navigate(props.navigateTo)}>
      {props.icon && (
        <Icon
          style={{alignSelf: 'center'}}
          name={props.icon}
          color={route.name === props.navigateTo ? 'red' : '#000'}
          size={props.size || 30}
        />
      )}
      <Text style={styles.textContent}>{props.navigateTo}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  navBar:{
    margin:10,
  },
  textContent: {
    fontSize: 12,
  },
});

export default NavComponent;
