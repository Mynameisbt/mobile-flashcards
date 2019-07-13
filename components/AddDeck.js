import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';

class AddDeck extends React.Component {
    render(){
      return (
        <View>
            <Text>What is the title of your new deck?</Text>
            <TextInput placeholder="Enter deck title"></TextInput>
            <TouchableHighlight backgroundColor="blue" underlayColor="red"><Text>Create Deck</Text></TouchableHighlight>
        </View>
      );
    } 
  }
  
export default AddDeck;