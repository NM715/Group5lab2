import React from 'react';
import { ImageBackground, Text, StyleSheet, View } from 'react-native';

const Apple = () => {
  return (
    <ImageBackground
      source={{
        uri: "https://th.bing.com/th/id/OIP.3-zrV5_l8F7c65Xr1DflrgHaHa?w=168&h=180&c=7&r=0&o=5&dpr=2&pid=1.7", // Use your actual image URL
      }}
      style={styles.cover} 
    >
      <View style={styles.overlay}>
        <Text style={styles.fruitName}>Apple</Text>
      </View>
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
    justifyContent: 'center',
    alignItems: 'center', 
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    borderRadius: 5,
  },
  fruitName: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Apple;
