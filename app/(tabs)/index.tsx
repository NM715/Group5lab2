import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText'; 
import { ThemedView } from '@/components/ThemedView';  
import { HelloWave } from '@/components/HelloWave';   
import { FruitsComponent } from '../../components/FruitsComponent';  //import fruit component
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

      {/* FruitsComponent list */}
      <FruitsComponent />

      {/* Navigation buttons */}
      <View style={styles.navButtons}>
        <Link href="/apple">
          <Button title="Go to Apple" />
        </Link>
        <Link href="/orange">
          <Button title="Go to Orange" />
        </Link>
        <Link href="/mango">
          <Button title="Go to Mango" />
        </Link>
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
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  navButtons: {
    marginTop: 20,
  },
});

export default IndexScreen;
