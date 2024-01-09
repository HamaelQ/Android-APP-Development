import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { getAuth, signInWithEmailAndPassword, AuthErrorCodes } from 'firebase/auth';

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('');

  const auth = getAuth();

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // If sign-in is successful, you can navigate to another screen
      navigation.navigate('Menu');
    } catch (error) {
      console.error('Sign-in error:', error.message);

      // Customize error message based on the error code
      switch (error.code) {
        case AuthErrorCodes.INVALID_EMAIL:
        case AuthErrorCodes.USER_NOT_FOUND:
          setErrorText('Invalid email address or user not found.');
          break;
        case AuthErrorCodes.WRONG_PASSWORD:
          setErrorText('Invalid password.');
          break;
        default:
          setErrorText('Sign-in failed. Please try again.');
          break;
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      {errorText ? <Text style={styles.errorText}>{errorText}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Button title="Sign In" onPress={handleSignIn} />
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
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default SignIn;
