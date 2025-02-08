import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import IncrementButton from "../components/IncrementButton";
import DecrementButton from "../components/DecrementButton";

const Lab_3 = () => {
    
    const [value, setValue] = useState<number>(0); 

    return (
        <View style={styles.container}>
            <Text>{value}</Text>  
            <IncrementButton value={value} setValue={setValue} />
            <DecrementButton value={value} setValue={setValue} />
        </View>
    );
};

export default Lab_3;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#57780'
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },
    buttonContainer: {
      marginTop: 20,
      marginBottom: 20,
    },
});
