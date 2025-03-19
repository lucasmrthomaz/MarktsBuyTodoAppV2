import { useState } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { Pencil, Trash2, Plus, Check } from 'lucide-react-native';
import { Todo } from '@/types/todo';

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: '1', title: 'Uva docinha', completed: false },
    { id: '2', title: 'Batata frita', completed: true },
    { id: '3', title: 'Pão frances', completed: false },
    { id: '4', title: 'Ice Tea Limão', completed: true },
  ]);

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Mercado</Text>
      <ScrollView style={styles.scrollView}>
        {todos.map(todo => (
          <View key={todo.id} style={styles.todoItem}>
            <Pressable
              style={styles.checkbox}
              onPress={() => toggleTodo(todo.id)}
            >
              {todo.completed && <Check size={20} color="#4CAF50" />}
            </Pressable>
            <Text style={[
              styles.todoText,
              todo.completed && styles.completedTodo
            ]}>
              {todo.title}
            </Text>
            <View style={styles.actions}>
              <Link href={`/edit/${todo.id}`} asChild>
                <Pressable style={styles.actionButton}>
                  <Pencil size={20} color="#2196F3" />
                </Pressable>
              </Link>
              <Pressable
                style={styles.actionButton}
                onPress={() => deleteTodo(todo.id)}
              >
                <Trash2 size={20} color="#F44336" />
              </Pressable>
            </View>
          </View>
        ))}
      </ScrollView>
      <Link href="/new" asChild>
        <Pressable style={styles.fab}>
          <Plus color="white" size={24} />
        </Pressable>
      </Link>
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
  title: {
    fontSize: 32,
    fontFamily: 'Inter_600SemiBold',
    marginBottom: 20,
  },
  scrollView: {
    flex: 1,
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#4CAF50',
    borderRadius: 6,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  todoText: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
  },
  completedTodo: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  actions: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    padding: 8,
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#2196F3',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});