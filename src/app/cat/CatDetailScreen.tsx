import { useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useEffect } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

const DEFAULT_IMAGE = 'https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg';
const { height: screenHeight } = Dimensions.get('window');

export default function CatDetailScreen() {
  const { breed: breedStr } = useLocalSearchParams<{ breed: string }>();
  const navigation = useNavigation();

  const breed = JSON.parse(breedStr);
  const imageUrl = breed.image?.url || DEFAULT_IMAGE;

  useEffect(() => {
    navigation.setOptions?.({ title: breed.name });
  }, [breed.name, navigation]);

  if (!breedStr) return <Text>No hay información para mostrar.</Text>;

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} resizeMode="cover" />

      <ScrollView contentContainerStyle={styles.infoContainer}>
        {breed.description && (
          <>
            <Text style={styles.sectionTitle}>Descripción:</Text>
            <Text style={styles.text}>{breed.description}</Text>
          </>
        )}

        <Text style={styles.text}><Text style={styles.bold}>Origen:</Text> {breed.origin}</Text>
        <Text style={styles.text}><Text style={styles.bold}>Temperamento:</Text> {breed.temperament}</Text>
        <Text style={styles.text}><Text style={styles.bold}>Esperanza de vida:</Text> {breed.life_span} años</Text>
        <Text style={styles.text}><Text style={styles.bold}>Peso:</Text> {breed.weight.metric} kg</Text>
        <Text style={styles.text}><Text style={styles.bold}>Inteligencia:</Text> {breed.intelligence}</Text>
        <Text style={styles.text}><Text style={styles.bold}>Nivel de energía:</Text> {breed.energy_level}</Text>
        <Text style={styles.text}><Text style={styles.bold}>Nivel de afecto:</Text> {breed.affection_level}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: screenHeight * 0.5,
    width: '100%',
    backgroundColor: '#eee',
  },
  infoContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
    lineHeight: 22,
  },
  bold: {
    fontWeight: 'bold',
  },
  buttonWrapper: {
    marginTop: 20,
    alignItems: 'center',
  },
});
