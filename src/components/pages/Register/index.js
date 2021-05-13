import React, {useState} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';

import Input from '../../atoms/Input';
import Gap from '../../atoms/Gap';
import Button from '../../atoms/Button';

const Index = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = () => {
    const data = {
      name: name,
      username: username,
      email: email,
      address: address,
      phoneNumber: phoneNumber,
    };

    console.log(data);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.text}>Registration</Text>
        <Gap height={40} />
        <Input
          value={name}
          title="Name"
          placeholder="Masukan nama lengkap anda"
          onChangeText={e => setName(e)}
        />
        <Gap height={20} />
        <Input
          value={username}
          title="username"
          placeholder="Masukan username anda"
          onChangeText={e => setUsername(e)}
        />
        <Gap height={20} />
        <Input
          value={email}
          title="Email"
          placeholder="Masukan email anda"
          onChangeText={e => setEmail(e)}
        />
        <Gap height={20} />
        <Input
          value={address}
          title="Address"
          placeholder="Masukan alamat anda"
          onChangeText={e => setAddress(e)}
        />
        <Gap height={20} />
        <Input
          value={phoneNumber}
          keyboardType="numeric"
          title="Phone Number"
          placeholder="Masukan Nomor telepon anda"
          onChangeText={e => setPhoneNumber(e)}
        />
        <Gap height={29} />
        <Button onSubmit={handleSubmit} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    marginVertical: 24,
  },
  text: {
    fontSize: 36,
    fontWeight: 'bold',
  },
});

export default Index;
