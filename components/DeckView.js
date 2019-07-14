import React from 'react';
import { Text, View, Button } from 'react-native';
import { deleteDeck, getDecks } from '../utils/api';
import { connect } from 'react-redux'
import { receiveDecks, selectDeck } from '../actions'

class DeckView extends React.Component {

    addQuestion() {
      this.props.navigation.navigate("AddQuestion")
    }

    startQuiz() {
      this.props.navigation.navigate("QuizView")
    }

    deleteDeckAction() {
      deleteDeck(this.props.deck.id);
      this.props.dispatch(selectDeck(null));
      getDecks().then((decks)=> this.props.dispatch(receiveDecks(decks)))
      
      this.props.navigation.navigate("Home")
    }

    render(){
      const {deck} = this.props;
      return (
        <View>
            <Text>Deck Name: {this.props.deck.name}</Text>
            <Text>Cards: {this.props.numQuestions}</Text>
            <Button onPress={(event) => this.addQuestion()} title="Add Card"><Text>Add Card</Text></Button>
            <Button onPress={(event) => this.startQuiz()} title="Start Quiz">Start Quiz</Button>
            <Button  onPress={(event) => this.deleteDeckAction()} title="Delete Deck"><Text>Delete Deck</Text></Button>
        </View>
      );
    } 
  }
  
function mapStateToProps(state) {
  let deckProp = state.selectedDeck ? state.decks.filter(d => d.id === state.selectedDeck)[0] : {name:'Unselected', questions:[]}
  return {
    deck: deckProp,
    numQuestions: deckProp.questions.length
  }
}

export default connect(mapStateToProps)(DeckView);