import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  SafeAreaView
} from 'react-native';

import Home from './src/screens/Home'

class App extends Component {
  render() {
    return(
      <Home/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
