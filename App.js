import React, {Component} from 'react';
import {View} from 'react-native';
import RegisterScreen from './src/components/pages/Register';
import UserListScreen from './src/components/pages/UserList';
import AddUserScreen from './src/components/pages/AddUser';

export default class App extends Component {
  render() {
    return (
      <View>
        {/* <RegisterScreen /> */}
        {/* <UserListScreen /> */}
        <AddUserScreen />
      </View>
    );
  }
}
