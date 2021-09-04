import React, {useState, useRef} from 'react';

import {View, Text, TextInput, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

const Input = props => {
  return (
    <View>
      <View style={styles.inputWrap}>
        <Icon
          name={props.icon === 'user' ? 'user' : 'key'}
          style={styles.icon}
          size={20}
          color="#515151"
        />
        <Text style={styles.inputLabel}>{props.title}</Text>
        <TextInput
          style={styles.inputText}
          onChangeText={props.onChangeText}
          onBlur={props.onBlur}
          placeholderTextColor="#ccc"
          value={props.value}
          placeholder={props.placeholder || 'Type something'}
          autoCorrect={false}
          secureTextEntry={props.type === 'password' ? true : false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrap: {
    textAlign: 'center',
    paddingHorizontal: 10,
    marginVertical: 15,
    borderRadius: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#515151',
  },
  icon: {
    position: 'absolute',
    top: 40,
    right: 25,
  },
  inputLabel: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 5,
    fontFamily: 'Helvetica',
  },
  inputText:{
    color:'#000'
  }
});

export default Input;
