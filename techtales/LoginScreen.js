// LoginScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const handleLogin = () => {
    // Check if the entered credentials are correct
    if (username === 'Hamael' && password === '123') {
      // Navigate to the home screen or perform the desired action
    navigation.navigate('Home');
    } else {
    alert('Invalid username or password');
    }
};s

return (
    <View style={styles.container}>
      {/* First Section: Logo */}
    <View style={[styles.flexContainer, styles.logoContainer]}>
        <Text style={styles.title}>Logo</Text>
    </View>

      {/* Second Section: Username and Password */}
    <View style={[styles.flexContainer, styles.inputContainer]}>
        <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        />
        <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        />
    </View>

      {/* Third Section: Login Button */}
    <View style={[styles.flexContainer, styles.buttonContainer]}>
        <Button title="Login" onPress={handleLogin} />
    </View>
    </View>
);
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    flexDirection: 'column',
},
flexContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
logoContainer: {
    flex:1,
    backgroundColor: '#3498db', // Blue color
},
inputContainer: {
    flex:1,
    backgroundColor: '#2ecc71', // Green color
},
buttonContainer: {
    flex:1,
    backgroundColor: '#e74c3c', // Red color
},
title: {
    fontSize: 24,
    marginBottom: 16,
    color: 'white', // Text color for the logo
},
input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    backgroundColor: 'white', // Background color for text input
},
});

export default LoginScreen;
