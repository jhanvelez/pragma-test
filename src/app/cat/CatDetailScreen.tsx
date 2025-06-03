import { useGetCatImagesByBreedQuery } from '@/src/api/catApi';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Button, Image, ScrollView, StyleSheet, Text } from 'react-native';

const DEFAULT_IMAGE = 'https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg';

export default function CatDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const { data, isLoading, error } = useGetCatImagesByBreedQuery({ breedId: id });

  if (isLoading) return <Text>Cargando...</Text>;
  if (error || !data || data.length === 0) return <Text>No se encontró información.</Text>;

  const breed = data[0].breeds[0];
  const imageUrl = data[0].url || DEFAULT_IMAGE;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{breed.name}</Text>
      <Text style={styles.text}>Origen: {breed.origin}</Text>
      <Text style={styles.text}>Temperamento: {breed.temperament}</Text>
      <Text style={styles.text}>Esperanza de vida: {breed.life_span} años</Text>
      <Text style={styles.text}>Peso: {breed.weight.metric} kg</Text>
      <Button title="Volver" onPress={() => router.back()} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: '#eee',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 6,
    textAlign: 'center',
  },
  link: {
    color: '#007AFF',
    marginBottom: 20,
    textDecorationLine: 'underline',
  },
});