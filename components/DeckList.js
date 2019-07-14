import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getDecks } from '../utils/api';
import { receiveDecks, selectDeck } from '../actions'
import { connect } from 'react-redux'

class DeckList extends React.Component {

    goToDeck(deck) {
      this.props.dispatch(selectDeck(deck.id))
      this.props.navigation.navigate('DeckView')
    }

    componentDidMount () {
       getDecks().then((decks) => this.props.dispatch(receiveDecks(decks)))      
    }
    render(){
      const {decks} = this.props;
      return (
        <View>
        {
            decks && decks.map((q) => (<View onTouchEnd={(event) => this.goToDeck(q)} key={q.id} style={styles.container}><Text>{q.name}</Text><Text>{q.questions.length} Cards</Text></View>))
        }
        </View>
      );
    } 
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor:'lightyellow',
      borderWidth: 3,
      borderStyle: "solid"
    },
  });

  function mapStateToProps (state) {
    return {
      decks: state.decks
    }
  }
  

export default connect(mapStateToProps)(DeckList);