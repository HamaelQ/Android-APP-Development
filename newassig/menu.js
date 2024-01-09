import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HorizontalFlatListComponent from './components/HFlatScreen';
import BroadHorizontalFlatListComponent from './components/BHFlatScreen';
import PromotionFlatItemList from './components/PBHFlatScreen';
import Review from './reviews';

const Menu = () => {
  const navigation = useNavigation();

  const handleShortReviewPress = () => {
    // Navigate to the 'Review' screen when the Short Review button is pressed
    navigation.navigate('Review');
  };

  return (
    <View style={{ flex: 1 }}>
      <HorizontalFlatListComponent />
      <Text style={styles.header}>Promotions</Text>
      <BroadHorizontalFlatListComponent />
      <PromotionFlatItemList />

      {/* Short Review button */}
      <TouchableOpacity
        style={styles.shortReviewButton}
        onPress={handleShortReviewPress}
      >
        <Text style={styles.shortReviewButtonText}>Reviews</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    justifyContent: 'flex-start',
    fontWeight: 'bold',
  },
  shortReviewButton: {
    position: 'absolute',
    top: 20, // Adjust the top position as needed
    right: 20, // Adjust the right position as needed
    backgroundColor: '#6E14B6', // Purple color for the button
    padding: 10,
    borderRadius: 10,
  },
  shortReviewButtonText: {
    color: 'white',
  },
});

export default Menu;
