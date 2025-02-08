import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import credentials from "../credentials.json";
import { useRouter } from "expo-router";

const USERNAME_REGEX = /^.{5,}$/; // At least 5 characters
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

interface SigninProps {
  setIsSignedIn: (signedIn: boolean) => void;
  username: string;
  setusername: (username: string) => void;
}

const Signin: React.FC<SigninProps> = ({ setIsSignedIn, username, setusername }) => {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const validateInputs = () => {
    if (!USERNAME_REGEX.test(username)) {
      Alert.alert("Validation Error", "Username must be at least 5 characters long.");
      return false;
    }

    if (!PASSWORD_REGEX.test(password)) {
      Alert.alert(
        "Validation Error",
        "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
      return false;
    }

    return true;
  };

  const handleSignIn = () => {
    if (!validateInputs()) return;

    const user = credentials.users.find((user) => user.username === username);
    if (user && user.password === password) {
      setIsSignedIn(true);
    } else if (user && user.password !== password) {
      Alert.alert("Invalid password");
    } else {
      Alert.alert("Login failed");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign in</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setusername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <View style={styles.button}>
        <Button title="Sign in" onPress={handleSignIn} color="#fff" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    width: 200,
  },
  button: {
    backgroundColor: "#e67e22",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 20,
    elevation: 4,
  },
  text: { fontSize: 20, color: "#000" },
});

export default Signin;
