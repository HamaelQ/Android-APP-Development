// RoundButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RoundButton = ({ title, destinationScreen }) => {
  const navigation = useNavigation();

  const handleButtonPress = () => {
    // Ensure the destinationScreen is a string, not an object
    if (typeof destinationScreen === 'string') {
      navigation.navigate(destinationScreen);
    } else {
      console.error("Invalid destinationScreen. It should be a string representing the screen name.");
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop:60,
    backgroundColor: 'white',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#6E14B6',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RoundButton;
