import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import ScrollCard from '../../components/ScrollCard';
import {DefaultStyles} from '../../constants';

import {RandomIdGenerator} from '../../utils';

const BookShelfScreen = props => {
  const {BookData, bookMarkData} = useSelector(state => state);
  const BookMarkData = [bookMarkData];

  const scrollContent = [
    {
      scrollData: bookMarkData.slice(0, 10),
    },
    // {
    //   scrollData: BookMarkData.slice(20,30),
    // },
    // {
    //   scrollData: BookMarkData.slice(30, 40),
    // },
  ];

  return (
    <View style={DefaultStyles.container}>
      {bookMarkData.length !== 0 ? (
        <ScrollView>
          {scrollContent.map((item, index) => {
            return (
              <ScrollCard
                key={Math.random() * index}
                vertical={true}
                navigation={props.navigation}
                scrollData={item.scrollData}
                title={item.title}
              />
            );
          })}
        </ScrollView>
      ) : (
        <Text style={styles.itemNumber}>No Items Added</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  itemNumber:{
    fontSize:28,
    textAlign:'center',
    padding: 50,
  }
});

export default BookShelfScreen;
