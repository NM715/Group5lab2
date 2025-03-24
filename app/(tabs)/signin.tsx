import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Alert, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import supabase from '../db/supabase';

const Signin = ({ setIsSignedIn, setusername }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track if the user is logged in
  const [username, setUsername] = useState(''); // Store the username for the welcome message
  const navigation = useNavigation(); // Initialize navigation

  const handleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      Alert.alert('Error', error.message);
    } else {
      setIsSignedIn(true);
      setusername(data.user?.email || '');
      setIsLoggedIn(true); // Set the logged-in state to true
      setUsername(data.user?.email || ''); // Store the username for the welcome message
    }
  };

  return (
    <View style={styles.container}>
      {isLoggedIn ? (
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome, {username}!</Text>
        </View>
      ) : (
        <>
          <Text style={styles.title}>Sign In</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.signupButton]} // Add a different style for the signup button
            onPress={() => navigation.navigate('signup' as never)} // Navigate to the signup screen
          >
            <Text style={styles.buttonText}>Go to Sign Up</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '95%',
    padding: 18,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  button: {
    width: '95%',
    padding: 15,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  signupButton: {
    backgroundColor: '#2196F3', // Blue button for the signup redirect
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  welcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Signin;