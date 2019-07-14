import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import { deleteDeck, getDecks } from '../utils/api';
import { connect } from 'react-redux'
import { receiveDecks, selectDeck } from '../actions'

class DeckView extends React.Component {
    componentDidMount() {

    }

    addQuestion() {
      console.log("Go to add question")
      this.props.navigation.navigate("AddQuestion")
    }

    startQuiz() {
      this.props.navigation.navigate("QuizView")
    }

    deleteDeckAction() {
      deleteDeck(this.props.deck.id);
      this.props.dispatch(receiveDecks(getDecks()))
      this.props.navigation.navigate("Home")
    }

    render(){
      const {deck} = this.props;
      return (
        <View>
            <TouchableHighlight onPress={(event) => this.addQuestion()}  backgroundColor="blue" underlayColor="red" ><Text>Add Card</Text></TouchableHighlight>
            <Button backgroundColor="blue" underlayColor="red" onPress={(event) => this.startQuiz()} title="Start Quiz">Start Quiz</Button>
            <TouchableHighlight backgroundColor="red" underlayColor="red"onPress={(event) => this.deleteDeckAction()}><Text>Delete Deck</Text></TouchableHighlight>
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