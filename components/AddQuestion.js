import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';

class AddQuestion extends React.Component {
    render(){
      return (
        <View>
            <Text>Enter New Question</Text>
            <TextInput placeholder="Enter Question"></TextInput>
            <TextInput placeholder="Enter Answer"></TextInput>
            <TouchableHighlight backgroundColor="blue" underlayColor="red"><Text>Create Question</Text></TouchableHighlight>
        </View>
      );
    } 
  }
  
export default AddQuestion;