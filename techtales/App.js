// App.js

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Home';
import PdfViewer from './PdfViewer';
import LoginScreen from './Login';

const Stack = createNativeStackNavigator();

const App = () => {
  const [userAuthenticated, setUserAuthenticated] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userAuthenticated ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="PdfViewer" component={PdfViewer} />
            {/* Add other screens as needed */}
          </>
        ) : (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }} // Hide the header for the login screen
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
