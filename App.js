import React, {Component} from 'react';
import {View, Text, SafeAreaView, StyleSheet, Alert} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Button} from 'react-native-elements';
import {Avatar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
// import Login from './screen/login/login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  onSubmit = () => {
    const {username, password} = this.state;
    console.log(username, password);
    if (username === '' && password === '')
      return Alert.alert('OPS..!', 'username dan password kosong');
    if (username === 'admin' && password === '123')
      return Alert.alert('Okey!', 'login suksess');
  };
  render() {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.navbar}>
            <Avatar
              size="small"
              rounded
              title="MT"
              onPress={() => Alert.alert('Works!', 'suksess')}
              activeOpacity={0.7}
            />
            <Text style={styles.logo}>Lunk.Aja</Text>
            <Text style={{flex: 1}}>About</Text>
          </View>
          <View></View>
          <Icon
            raised
            name="users"
            type="font-awesome"
            color="black"
            onPress={() => console.log('hello')}
            size={50}
          />
          <Input
            placeholder="Username"
            leftIcon={{type: 'font-awesome', name: 'user'}}
            style={styles}
            onChangeText={value => this.setState({username: value})}
          />

          <Input
            placeholder="Password"
            leftIcon={{type: 'font-awesome', name: 'key'}}
            style={styles}
            secureTextEntry={true}
            onChangeText={value => this.setState({password: value})}
          />
          <Button title="Hey" onPress={this.onSubmit} />
          {/* <Login /> */}
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }
}
const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    borderColor: 'blue',
    backgroundColor: 'red',
  },
  logo: {
    flex: 2,
    fontSize: 30,
    color: 'white',
  },
  body: {
    flex: 2,
  },
  title: {
    color: 'blue',
  },
});

export default App;
