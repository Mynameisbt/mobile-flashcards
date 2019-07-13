import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { TabNavigator,StackNavigator } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'
import { renderComponent } from 'recompose';
import DeckList from './components/DeckList';
import AddDeck from './components/AddDeck';
import { Constants } from 'expo';
import DeckView from './components/DeckView';

function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const DeckStack = StackNavigator ({
  Home: {
    screen: DeckList,
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'purple',
      }
    }
  }
})

const Tabs = TabNavigator({
  Decks: {
    screen: DeckStack
  },
  AddDeck: {
    screen:AddDeck
  }
})

export default function App() {
  return (
    <View style={styles.container}>
      <UdaciStatusBar backgroundColor='purple' barStyle="light-content" />
      <Tabs/>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
