import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

import {RandomIdGenerator} from '../../utils';

const ScrollCard = props => {
  return (
    <>
      {props.vertical ? (
        <View style={styles.cards}>
          {props.title && <Text style={styles.heading}>{props.title}</Text>}
          <View style={styles.cardVeritcalWrap}>
            {props.scrollData.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate('BookSection', {
                      itemData: item,
                    })
                  }
                  key={Math.random() * index}
                  activeOpacity={0.8}>
                  <View style={styles.cardsVertical}>
                    <Image
                      style={styles.thumbnailImage}
                      source={item.imageLink}
                    />
                    <View style={styles.bottomTextWrapColumn}>
                      <Text style={styles.cardText}>{item.title}</Text>
                      <Text style={styles.cardsubText}>{item.author}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      ) : (
        <View style={styles.cards}>
          <Text style={styles.heading}>{props.title}</Text>
          <ScrollView
            horizontal={true}
            contentContainerStyle={{flexDirection: 'row'}}>
            {props.scrollData.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate('BookSection', {
                      itemData: item,
                    })
                  }
                  key={Math.random() * index}
                  activeOpacity={0.8}>
                  <View style={styles.cardSub}>
                    <Image
                      style={styles.thumbnailImageVerical}
                      source={item.imageLink}
                    />
                    <View style={styles.bottomTextWrap}>
                      <Text style={styles.cardText}>{item.title}</Text>
                      <Text style={styles.cardsubText}>{item.author}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      )}
    </>
  );
};

export default ScrollCard;

const styles = StyleSheet.create({
  cards: {
    marginVertical: 5,
    marginHorizontal: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#181818',
    marginVertical: 15,
    marginHorizontal: 10,
  },
  cardSub: {
    width: 190,
    height: 330,
    marginVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  thumbnailImageVerical: {
    width: '90%',
    height: 250,
    borderRadius: 10,
    top: 10,
    position: 'absolute',
  },
  cardVeritcalWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
  },
  bottomTextWrap: {
    position: 'relative',
    top: 130,
  },
  cardsVertical: {
    width: 150,
    height: 300,
    marginVertical: 6,
    marginHorizontal:10,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  thumbnailImage: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    top: 10,
    position: 'absolute',
  },
  bottomTextWrapColumn: {
    position: 'relative',
    top: 130,
    marginTop: 15,
  },
  cardText: {
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Helvetica',
    textAlign: 'center',
    marginHorizontal: 5,
  },
  cardsubText: {
    fontSize: 12,
    fontFamily: 'Helvetica',
    color: 'red',
    textAlign: 'center',
  },
});
