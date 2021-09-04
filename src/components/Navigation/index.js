import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {useRoute} from '@react-navigation/native';

import NavComponent from './NavComponent';
import {NavConstants} from '../../constants';

const Navigation = props => {
  const route = useRoute();
  const NavProps = props.navigation;

  return (
    <>
      <View style={styles.headerName}>
        <Text style={styles.headerText}>{route.name || 'Guest'}</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.iconWrap}>
          {NavConstants.filter(item => (item.Icon != null)).map(
            (item, index) => {
              return (
                <NavComponent
                  icon={item.Icon}
                  key={Math.random() * index}
                  navigateTo={item.Screen}
                  navigation={NavProps}
                />
              );
            },
          )}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerName: {
    padding: 15,
    backgroundColor: '#ff4c4c',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    textAlign: 'center',
    color:'#fff',
    fontSize: 24,
  },
  container: {
    position: 'absolute',
    width: '100%',
    height: 300,
    backgroundColor:'#fff',
    // top: Dimensions.get('window').height - 80,
    top: 650,
  },
  iconWrap: {
    marginHorizontal: 25,
    marginVertical: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Navigation;
