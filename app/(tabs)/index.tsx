import { useRouter } from 'expo-router';
import { View, Text, Button } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Welcome to the Home Screen</Text>
      <Button title="Go to Lab 4" onPress={() => router.push('/lab4')} />
    </View>
  );
}
