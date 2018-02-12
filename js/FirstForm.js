import React, { Component } from 'react';
const TVEventHandler = require('TVEventHandler');
import {StyleSheet, Text, TextInput, View, TouchableOpacity,Button} from 'react-native';

class FirstForm extends Component {
  constructor (props) {
    super(props);
    this.state = {textOne: 'Text',textTwo: 'text',lastInput: false, activeIndex: 0, maxIndex: 5};
    this.changeText = this.changeText.bind(this);
    this.blured = this.blured.bind(this);
    this.onPress = this.onPress.bind(this);
    this._enableTVEventHandler = this._enableTVEventHandler.bind(this);
    this._disableTVEventHandler = this._disableTVEventHandler.bind(this);

  }
  componentDidMount() {
    this._enableTVEventHandler();
  }

  componentWillUnmount() {

  }

  _enableTVEventHandler() {
    console.log('enable');
    this._tvEventHandler = new TVEventHandler();
    this._tvEventHandler.enable(this, function(cmp, evt) {
      console.log(cmp,evt);
      if (evt && evt.eventType === 'right') {
        console.log('right');

      } else if(evt && evt.eventType === 'up') {
        console.log('up');

      } else if(evt && evt.eventType === 'left') {
        console.log('left');

      } else if(evt && evt.eventType === 'down') {
        console.log('DOWN');
        this.state.activeIndex < this.state.maxIndex ? this.setState({activeIndex: this.state.activeIndex + 1}) : this.setState(null)
      } else if(evt && evt.eventType === 'playPause') {
        console.log('playPause');

      }
    });
  }

  _disableTVEventHandler() {
    if (this._tvEventHandler) {
      this._tvEventHandler.disable();
      delete this._tvEventHandler;
    }
  }
  changeText(value, textType) {
    console.log(value);
    if (textType === 1) {
      this.setState({textOne: value});
    } else {
      this.setState({textTwo: value})
    }
  }
  blured(index){
    this.setState({lastInput: true})
  }
  onPress() {
    console.log('pressed');
  }
  _focusNextField(nextField) {
    console.log(nextField);
    console.log(this.refs);
    if (nextField == 6) {
      console.log('button press');
      this.refs[nextField].touchableHandlePress();
    } else {
      this.refs[nextField].focus()
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          ref='1'
          style={[styles.input,this.state.activeIndex === 0 ? styles.activeInput : null]}
          placeholder='Normal'
          returnKeyType='next'
          blurOnSubmit={false}
          onSubmitEditing={() => this._focusNextField('2')}
        />
        <TextInput
          ref='2'
          style={[styles.input,this.state.activeIndex === 1 ? styles.activeInput : null]}
          keyboardType='email-address'
          placeholder='Email Address'
          returnKeyType='next'
          blurOnSubmit={false}
          onSubmitEditing={() => this._focusNextField('3')}
        />
        <TextInput
          ref='3'
          style={[styles.input,this.state.activeIndex === 2 ? styles.activeInput : null]}
          keyboardType='url'
          placeholder='URL'
          returnKeyType='next'
          blurOnSubmit={false}
          onSubmitEditing={() => this._focusNextField('4')}
        />
        <TextInput
          ref='4'
          style={[styles.input,this.state.activeIndex === 3 ? styles.activeInput : null]}
          keyboardType='numeric'
          placeholder='Numeric'
          blurOnSubmit={false}
          onSubmitEditing={() => this._focusNextField('5')}
        />
        <TextInput
          ref='5'
          style={[styles.input,this.state.activeIndex === 4 ? styles.activeInput : null]}
          keyboardType='numbers-and-punctuation'
          placeholder='Numbers & Punctuation'
          returnKeyType='done'
          onSubmitEditing={() => this._focusNextField('6')}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.onPress}
          ref='6'
        >
          <Text> Touch Here </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  FirstForm: {
    flex: 1,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  activeInput: {
    backgroundColor: '#dd0005',
  }
});

module.exports = FirstForm;