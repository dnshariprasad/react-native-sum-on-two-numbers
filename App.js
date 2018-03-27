/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry,
  TextInput,
  Button
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
        super(props);
        this.state ={ f1: 0,f2: 0,result: 0 };
    }
  render() {
    return (
      <View>

      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
         keyboardType ='numeric'
        onChangeText={(text) => this.setState({f1:parseInt(text)})}
      />
      <TextInput
        style={{height: 40, borderColor: 'red', borderWidth: 1}}
         keyboardType ='numeric'
        onChangeText={(text) => this.setState({f2:parseInt(text)})}
      />

      <Text style={{color: 'blue'}}>{this.state.result}</Text>

      <Button
      style={{height: 40, borderColor: 'red', borderWidth: 1}}
      onPress={() => {
        this.setState({result : parseInt(this.state.f1) + parseInt(this.state.f2) });
       }}
        title="Sum"
       />
      </View>
    );
  }

}
