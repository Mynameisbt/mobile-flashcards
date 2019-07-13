import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import { getDeck } from '../utils/api';
import { connect } from 'react-redux'

class DeckView extends React.Component {
    componentDidMount() {

    }

    addQuestion() {
      console.log("Go to add question")
      this.props.navigation.navigate("AddQuestion")
    }

    render(){
      const {deck} = this.props;
      return (
        <View>
            <TouchableHighlight onPress={(event) => this.addQuestion()}  backgroundColor="blue" underlayColor="red" ><Text>Add Card</Text></TouchableHighlight>
            <TouchableHighlight backgroundColor="blue" underlayColor="red"><Text>Start Quiz</Text></TouchableHighlight>
            <TouchableHighlight backgroundColor="red" underlayColor="red"><Text>Delete Deck</Text></TouchableHighlight>
            <Text>Deck Name: {this.props.deck.name}</Text>

        </View>
      );
    } 
  }
  
function mapStateToProps(state) {
  return {
    deck: state.selectedDeck ? state.selectedDeck : {name:'Unselected'}
  }
}

export default connect(mapStateToProps)(DeckView);