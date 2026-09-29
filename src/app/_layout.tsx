import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="Cadastro" options={{ headerShown: false }} />
      <Stack.Screen name="About" options={{ title: 'Detalhes do animal' }} />
    </Stack>
  );
}
