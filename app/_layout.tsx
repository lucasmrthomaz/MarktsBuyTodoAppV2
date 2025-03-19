import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';
import { useFonts, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';

export default function RootLayout() {
  useFrameworkReady();

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Stack screenOptions={{
        headerShown: false,
        animation: 'slide_from_right'
      }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="new" />
        <Stack.Screen name="edit/[id]" />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}