// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './main';
import Menu from './menu';
import SignIn from './signin';
import { initializeApp, getAnalytics } from './firebase'; // Import Firebase functions
import Review from './reviews';

const Stack = createNativeStackNavigator();

const App = () => {
  // Other code in your App component

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Review" component={Review}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

