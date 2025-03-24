import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Alert, StyleSheet, Text } from 'react-native';
import supabase from '../db/supabase';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignedUp, setIsSignedUp] = useState(false); // Track if the user has signed up

  const handleSignUp = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { first_name: firstName, last_name: lastName },
      },
    });

    if (error) {
      Alert.alert('Error', error.message);
    } else {
      setIsSignedUp(true); // Set the signed-up state to true
    }
  };

  return (
    <View style={styles.container}>
      {isSignedUp ? (
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome, {firstName} {lastName}!</Text>
          <Text style={styles.welcomeText}>Your account has been created successfully.</Text>
        </View>
      ) : (
        <>
          <Text style={styles.title}>Sign Up</Text>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            placeholderTextColor="#666" // Darker placeholder text
            value={firstName}
            onChangeText={setFirstName}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            placeholderTextColor="#666" // Darker placeholder text
            value={lastName}
            onChangeText={setLastName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#666" // Darker placeholder text
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#666" // Darker placeholder text
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
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
    backgroundColor: '#2196F3', // Blue button
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default Signup;