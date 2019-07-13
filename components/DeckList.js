import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getDecks } from '../utils/api';

class DeckList extends React.Component {
    decks;

    goToDeck(id) {
      this.props.navigation.navigate('DeckView',{id:id})
    }

    componentDidMount () {
        decks = getDecks();
    }
    render(){
      return (
        <View>
        {
            decks.map((q) => (<View onTouchEnd={(event) => this.goToDeck(q.id)} key={q.id} style={styles.container}><Text>{q.name}</Text><Text>{q.questions.length} Questions</Text></View>))
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

export default DeckList;