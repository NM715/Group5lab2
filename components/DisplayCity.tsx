import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import Calgary from "@/app/(tabs)/calgary";
import Edmonton from "@/app/(tabs)/edmonton";

const DisplayCity = () => {
  const [selectedCity, setSelectedCity] = useState<string>("Calgary");

  return (
    <View>
      <View>
        <Button title="Calgary" onPress={() => setSelectedCity("Calgary")} />
        <Button title="Edmonton" onPress={() => setSelectedCity("Edmonton")} />
      </View>
      {selectedCity === "Calgary" && <Calgary />}
      {selectedCity === "Edmonton" && <Edmonton />}
    </View>
  );
};

export default DisplayCity;
