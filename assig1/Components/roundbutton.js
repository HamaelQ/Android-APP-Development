import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const RoundButton = ({ title, onPress }) => {
return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
);
};

const styles = StyleSheet.create({
button: {
    backgroundColor: '#3498db', 
    borderRadius: 20, // border radiu
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
},
buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
},
});

export default RoundButton;
