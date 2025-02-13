import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import vacationDestinations from '@/constants/vacationDestinations';

export default function Lab4() {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const toggleSelection = (id: number) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose the destinations you would like a quote for</Text>
      <FlatList
        data={vacationDestinations}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          const isSelected = selectedIds.includes(item.id);
          return (
            <TouchableOpacity
              style={[styles.item, isSelected && styles.selectedItem]}
              onPress={() => toggleSelection(item.id)}
            >
              <View style={styles.textContainer}>
                <Text style={[styles.text, isSelected && styles.selectedText]}>
                  {isSelected ? '✅ ' : ''}{item.location}
                </Text>
              </View>
              <Text style={styles.price}>${item.price}</Text>
              <Text style={styles.temperature}>{item.average_yearly_temperature}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5', // Light gray background for contrast
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    marginTop: 40, // Moves title lower to avoid camera obstruction
    color: '#333',
  },
  item: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 12,
    flexDirection: 'row', // Aligns items horizontally
    alignItems: 'center',
    justifyContent: 'space-between', // Ensures proper alignment
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Shadow for Android
  },
  selectedItem: {
    backgroundColor: '#d4edda', // Light green to indicate selection
    borderWidth: 2,
    borderColor: '#28a745',
  },
  textContainer: {
    flex: 1, // Ensures text takes up space evenly
  },
  text: {
    fontSize: 18,
    color: '#333',
    fontWeight: '500',
  },
  selectedText: {
    fontWeight: 'bold',
    color: '#155724',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007bff',
    width: 80, // Ensures price stays aligned
    textAlign: 'right',
  },
  temperature: {
    fontSize: 14,
    color: '#555',
    width: 50, // Aligns temperature values
    textAlign: 'right',
  },
});

export default Lab4;
