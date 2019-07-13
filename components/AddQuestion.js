import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import {addQuestionToDeck, getDecks} from '../utils/api'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { receiveDecks, selectDeck } from '../actions'

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
  
  render(){
      return (
        <View>
            <Text>Enter New Question</Text>
            <TextInput placeholder="Enter Question" name="question" onChangeText={(txt) => this.updateQuestion(txt.trim())}>{this.state.question}</TextInput>
            <TextInput placeholder="Enter Answer" name="answer" onChangeText={(txt) => this.updateAnswer(txt.trim())}>{this.state.answer}</TextInput>
            <TouchableHighlight backgroundColor="blue" underlayColor="red" onPress={() => this.saveQuestion()}><Text>Create Question</Text></TouchableHighlight>
        </View>
      );
    } 
  }
  
  function mapStateToProps(state) {
    return {
      deck: state.selectedDeck ? state.selectedDeck : {name:'Unselected'}
    }
  }

export default connect(mapStateToProps)(AddQuestion);