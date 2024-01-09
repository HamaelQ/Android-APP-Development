import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const localImage = require('./assets/logo.png');


const Main = () => {
  return (
    <LinearGradient
      colors={['#6E14B6', '#CB85ED']}
      style={styles.container}
    >
      <View style={styles.contentContainer}>
      <Image source={localImage} style={styles.image} />


        <Text style={styles.text}>Enjoy Your</Text>
        <Text style={styles.text}>Favourite</Text>
        <Text style={styles.text}>Food</Text>
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
    width: 200, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    marginBottom: 20,
  },
  text: {
    fontFamily: 'inter',
    color: 'white',
    fontSize: 48,
    marginBottom: 20,
    alignItems: 'center',
  },
});

export default Main;
