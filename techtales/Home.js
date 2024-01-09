// Home.js

import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Linking } from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';

const HomeScreen = async () => {
  const handleButtonPress = async () => {
    try {
      // Example local PDF file path, replace with your actual PDF file path
      const localPdfPath = './assets/python.pdf';

      // Copy the PDF file to a location accessible by the media library
      const destinationUri = FileSystem.documentDirectory + 'your-pdf-file.pdf';
      await FileSystem.copyAsync({ from: localPdfPath, to: destinationUri });

      // Open the PDF using Linking
      await Linking.openURL(destinationUri);
    } catch (error) {
      console.error('Error copying and displaying local PDF file', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>

      {/* Four buttons with images */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleButtonPress}>
          <View style={styles.button}>
            <Image
              source={require('./assets/1.JPG')}
              style={styles.buttonImage}
            />
            <Text>Button 1</Text>
          </View>
        </TouchableOpacity>
        {/* Add other buttons as needed */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    alignItems: 'center',
  },
  buttonImage: {
    width: 50, // Adjust the width based on your image size
    height: 50, // Adjust the height based on your image size
    marginBottom: 10,
  },
});

export default HomeScreen;
