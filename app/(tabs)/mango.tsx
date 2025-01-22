import React from 'react';
import { ImageBackground, Text, StyleSheet } from 'react-native';

const Mango = () => {
  return (
    <ImageBackground
      source={{ uri: 'https://th.bing.com/th/id/OIP.GqqWLmKBZrwrWWFRPIFFEQHaHa?rs=1&pid=ImgDetMain' }}  
      style={styles.cover}
    >
      <Text style={styles.fruitName}>Mango</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  cover: {
    width: 340,
    height: 340,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 10,
  },
  fruitName: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',  
    marginTop: 140,       
  },
});

export default Mango;
