import { useState } from 'react';
import { StyleSheet, View, Pressable, SafeAreaView, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { HelloWave } from '@/components/HelloWave';
import { FruitsComponent } from '../../components/FruitsComponent';
import { Link } from 'expo-router';
import Signin from '../signin'; // Import the Signin page from one folder up


const IndexScreen = () => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [username, setusername] = useState<string>('');
  const [showFruits, setShowFruits] = useState<boolean>(false);

  const handlePress = () => {
    setShowFruits(!showFruits);
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      {isSignedIn ? (
        <Welcome
          username={username}
          showFruits={showFruits}
          handlePress={handlePress}
        />
      ) : (
        <Signin
          setIsSignedIn={setIsSignedIn}
          username={username}
          setusername={setusername}
        />
      )}
    </SafeAreaView>
  );
};

const Welcome = ({
  username,
  showFruits,
  handlePress,
}: {
  username: string;
  showFruits: boolean;
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
            Fruit Market 🍎
          </ThemedText>
          <HelloWave />
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.mainButton,
            pressed && styles.buttonPressed,
          ]}
          onPress={handlePress}
        >
          <ThemedText style={styles.buttonText}>
            {showFruits ? 'Hide Fruits' : 'Show Fruits Menu'}
          </ThemedText>
        </Pressable>

        {showFruits && <FruitsComponent />}

        <ThemedView style={styles.navContainer}>
          <Link href="/apple" style={styles.navLink}>
            <ThemedText style={styles.navText}>🍎 Apple</ThemedText>
          </Link>
          <Link href="/orange" style={styles.navLink}>
            <ThemedText style={styles.navText}>🍊 Orange</ThemedText>
          </Link>
          <Link href="/mango" style={styles.navLink}>
            <ThemedText style={styles.navText}>🥭 Mango</ThemedText>
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
    padding: 20,
    justifyContent: 'center',
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
  mainButton: {
    backgroundColor: '#e67e22',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
    elevation: 4,
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
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
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
    fontSize: 16,
    fontWeight: '500',

  },
});

export default IndexScreen;

