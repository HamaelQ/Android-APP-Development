// BroadHorizontalFlatListComponent.js
import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

const data = [
  { id: '1', text:  ' Today Offer \n  50% 0FF \n on all orders', image: require('../assets/image1.png') },
  { id: '2', text: 'Item 2', image: require('../assets/image2.png') },
  { id: '3', text: 'Item 3', image: require('../assets/image2.png') },
  { id: '4', text: 'Item 4', image: require('../assets/image2.png') },

  // Add more items as needed
];

const BroadHorizontalFlatListComponent = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.text}>{item.text}</Text>
      <Image source={item.image} style={styles.image} />
    </View>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      contentContainerStyle={styles.flatListContainer}
    />
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    width:1000,
    height:200,
    paddingVertical: 10,
    marginLeft:10,
    marginRight:10,
  },
  itemContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    alignItems: 'center',
    backgroundColor: '#6E14B6',
    borderRadius:10,

  },
  text: {
    fontSize: 20,
    color:'white',
    marginRight: 10,
  },
  image: {
    width: 200,
    height: 100,
    borderRadius: 5,
  },
});

export default BroadHorizontalFlatListComponent;
