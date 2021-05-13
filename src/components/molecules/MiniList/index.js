import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Index = ({email, firstName, lastName}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.outext}>
        First Name:
        <Text style={styles.intext}> {firstName}</Text>
      </Text>
      <Text style={styles.outext}>
        Last Name:
        <Text style={styles.intext}> {lastName}</Text>
      </Text>
      <Text style={styles.outext}>
        Email:
        <Text style={styles.intext}> {email}</Text>
      </Text>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 13,
    paddingHorizontal: 26,
    marginBottom: 15,
  },
  outext: {
    fontWeight: '700',
    fontSize: 14,
  },
  intext: {
    fontWeight: '100',
  },
});
