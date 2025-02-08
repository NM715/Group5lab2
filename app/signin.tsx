import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import credentials from "../credentials.json";
import { Link, useRouter } from "expo-router";

type SigninProps = {setIsSignedIn: (isSignedIn: boolean) => void, username: string, setusername: (username:string) => void}; 
const Signin: React.FC<SigninProps> = ({setIsSignedIn, username, setusername}) => { //bringing in username from index.tsx the parent
   // const [username, setusername] = useState<string>("");//makes the datatype have to be a string
    const [password, setPassword] = useState("");

    const router = useRouter();
    const handleSingIn = () => {
        //alert(`username: ${username}, Password:${password}`)};
        const user = credentials.users.find((user) => user.username === username); //find username in the file and make sure it matches my username
        if (user && user.password === password) {
            //alert("Success!");
            setIsSignedIn(true);
        } 
        else if (user && user.password !== password) {
            alert("Invalid password");
            //router.push("/recoverPassword"); forces routing
        }
        else {
            alert("Login failed");
           // router.push("/recoverPassword"); forces routing
        }
    }
    // useEffect(() => { //anytime anything changes this function will be run  sets password and username
    //     console.log("username:",username);
    //     console.log("Password:",password);
    // }, [username, password]);
    
    return (<View style={styles.container}>
        <Text style={styles.text}>Sign in</Text>
        <TextInput 
        style={styles.input}
        placeholder="username" 
        value={username} 
        onChangeText={setusername} //set username every time the text changes
        />
        <TextInput 
        style={styles.input}
        placeholder="Password" 
        value={password}
        onChangeText={setPassword}/>
        <View style={styles.button}>
            <Button title="Sign in" onPress={handleSingIn} color="#fff" />
        </View>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        alignItems: 'center',
    }, 
    input:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,   
        padding: 10,
        borderRadius: 5,
        width: 200
    },
    button: {
        backgroundColor: '#e67e22',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 20,
        elevation: 4,
      },
    text: {fontSize: 20, color: '#000'},
    recover: {fontSize: 16, color: 'blue', marginTop: 20}
})

export default Signin;