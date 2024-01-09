import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import RoundButton from './components/roundbutton';
import * as Location from 'expo-location';



const Main = () => {
  return (
    <LinearGradient
      colors={['#6E14B6', '#CB85ED']}
      style={styles.container}
    >
      <View style={styles.contentContainer}>
        <Image
          source={require('./assets/logo.png')} // Adjust the path based on your folder structure
          style={styles.logo}
        />
        <Text style={styles.text}>Enjoy Your</Text>
        <Text style={styles.text}>Favourite</Text>
        <Text style={styles.text}>Food</Text>
        <RoundButton title="Get Started" destinationScreen="SignIn" />


      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 291, // Adjust the width as needed
    height: 291, // Adjust the height as needed
    marginBottom: 10,
  },
  text: {
    fontFamily: 'monospace',
    color: 'white',
    fontSize: 30,

    marginBottom: 10,
    alignItems: 'center',
  },
});

export default Main;
