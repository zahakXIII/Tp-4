import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Profil({ route, navigation }) {
  const nom = route.params?.nom ?? 'Utilisateur';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil de {nom}</Text>
      <Text style={styles.subtitle}>Bienvenue sur votre page de profil.</Text>
      <View style={styles.actions}>
        <Button title="Retour" onPress={() => navigation.goBack()} />
        <View style={styles.spacer} />
        <Button title="Retour à l'accueil" onPress={() => navigation.navigate('Accueil')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f0ff',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#1f1f3d',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: '#4b4b63',
    textAlign: 'center',
  },
  actions: {
    width: '70%',
  },
  spacer: {
    height: 12,
  },
});
