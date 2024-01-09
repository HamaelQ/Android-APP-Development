// FlatItemList.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const data = [
  { id: '1', imagePath: require('../assets/image1.png'), price: 10.99 },
  { id: '2', imagePath: require('../assets/image2.png'), price: 15.99 },
  { id: '3', imagePath: require('../assets/image2.png'), price: 20.99 },
  // Add more items as needed
];

const RoundItemComponent = ({ imagePath, price, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
  <LinearGradient
        colors={['#6E14B6', '#CB85ED']}
        style={styles.roundContainer}
      >       
       <Image source={imagePath} style={styles.image} />
      <Text style={styles.price}>{`$${price.toFixed(2)}`}</Text>      

      <TouchableOpacity onPress={onPress} style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
</LinearGradient>
    </TouchableOpacity>
  );
};

const PromotionFlatItemList = () => {
  const renderItem = ({ item }) => (
    <RoundItemComponent
      imagePath={item.imagePath}
      price={item.price}
      onPress={() => console.log(`Item ${item.id} pressed!`)}
    />
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.flatListContainer}
      horizontal={true}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  roundContainer: {
    width: 100,
    height: 170,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#6E14B6', // Purple background color
    alignItems: 'center',
    justifyContent: 'center',
    marginRight:20,
    
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40, // To make it a circular image
  },
  price: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#4CAF50', // Green background color for the button
    padding: 5,
    borderRadius: 5,
  },
  addButtonText: {
    color: 'white',
    fontSize: 15,
  },
  flatListContainer: {
    paddingHorizontal: 20,
  },
});

export default PromotionFlatItemList;

