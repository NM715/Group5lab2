import React, { useState } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import CallAPI from "../../components/CallAPI"; // Ensure this works in React Native

const Lab5: React.FC = () => {
  const [showAPI, setShowAPI] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Button
        title={showAPI ? "Hide API Data" : "Fetch API Data"}
        onPress={() => setShowAPI(!showAPI)}
      />
      {showAPI && <CallAPI />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Lab5;
