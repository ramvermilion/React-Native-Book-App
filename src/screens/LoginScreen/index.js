/**
 * HomeScreen
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState,useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  Button,
  Alert,
  Modal,
} from 'react-native';

import {Formik} from 'formik';

import Icon from 'react-native-vector-icons/FontAwesome5';
import {useSelector, useDispatch} from 'react-redux';

//custom imported items
import Input from '../../components/Input';
import PopupToast from '../../components/PopupToast';

const LoginScreen = props => {
  const [modal, setModal] = useState(false)
  const dispatch = useDispatch();

const handleModal=()=>{
  setModal(true)
}   
  
  return (
    <>
    <Formik
      initialValues={{username: '', password: 'Kuliza@123'}}
      onSubmit={(values, {setSubmitting}) => {
        // handleModal();

         dispatch({type: 'login',payload:values});
        setSubmitting(false);
        props.navigation.navigate('Home');
      }}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View style={styles.container}>
          <View style={styles.heading}>
            <Icon name="signature" color="red" size={60} />
            <Text style={styles.headingOne}>Proceed with your</Text>
            <Text style={styles.headingTwo}>Login</Text>
          </View>

          <View style={styles.form}>
            <Input
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
              placeholder="ABCDEFGH"
              title="Username"
              icon="user"
              name="username"
              type="text"
            />
            <Input
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder="xxxxxxxxxx"
              title="Password"
              icon="lock"
              name="password"
              type="password"
            />

            <View style={styles.buttonWrap}>
              <TouchableOpacity onPress={handleSubmit}>
                <Text style={styles.button}>Login</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Text style={styles.forgetText}>Forget Password ?</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
    {/* <PopupToast modalState={modal} /> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 40,
    paddingHorizontal: 25,
    flexDirection: 'column',
    flex: 1,
  },
  image: {
    width: '35%',
    height: 80,
  },
  heading: {
    padding: 10,
    marginTop: 10,
    marginBottom: 40,
  },
  headingOne: {
    fontSize: 34,
    marginTop: 10,
    color: '#000',
  },
  headingTwo: {
    fontSize: 34,
    color: '#000',
    fontStyle:'italic',
  },
  form: {
    flex: 2,
  },
  buttonWrap: {
    backgroundColor: 'red',
    paddingVertical: 15,
    marginVertical: 20,
    borderRadius: 5,
    marginHorizontal: 15,
    textAlign: 'center',
  },
  button: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Helvetica',
  },
  forgetText: {
    color: '#b7b7b7',
    textAlign: 'center',
  },
});

export default LoginScreen;
