import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './Screens/main'; 

const Stack = createNativeStackNavigator();

const App = () => {
return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} />
        {/* Other screens can be added here */}
    </Stack.Navigator>
    </NavigationContainer>
);
};

export default App;
