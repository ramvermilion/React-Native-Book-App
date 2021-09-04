import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';

import ScrollCard from '../../components/ScrollCard';
import {DefaultStyles} from '../../constants';

import {RandomIdGenerator, randomInteger} from '../../utils';

const SearchScreen = props => {
  const [value, setValue] = useState('');
  const {BookData} = useSelector(state => state);
  const scrollContent = [
    {
      scrollData: BookData.slice(0, 10),
    },
  ];
  const [searchContent, setSearchContent] = useState([]);

  useEffect(() => {
    let searchData = BookData.filter((item, index) => {
      return !item.title.toUpperCase().indexOf(value.toUpperCase());
    });
    setSearchContent([searchData]);
  }, [value]);

  return (
    <View style={DefaultStyles.container}>
      <View style={styles.separateCard}>
        <View style={styles.inputWrap}>
          <TextInput
            placeholder="Search"
            placeholderTextColor="#ccc"
            style={styles.input}
            value={value}
            name={'search'}
            onChangeText={value => setValue(value)}
          />
        </View>
      </View>
      <ScrollView>
        {searchContent.length !== 0 &&
          searchContent.map((item, index) => {
            return (
              <ScrollCard
                key={item.id * Math.random()}
                vertical={true}
                navigation={props.navigation}
                scrollData={item}
              />
            );
          })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  separateCard: {
    backgroundColor: '#ff4c4c',
    width: '100%',
    height: 100,
    elevation: 10,
    padding: 10,
  },
  inputWrap: {
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  input: {
    fontSize: 20,
    padding: 10,
    color: '#000',
  },
  noitems: {
    fontSize: 28,
    textAlign: 'center',
    padding: 40,
  },
});

export default SearchScreen;
