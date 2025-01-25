import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function AppleImagePage() {


  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://th.bing.com/th/id/OIP.3-zrV5_l8F7c65Xr1DflrgHaHa?w=168&h=180&c=7&r=0&o=5&dpr=2&pid=1.7" }}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});
