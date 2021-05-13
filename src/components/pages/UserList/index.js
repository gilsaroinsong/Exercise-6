import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import List from '../../molecules/List';
import Axios from 'axios';

import Gap from '../../atoms/Gap';

const Index = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/users').then(result => {
      setData(result.data);
    });
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.text}>User List</Text>
        <Gap height={31} />
        {data.map(i => {
          return (
            <List
              key={i.id}
              name={i.name}
              username={i.username}
              email={i.email}
              address={`${i.address.street}, ${i.address.suite}, ${i.address.city}, ${i.address.zipcode}`}
              phone={i.phone}
            />
          );
        })}
      </View>
    </ScrollView>
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
});
