import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const Index = ({
  name,
  username,
  email,
  address,
  phone,
  firstName,
  lastName,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.outext}>
        Name:
        <Text style={styles.intext}> {name}</Text>
      </Text>
      <Text style={styles.outext}>
        First Name:
        <Text style={styles.intext}> {firstName}</Text>
      </Text>
      <Text style={styles.outext}>
        Last Name:
        <Text style={styles.intext}> {lastName}</Text>
      </Text>
      <Text style={styles.outext}>
        Username:
        <Text style={styles.intext}> {username}</Text>
      </Text>
      <Text style={styles.outext}>
        Email:
        <Text style={styles.intext}> {email}</Text>
      </Text>
      <Text style={styles.outext}>
        Address:
        <Text style={styles.intext}> {address}</Text>
      </Text>
      <Text style={styles.outext}>
        Phone:
        <Text style={styles.intext}> {phone}</Text>
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
