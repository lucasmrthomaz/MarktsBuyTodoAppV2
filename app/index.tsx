import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSubmit = () => {
    // TODO: Implementar lógica de login
    router.navigate('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://markts.com.br/wp-content/uploads/2024/09/Logo.png' }} style={styles.logo} />
      <Text style={styles.title}>Lista de Mercado Markts</Text>
      <Text style={styles.subtitle}>Faça login para acessar sua lista de mercado</Text>
      
      <View style={styles.inputContainer}>
        <Feather name="user" size={20} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Feather name="lock" size={20} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
      
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>
      
      <TouchableOpacity>
        <Text style={styles.link}>Esqueceu a senha?</Text>
      </TouchableOpacity>
      
      <Text style={styles.footerText}>Ainda não tem conta?</Text>
      <TouchableOpacity>
        <Text style={styles.link}>Entre em contato conosco</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4ff',
    padding: 20,
  },
  logo: {
    width: 230,
    height: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#f97316',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    color: '#4f46e5',
    marginTop: 10,
  },
  footerText: {
    marginTop: 20,
    color: 'gray',
  },
});
