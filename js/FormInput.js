import React, { Component } from 'react';

import {StyleSheet, Text, TextInput, View} from 'react-native';

class FormInput extends Component {
  render() {
    return (
      <View style={styles.contentContainer}>
        <TextInput
          ref={this.props.index.toString()}
          autoFocus={this.props.autofocus}
          style={[styles.textInput, { color: 'blue' }]}
          value = {this.props.text}
          onChangeText={(text) => this.props.changeText(text, this.props.index)}
          blurOnSubmit={false}
          onSubmitEditing={() => this.props._focusNextField(`${this.props.index + 1}`)}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textInput: {
    borderWidth: 0.5,
    backgroundColor: '#dddddd',
    borderColor: '#0f0f0f',
    margin: 20,
    fontSize: 40,
    padding: 4,
    maxHeight: 60,
    width: '100%'
  }
});

module.exports = FormInput;