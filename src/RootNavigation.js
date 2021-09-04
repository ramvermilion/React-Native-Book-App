import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Navigation from '../src/components/Navigation';
import {horizontalAnimation} from './utils';

import {NavConstants} from '../src/constants';

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          headerMode="screen"
          initialRouteName={NavConstants[0].Screen}
          screenOptions={({navigation}) => ({
            header: () => <Navigation navigation={navigation} />,
          })}
          tabBarOptions={{
            safeAreaInsets: {
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
            },
          }}>
          {NavConstants.map((item, index) => {
            return item.Screen == 'Login' ? (
              <Stack.Screen
                name={item.Screen}
                key={Math.random() * index}
                options={(horizontalAnimation, {headerShown: false})}
                component={item.Component}
              />
            ) : (
              <Stack.Screen
                name={item.Screen}
                key={Math.random() * index}
                options={horizontalAnimation}
                component={item.Component}
              />
            );
          })}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
