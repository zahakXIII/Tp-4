import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Accueil({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue sur l'écran d'accueil 🎉</Text>
      <Text style={styles.text}>Appuyez sur le bouton pour aller aux détails.</Text>
      <Button title="Aller aux détails" onPress={() => navigation.navigate('Details')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eaf4ff',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#0d3b66',
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
    color: '#555',
    textAlign: 'center',
  },
});
