// HorizontalFlatListComponent.js
import React, {useState, useEffect} from 'react';
import { View, Text, Image, FlatList, TextInput, StyleSheet } from 'react-native';

const data = [
  { id: 'all', name: 'All', image: require('../assets/all-icon.png') },
  { id: '1', name: 'Burger', image: require('../assets/image1.png') },
  { id: '2', name: 'Pizza', image: require('../assets/image2.png') },
  { id: '3', name: 'Desserts', image: require('../assets/image2.png') },
  { id: '4', name: 'Drinks', image: require('../assets/image2.png') },


  // Add more items as needed
];
const HorizontalFlatListComponent = () => {
    const [searchText, setSearchText] = useState('');
    const [filteredData, setFilteredData] = useState(data);

    useEffect(() => {
      // Filter the data based on the search text
     const filteredItems = data.filter(item =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredData(filteredItems);
    }, [searchText]);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
      </View>
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );
  

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        onChangeText={setSearchText}
        value={searchText}
      />
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      contentContainerStyle={styles.flatListContainer}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    paddingVertical: 20,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    paddingHorizontal: 10,
  },
  itemContainer: {
    marginHorizontal: 10,
    alignItems: 'center',
  },
  imageContainer: {
    backgroundColor: '#8B008B', // Purple background color
    borderRadius: 10, // Adjust the border radius as needed for a rounded look
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40, // To make it a circular image
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5, // Adjust spacing between image and text
  },
});

export default HorizontalFlatListComponent;
