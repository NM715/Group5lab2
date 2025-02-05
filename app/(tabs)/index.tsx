import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText'; 
import { ThemedView } from '@/components/ThemedView';  
import { HelloWave } from '@/components/HelloWave';   
import { FruitsComponent } from '../../components/FruitsComponent';  // import fruit component
import { Link } from 'expo-router'; 

// Handle button press
const handlePress = () => {
  alert("You clicked me! Below is the list");
};

const IndexScreen = () => {
  return (
    <View style={styles.container}>
      {/* ThemedView for welcome text and HelloWave component */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>

      {/* ThemedView for Welcome button */}
      <ThemedView style={styles.buttonContainer}>
        <Button title="Here is Our Fruit Menu -click me-" onPress={handlePress} />
      </ThemedView>

      {/* Navigation buttons */}
      <View>
        <Link href="/apple">Go to Apple</Link>
        <Link href="/orange">Go to Orange</Link>
        <Link href="/mango">Go to Mango</Link>
        <Link href="/lab_3">Go to Lab 3</Link> 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  titleContainer: {
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 20,
  },
});

export default IndexScreen;

