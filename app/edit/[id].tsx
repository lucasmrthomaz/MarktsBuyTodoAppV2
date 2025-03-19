import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ArrowLeft, Check } from 'lucide-react-native';

export default function EditTodo() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [title, setTitle] = useState('');

  const handleSave = () => {
    // Save changes and navigate back
    router.back();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft size={24} color="#000" />
        </Pressable>
        <Text style={styles.title}>Editando item</Text>
        <Pressable onPress={handleSave} style={styles.saveButton}>
          <Check size={24} color="#4CAF50" />
        </Pressable>
      </View>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="O novo nome do item :)"
        autoFocus
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    padding: 8,
  },
  title: {
    flex: 1,
    fontSize: 32,
    fontFamily: 'Inter_600SemiBold',
    marginLeft: 8,
  },
  saveButton: {
    padding: 8,
  },
  input: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});