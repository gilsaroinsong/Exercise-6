import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const index = ({onSubmit}) => {
  return (
    <View>
      <TouchableOpacity onPress={onSubmit} style={styles.buttonStyle}>
        <Text style={styles.title}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#C238CE',
    borderRadius: 20,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    paddingVertical: 10,
    height: 50,
    fontWeight: '500',
    fontSize: 18,
  },
});
