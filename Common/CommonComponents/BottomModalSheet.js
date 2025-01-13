import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';
const { width } = Dimensions.get('window').width;
const BottomSheet = ({ isVisible, onClose, onEdit, onDelete, onCancelRequest }) => {



  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      style={styles.modal}
    >
      <View style={styles.container}>
      <View style={styles.bulgeContainer}>
          <View style={styles.bulgeWrapper}>
            <TouchableOpacity onPress={onClose} style={styles.bulge}>
              <Icon name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.option} onPress={onEdit}>
          <Text style={styles.optionText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={onDelete}>
          <Text style={styles.optionText}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={onCancelRequest}>
          <Text style={styles.optionText}>Cancel Request</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    backgroundColor: 'white',
    padding: 16,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingBottom: 32,
  },
  bulgeContainer: {
    position: 'absolute',
    top: 0,
    left: (width/3), // Center the bulge
    right: 0,
    zIndex: 1,
  },
  bulgeWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 140,
    borderRadius: 20,
    backgroundColor: 'white',
    elevation: 3, // Adds shadow effect on Android
    shadowColor: '#000', // Adds shadow effect on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  bulge: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  option: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  optionText: {
    fontSize: 18,
    color: 'black',
  },
});

export default BottomSheet;
