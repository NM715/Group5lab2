import React from "react";
import { View, Text, Image, StyleSheet, Pressable, Linking } from "react-native";

type CityProps = {
  name: string;
  imageUri: string;
  link: string;
  facts: string[];
};

const CityComponents: React.FC<CityProps> = ({ name, imageUri, link, facts }) => {
  const handlePress = () => {
    Linking.openURL(link);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.cityName}>{name}</Text>
      <Image source={{ uri: imageUri }} style={styles.image} />
      <Pressable onPress={handlePress} style={styles.link}>
        <Text style={styles.linkText}>Go to City Page</Text>
      </Pressable>
      <Text style={styles.title}>Fun Facts</Text>
     {facts.map((fact, index) => (
        <Text key={index} style={styles.fact}>
            {fact}
        </Text>
      ))}
    </View>
  );
};
export default CityComponents;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 350,
    height: 250,
    marginBottom: 8,
  },
  cityName: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  link: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  linkText: {
    color: "#fff",
    fontSize: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  fact: {
    fontSize: 14,
    marginTop: 5,
  },
});



