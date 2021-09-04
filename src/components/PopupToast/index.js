import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Modal, Alert} from 'react-native';

const PopupToast = props => {
  let [modalVisible, setModalVisible] = useState(props.modalState);

  useEffect(() => {
    setModalVisible(props.modalState);
    timeOut();
  }, []);

  const timeOut = ()=>{
    setTimeout(function () {
      setModalVisible(false);
    }, 5000);
  }


  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}>
      <View style={styles.container}>
        <View style={styles.modalMain}>
          <Text style={styles.modalText}>Login After sometime</Text>
        </View>
      </View>
    </Modal>
  );
};

export default PopupToast;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'flex-end',
    alignContent: 'center',
    backgroundColor: 'red',
  },
  modalMain: {
    alignItems: 'center',
    opacity: 0.9,
    borderRadius: 100,
    height: 55,
    width: '45%',
    position: 'absolute',
    top: 600,
    left: 105,
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
  },
  modalText: {},
});
