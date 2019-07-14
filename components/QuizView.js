import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import {addQuestionToDeck, getDecks} from '../utils/api'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { receiveDecks, selectDeck } from '../actions'

class QuizView extends React.Component {
  state = {
    questionNumber:0,
    numCorrect:0,
    numIncorrect:0
  }
  saveQuestion() {
    let question = this.state.question
    let answer = this.state.answer
    if (question.length > 0 && answer.length > 0) {
      addQuestionToDeck(this.props.deck.id, {
        question: question,
        answer: answer
      })
      let decks = getDecks();
        this.props.dispatch(receiveDecks(decks))

      this.props.navigation.dispatch(NavigationActions.back({key: 'AddQuestion'}))
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

  setCorrect() {
    this.setState((prevState) => (
      {
        numCorrect: prevState.numCorrect+1,
        questionNumber: prevState.questionNumber+1
      }
    ));
  }

  setIncorrect() {
    this.setState((prevState) => (
      {
        numIncorrect: prevState.numIncorrect+1,
        questionNumber: prevState.questionNumber+1
      }
    ));
  }
  
  render(){
    if (this.props.deck.questions ==null || this.props.deck.questions.length === 0) {
      return <View><Text>Unable to quiz since the deck has no cards</Text></View>
    }
    let numQuestions = this.props.deck.questions.length;
    if (this.state.questionNumber === numQuestions) {
      return (
        <View>
            <Text>All questions answered</Text>
            <Text>Number Correct: {this.state.numCorrect}</Text>
            <Text>Number Inorrect: {this.state.numIncorrect}</Text>
        </View>
      )
    } else {
      let question = this.props.deck.questions[this.state.questionNumber]
      
      return (
        <View>
            <Text>{this.state.questionNumber+1}/{this.props.deck.questions.length}</Text>
            <Text>{question.question}?</Text>
            <Button title="Correct" onPress={() => this.setCorrect()}>Correct</Button>  
            <Button title="Incorrect" onPress={() => this.setIncorrect()}>Incorrect</Button>           
        </View>
      )
    } 
  }
}
  
  function mapStateToProps(state) {
    return {
      deck: state.selectedDeck ? state.selectedDeck : {name:'Unselected'}
    }
  }

export default connect(mapStateToProps)(QuizView);