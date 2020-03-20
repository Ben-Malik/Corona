import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  SafeAreaView
} from 'react-native';


class Welcome extends Component {
  render() {
    return(
      <SafeAreaView style={styles.container}>
        <Text>Corona</Text>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default Welcome;
