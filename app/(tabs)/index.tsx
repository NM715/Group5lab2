import { useState } from 'react';
import { StyleSheet, View, Pressable, SafeAreaView, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { HelloWave } from '@/components/HelloWave';
import { Link } from 'expo-router';
import Signin from '../signin'; 

const IndexScreen = () => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');
  const [showCity, setShowCity] = useState<boolean>(false); 

  const handlePress = () => {
    setShowCity(!showCity);
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      {isSignedIn ? (
        <Welcome username={username} showCity={showCity} handlePress={handlePress} />
      ) : (
        <Signin setIsSignedIn={setIsSignedIn} username={username} setusername={setUsername} />
      )}
    </SafeAreaView>
  );
};

const Welcome = ({
  username,
}: {
  username: string;
  showCity: boolean;
  handlePress: () => void;
}) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.greeting}>
          Welcome, {username || 'User'}!
        </ThemedText>

        <View style={styles.header}>
          <ThemedText type="title" style={styles.title}>
            My New App
          </ThemedText>
          <HelloWave />
        </View>

        <ThemedView style={styles.navContainer}>
          <Link href="/calgary" style={styles.navLink}>
            <ThemedText style={styles.navText}>Calgary</ThemedText>
          </Link>
          <Link href="/edmonton" style={styles.navLink}>
            <ThemedText style={styles.navText}>Edmonton</ThemedText>
          </Link>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#243B55',
  },
  scrollViewContainer: {
    flexGrow: 1,
    padding: 25,
    justifyContent: 'center',
    fontSize: 200,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: 12,
    padding: 20,
    marginVertical: 20,
  },
  greeting: {
    fontSize: 26,
    color: '#2c3e50',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 30,
    color: '#2c3e50',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  navContainer: {
    marginTop: 500,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#e67e22',
  },
  navLink: {
    backgroundColor: '#ecf0f1',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  navText: {
    color: '#3498db',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default IndexScreen;
