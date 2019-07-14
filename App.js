import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import AddDeck from './components/AddDeck';
import { Constants } from 'expo';
import DeckView from './components/DeckView';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import DeckList from './components/DeckList';
import AddQuestion from './components/AddQuestion';
import QuizView from './components/QuizView';


function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const DeckStack = createStackNavigator ({
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
  },
  AddQuestion: {
    screen: AddQuestion
  },
  QuizView: {
    screen: QuizView
  }
})

const Tabs = createBottomTabNavigator({
  Decks: {
    screen: DeckStack
  },
  AddDeck: {
    screen:AddDeck
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <UdaciStatusBar backgroundColor='purple' barStyle="light-content" />
          <Tabs/>
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
