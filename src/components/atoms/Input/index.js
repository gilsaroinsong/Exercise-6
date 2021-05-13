import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const index = ({title, placeholder, ...rest}) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      <TextInput
        style={styles.borderInput}
        placeholder={placeholder}
        {...rest}
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  borderInput: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#C5C5C5',
    marginTop: 8,
    paddingHorizontal: 10,
  },
  text: {
    fontWeight: '500',
    fontSize: 14,
    fontFamily: 'Roboto',
  },
});
