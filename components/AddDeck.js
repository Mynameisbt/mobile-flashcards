import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import {createDeck, getDecks} from '../utils/api'
import { receiveDecks, selectDeck } from '../actions'
import { connect } from 'react-redux'

class AddDeck extends React.Component {
  state = {
    title: ""
  }
  
  addNewDeck() {
    createDeck(this.state.title)
    getDecks().then((decks) => this.props.dispatch(receiveDecks(decks)))

    
    this.props.navigation.navigate("Decks")
  }
  
  render(){
      return (
        <View>
            <Text>What is the title of your new deck?</Text>
            <TextInput placeholder="Enter deck title" onChangeText={(txt) => (this.setState({title:txt}))}></TextInput>
            <TouchableHighlight backgroundColor="blue" underlayColor="red" onPress={() => this.addNewDeck()}><Text>Create Deck</Text></TouchableHighlight>
        </View>
      );
    } 
  }
  
export default connect()(AddDeck);