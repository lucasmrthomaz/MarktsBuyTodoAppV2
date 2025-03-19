import { Tabs } from 'expo-router';
import { ListTodo } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Todos',
          tabBarIcon: ({ size, color }) => (
            <ListTodo size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'Sobre',
          tabBarIcon: ({ size, color }) => (
            <ListTodo size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}