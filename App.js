/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import FirstForm from './js/FirstForm'
import {
  Platform,
  StyleSheet,
  TextInput,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (Platform.OS === 'ios' ?
      <View style={styles.contentContainer}>
        <FirstForm/>
      </View> : <FirstForm/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  title: {
    fontSize: 100,
  },
  body: {
    fontSize: 60,
  },
  bodySmall: {
    fontSize: 40,
  },
  bodyUrl: {
    fontSize: 30,
    margin: 20,
  },
  bulletedListContainer: {
    height: 500,
    width: 1200,
    margin: 0,
    alignItems: 'flex-start'
  },
  contentContainer: {
    height: 700,
    width: 1200,
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  listViewDemoContainer: {
    height: 600,
    width: 700,
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  listViewDemoText: {
    fontSize: 40,
  },
  nextButtonContainer: {
    position: 'absolute',
    top: 540,
    right: 100
  },
  prevButtonContainer: {
    position: 'absolute',
    top: 540,
    left: 100
  },
  customEventDemoContainer: {
    height: 400,
    width: 600,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    position: 'absolute',
    bottom: 20,
    right: 40
  },
  forest: {
    position: 'absolute',
    bottom: 0,
    right: 0
  },
  textInput: {
    borderWidth: 0.5,
    backgroundColor: '#dddddd',
    borderColor: '#0f0f0f',
    flex: 1,
    margin: 20,
    fontSize: 40,
    padding: 4,
    maxHeight: 60,
    width: '100%'
  }
});
