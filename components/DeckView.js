import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import { getDeck } from '../utils/api';

class DeckView extends React.Component {
    deck={};
    componentDidMount() {
      console.log("props")
      console.log(this.props);
        this.deck = getDeck(this.props.navigation.state.params.id);
      console.log("Deck")
      console.log(this.deck)
    }
    render(){
      return (
        <View>
            <TouchableHighlight backgroundColor="blue" underlayColor="red"><Text>Start Quiz</Text></TouchableHighlight>
            <TouchableHighlight backgroundColor="red" underlayColor="red"><Text>Delete Deck</Text></TouchableHighlight>
            <Text>Deck Name: {this.deck.name}</Text>

        </View>
      );
    } 
  }
  
export default DeckView;