import React from 'react';
import { Text, View, StyleSheet } from 'react-native'; 
export const FruitsComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text>Apple</Text>
      </View>
      <View style={styles.item}>
        <Text>Orange</Text>
      </View>
      <View style={styles.item}>
        <Text>Mango</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  item: {
    marginVertical: 8,
  },
});
