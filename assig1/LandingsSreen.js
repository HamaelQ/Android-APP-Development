import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const LandingScreen = () => {
return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']} // Adjust gradient colors
    style={styles.gradientContainer}>
    <View style={styles.container}>
        <Text style={styles.text}>Hello from LandingScreen!</Text>
    </View>
    </LinearGradient>
);
};

const styles = StyleSheet.create({
gradientContainer: {
    flex: 1,
},
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
text: {
    fontSize: 24,
    color: 'white',
},
});

export default LandingScreen;

