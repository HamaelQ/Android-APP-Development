// review.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { firestore } from './firebase'; // Import the firestore instance from firebase.js

const Review = () => {
  const [name, setName] = useState('');
  const [foodOrdered, setFoodOrdered] = useState('');
  const [review, setReview] = useState('');

  const handleReviewSubmit = async () => {
    // Create an object with user input
    const reviewData = {
      name,
      foodOrdered,
      review,
    };

    try {
      // Get a reference to the "reviews" collection
      const reviewsCollection = collection(firestore, 'reviews');

      // Add the user's review data to the "reviews" collection
      await addDoc(reviewsCollection, reviewData);

      console.log('Review submitted successfully!');
    } catch (error) {
      console.error('Error submitting review:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Write a Review</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Food Ordered"
        onChangeText={(text) => setFoodOrdered(text)}
        value={foodOrdered}
      />
      <TextInput
        style={styles.input}
        placeholder="Your Review"
        onChangeText={(text) => setReview(text)}
        value={review}
        multiline
      />
      <Button title="Submit Review" onPress={handleReviewSubmit} />
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
});

export default Review;
