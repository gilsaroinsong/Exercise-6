import React, {useState, useEffect} from 'react';
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import MiniList from '../../molecules/MiniList';
import Axios from 'axios';

import Input from '../../atoms/Input';
import Gap from '../../atoms/Gap';

const Index = () => {
  const [data, setData] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    Axios.get('http://10.0.2.2:3004/users').then(result => {
      setData(result.data);
    });
  }, [data]);

  const handleSubmit = () => {
    const data = {
      first_name: firstName,
      last_name: lastName,
      email: email,
    };
    Axios.post('http://10.0.2.2:3004/users', data);
  };

  return (
    <View>
      <View style={styles.inputContainer}>
        <View style={styles.container}>
          <Text style={styles.text}>Add User</Text>
          <View>
            <Gap height={10} />
            <Input
              title="First Name"
              placeholder="Masukan first name"
              value={firstName}
              onChangeText={e => setFirstName(e)}
            />
            <Gap height={10} />
            <Input
              title="Last Name"
              placeholder="Masukan last name"
              value={lastName}
              onChangeText={e => setLastName(e)}
            />
            <Gap height={10} />
            <Input
              title="Email"
              placeholder="Masukan email"
              value={email}
              onChangeText={e => setEmail(e)}
            />
            <Gap height={20} />
            <Button title="Save" onPress={handleSubmit} />
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <Gap height={31} />
          {data.map(i => {
            return (
              <MiniList
                key={i.id}
                firstName={i.first_name}
                lastName={i.last_name}
                email={i.email}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    marginVertical: 24,
  },
  text: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  inputContainer: {
    backgroundColor: '#fff2f2',
    borderRadius: 40,
  },
});
