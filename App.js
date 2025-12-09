import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Accueil from './screens/Accueil';
import Details from './screens/Details';
import Profil from './screens/Profil';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Accueil"
        screenOptions={{
          headerStyle: { backgroundColor: '#0d6efd' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: '600' },
        }}
      >
        <Stack.Screen name="Accueil" component={Accueil} options={{ title: 'Accueil' }} />
        <Stack.Screen name="Details" component={Details} options={{ title: 'Détails' }} />
        <Stack.Screen name="Profil" component={Profil} options={{ title: 'Profil' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
