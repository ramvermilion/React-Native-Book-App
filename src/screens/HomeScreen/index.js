import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {DefaultStyles} from '../../constants';

import ScrollCard from '../../components/ScrollCard';
import {capitalizeFirstChar, RandomIdGenerator} from '../../utils';

const HomeScreen = props => {
  const {BookData, userDetails} = useSelector(state => state);

  const scrollContent = [
    {
      scrollData: BookData.slice(0, 10),
      title: 'Top Picks for the Week!!',
      vertical: false,
    },
    {
      scrollData: BookData.slice(20, 30),
      title: 'Top Best Sellers',
      vertical: false,
    },
    {
      scrollData: BookData.slice(90, 94),
      title: 'Classic Books',
      vertical: true,
    },
    {
      scrollData: BookData.slice(90, 100),
      title: 'Inspiring Stories',
      vertical: false,
    },
  ];

  return (
    <View style={DefaultStyles.container}>
      <View style={styles.separateCard}>
        <Icon style={styles.icon} name="signature" color="red" size={60} />
        <Text style={styles.mainText}>
          Welcome {capitalizeFirstChar(userDetails.username) || 'as Guest'}
        </Text>
        <Text style={styles.mainText}>Enjoy Reading !!!</Text>
      </View>
      <ScrollView>
        {scrollContent.map((item, index) => {
          return (
            <ScrollCard
              key={Math.random() * index}
              navigation={props.navigation}
              scrollData={item.scrollData}
              vertical={item.vertical}
              title={item.title}
              authorFirst={item.authorFirst}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  separateCard: {
    backgroundColor: '#ffff',
    width: '90%',
    height: 150,
    elevation: 2,
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 15,
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  mainText: {
    fontSize: 20,
    color: 'red',
    marginVertical: 2,
    textAlign: 'center',
    fontWeight: '500',
  },
});

export default HomeScreen;
