import React from 'react';
import { ImageBackground, Text, StyleSheet } from 'react-native';

const Orange = () => {
  return (
    <ImageBackground
      source={{ uri: 'https://thecoconutmama.com/wp-content/uploads/2023/06/oranges-scaled.webp' }}  
      style={styles.cover}
    >
      <Text style={styles.fruitName}>Orange</Text>
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

export default Orange;
