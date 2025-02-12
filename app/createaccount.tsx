import { 
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
  } from "react-native";
  import React, { useState } from "react";
  import { useRouter } from "expo-router";
  
  const USERNAME_REGEX = /^.{5,}$/;
  const PASSWORD_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
  const CreateAccount = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
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
  
      if (password !== confirmPassword) {
        Alert.alert("Validation Error", "Passwords do not match.");
        return false;
      }
  
      return true;
    };
  
    const handleCreateAccount = () => {
      if (!validateInputs()) return;
  
      Alert.alert("Success", "Account created successfully!");
      router.push("/signin"); // Navigate back to Sign In page
    };
  
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.background}
      >
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.card}>
            <Text style={styles.title}>Create Account</Text>
            <TextInput
              style={styles.input}
              placeholder="Username"
              value={username}
              onChangeText={setUsername}
              placeholderTextColor="#aaa"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              placeholderTextColor="#aaa"
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholderTextColor="#aaa"
            />
            <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
              <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  };
  
  const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: "#dfe6e9",
    },
    container: {
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 40,
    },
    card: {
      backgroundColor: "#fff",
      padding: 25,
      borderRadius: 12,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.2,
      shadowRadius: 10,
      elevation: 5,
      alignItems: "center",
      width: 320,
    },
    title: {
      fontSize: 26,
      fontWeight: "bold",
      color: "#2d3436",
      marginBottom: 20,
    },
    input: {
      height: 50,
      borderColor: "#b2bec3",
      borderWidth: 1,
      backgroundColor: "#f1f2f6",
      paddingHorizontal: 12,
      borderRadius: 8,
      width: "100%",
      marginBottom: 15,
      fontSize: 16,
      color: "#2d3436",
    },
    button: {
      backgroundColor: "#0984e3",
      paddingVertical: 14,
      width: "100%",
      borderRadius: 8,
      alignItems: "center",
      marginTop: 10,
      elevation: 3,
    },
    buttonText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "bold",
    },
  });
  
  export default CreateAccount;
  