import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {DefaultStyles} from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useSelector, useDispatch} from 'react-redux';

const IndividualCard = props => {
  const bookItem = props.route.params.itemData;
  const {title, author, country, year, language, link, imageLink, pages} =
    props.route.params.itemData;

  const [color, setColor] = useState(false);
  const dispatch = useDispatch();

  const handleBookmark = item => {
    dispatch({type: 'bookmark', payload: bookItem});
    setColor(color => !color);
  };

  return (
    <ScrollView style={{backgroundColor: '#f9f9f9'}}>
      <View style={DefaultStyles.container}>
        <View style={styles.imageWrapper}>
          <Image style={styles.image} source={imageLink} />
        </View>

        <View style={styles.textWrapper}>
          <Text style={[styles.texts, styles.textMain]}>{title}</Text>

          <Text style={styles.subTitle}>
            {' '}
            By :<Text style={styles.fontBold}> {author}</Text>
          </Text>
          <Text style={styles.subTitle}>
            Published :
            <Text style={styles.fontBold}> {country + ', ' + year}</Text>
          </Text>
          <Text style={styles.subTitle}>
            Language :<Text style={styles.fontBold}> {language}</Text>
          </Text>

          <View style={styles.buttonWrap}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL(link)}>
              <Text style={[styles.subTitle, {color: 'white'}]}>Know More</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonOval}
              onPress={handleBookmark}>
              <Icon
                name="bookmark"
                style={styles.icon}
                color={color ? 'red' : '#000'}
                size={30}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default IndividualCard;

const styles = StyleSheet.create({
  imageWrapper: {
    alignItems: 'center',
    padding: 10,
    marginVertical: 20,
    marginHorizontal: 65,
    backgroundColor: '#fff',
    width: 250,
    justifyContent: 'center',
    elevation: 5,
    borderRadius: 5,
  },
  image: {
    width: '100%',
    height: 350,
    borderRadius: 5,
  },
  textWrapper: {
    marginVertical: 5,
    marginHorizontal: 10,
    // flexDirection:'row',
    alignContent: 'center',
  },
  textMain: {
    textAlign: 'center',
    color: 'black',
    fontSize: 24,
    // marginBottom: 5,
    // margin: 10,
    // marginTop:15,
  },
  subTitle: {
    fontSize: 15,
    marginVertical: 0,
    justifyContent: 'center',
    // alignSelf:'center',
    textAlign: 'center',
  },
  fontBold: {
    fontWeight: 'normal',
    color: 'red',
  },
  buttonWrap: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginBottom: 50,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'red',
    marginHorizontal: 10,
    borderRadius: 10,
    fontSize: 20,
  },
  buttonOval: {
    borderRadius: 150,
    marginHorizontal: 10,
    width: 50,
    height: 40,
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    position: 'relative',
    top: 0,
    left: 0,
  },
  icon: {
    // marginHorizontal:10,
    // marginVertical:5,
    top: 0,
    left: 10,
    position: 'absolute',
    // backgroundColor:'white',
    // borderRadius:100,
  },
  texts: {
    fontSize: 16,
    textAlign: 'center',
  },
});
