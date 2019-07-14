import React from 'react';
import { Text, View, Button, Animated } from 'react-native';
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers';

class QuizView extends React.Component {
  state = {
    questionNumber:0,
    numCorrect:0,
    numIncorrect:0,
    displayAnswer: false,
    opacity: new Animated.Value(1)
  }

  setCorrect() {
    this.setState((prevState) => {
      if (prevState.questionNumber +1 === this.props.deck.questions.length) {
        clearLocalNotification().then(setLocalNotification)
      }
      
      return {
        numCorrect: prevState.numCorrect+1,
        questionNumber: prevState.questionNumber+1,
        displayAnswer: false
      }
    });
  }

  setIncorrect() {
    this.setState((prevState) => {
      if (prevState.questionNumber +1 === this.props.deck.questions.length) {
        clearLocalNotification().then(setLocalNotification)
      }
      return {
          numIncorrect: prevState.numIncorrect+1,
          questionNumber: prevState.questionNumber+1,
          displayAnswer: false
        }
    });
  }

  toggleAnswer() {
    this.setState((prevState) => ({
      displayAnswer: !prevState.displayAnswer
    }));
    Animated.sequence([
    Animated.timing(this.state.opacity, {toValue:0, duration:500}),
    Animated.timing(this.state.opacity, {toValue:1, duration:500})
    ]).start()
  }
  restartQuiz() {
    this.setState({
      questionNumber:0,
      numCorrect:0,
      numIncorrect:0,
      displayAnswer: false,
    })
  }

  backToDeck() {
    this.props.navigation.dispatch(NavigationActions.back())
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
            <Button title="Restart Quiz" onPress={() => this.restartQuiz()}></Button>
            <Button title="Back to Deck"onPress={() => this.backToDeck()}></Button>
        </View>
      )
    } else {
      let question = this.props.deck.questions[this.state.questionNumber]
      
      return (
        <View>
            <Text>{this.state.questionNumber+1}/{this.props.deck.questions.length}</Text>
            <Animated.View opacity={this.state.opacity}>
            {
              this.state.displayAnswer ? 
              ( <View>
                  <Text>{question.answer}</Text>
                  <Button title="Question" onPress={() => this.toggleAnswer()}>Correct</Button>
                </View>
              ) :
              (
              <View>
                <Text>{question.question}?</Text>
                <Button title="Answer" onPress={() => this.toggleAnswer()}>Correct</Button>
              </View>)
            }
            </Animated.View>
            <Button title="Correct" onPress={() => this.setCorrect()}>Correct</Button>  
            <Button title="Incorrect" onPress={() => this.setIncorrect()}>Incorrect</Button>           
        </View>
      )
    } 
  }
}
  
  function mapStateToProps(state) {
    return {
      deck: state.selectedDeck ? state.decks.filter(d => d.id === state.selectedDeck)[0] : {name:'Unselected'}
    }
  }

export default connect(mapStateToProps)(QuizView);