import React from 'react';
import { Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {addQuestionToDeck, getDecks} from '../utils/api'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { receiveDecks } from '../actions'

class AddQuestion extends React.Component {
  state = {
    question: "",
    answer: ""
  }
  saveQuestion() {
    let question = this.state.question
    let answer = this.state.answer
    if (question.length > 0 && answer.length > 0) {
      addQuestionToDeck(this.props.deck.id, {
        question: question,
        answer: answer
      })
      let decks = getDecks().then((decks)=> this.props.dispatch(receiveDecks(decks)))

      this.props.navigation.dispatch(NavigationActions.back())
    }


  }

  updateQuestion(text) {
    this.setState(() => ({
      question: text
    }))
  }

  updateAnswer(text) {
    this.setState(() => ({
      answer: text
    }))
  }
  
  render(){
      return (
        <View>
            <Text>Enter New Question</Text>
            <TextInput placeholder="Enter Question" name="question" onChangeText={(txt) => this.updateQuestion(txt.trim())}>{this.state.question}</TextInput>
            <TextInput placeholder="Enter Answer" name="answer" onChangeText={(txt) => this.updateAnswer(txt.trim())}>{this.state.answer}</TextInput>
            <Button onPress={() => this.saveQuestion()} title="Create Question">Create Question</Button>
        </View>
      );
    } 
  }
  
  function mapStateToProps(state) {
    return {
      deck: state.selectedDeck ? state.decks.filter( d => d.id === state.selectedDeck)[0] : {name:'Unselected'}
    }
  }

export default connect(mapStateToProps)(AddQuestion);