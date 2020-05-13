import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Button, TouchableHighlight} from 'react-native';

function Component1(props) {
  return(
    <View>
      <Text>{props.name}</Text>
      <Text>{props.num1 + props.num2}</Text>
    </View>
  )
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'devMarilia',
      text: ''
    };
  }
  componentWillMount() {
    console.log('Antes de renderizar');
  }

  onChange = (evento) => {
    this.setState({text: evento});
  }
  onPress = (evento) => {
    alert(`${this.state.text}`);
  } 
  onHideUnderlay() {
    this.setState({ pressStatus: false });
}
  onShowUnderlay() {
    this.setState({ pressStatus: true });
  }

  render() {
    const {name} = this.state;
    console.log(this.state);
    return (
      <View style={styles.container}>
        <Text>Manipulando dados</Text>
        <Text>{this.state.name}</Text>
          <TextInput 
            placeholder="My Placeholder"
            onChangeText={this.onChange}/>
          <TouchableHighlight style={styles.button}
            activeOpacity={1}
            onPress={this.onPress}
            style={
              this.state.pressStatus
                ? styles.buttonPress
                : styles.button}
                onHideUnderlay={this.onHideUnderlay.bind(this)}
                onShowUnderlay={this.onShowUnderlay.bind(this)}
           >
          <Text style={styles.text}>Fill in Press me</Text>
        </TouchableHighlight>
        {/* <Component1 num1={4} num2={5} name={name}/> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000066',
    borderWidth: 1,
    borderRadius: 10,
    padding:10,
    height:45
  },
  text: {
    fontSize: 20,
    color: 'orange'
  },
  buttonPress: {
    borderColor: '#000066',
    backgroundColor: '#000066',
    borderWidth: 1,
    borderRadius: 10
  }
})