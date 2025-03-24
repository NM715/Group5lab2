import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, Button } from 'react-native';
import supabase from '../db/supabase';
import Signin from './signin';

const IndexScreen = () => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');

  useEffect(() => {
    const checkUser = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error('Error fetching session:', error);
      }
      if (data.session) {
        setIsSignedIn(true);
        setUsername(data.session.user.email);
      }
    };
    checkUser();
  }, []);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error signing out:', error);
    } else {
      setIsSignedIn(false);
      setUsername('');
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      {isSignedIn ? (
        <SafeAreaView style={styles.landingContainer}>
          <Text style={styles.welcomeText}>Welcome, {username}!</Text>
          <Button title="Sign Out" onPress={handleSignOut} />
        </SafeAreaView>
      ) : (
        <Signin setIsSignedIn={setIsSignedIn} setusername={setUsername} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  landingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
});

export default IndexScreen;