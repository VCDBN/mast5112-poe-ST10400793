import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import HistoryScreen from './screens/HistoryScreen';
import GenreScreen from './screens/GenreScreen';


const Stack = createStackNavigator();

const App = () => {
  const [allBooks, setAllBooks] = useState([]);

  return (
    <NavigationContainer>// https://reactnative.dev/docs/navigation
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} initialParams={{ setAllBooks }} />
        <Stack.Screen name="History" component={HistoryScreen} initialParams={{ allBooks }} />
        <Stack.Screen name="Genre" component={GenreScreen} initialParams={{ allBooks }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
