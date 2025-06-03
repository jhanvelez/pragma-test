import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TCatBreed } from './CatRequest';

type Props = {
  breed: TCatBreed;
  onPress: () => void;
  imageUrl?: string;
};

export default function CatCard({ breed, onPress, imageUrl }: Props) {

  const imageSrc = breed.image?.url || imageUrl;

  if (!imageSrc) {
    return null;
  }

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{breed.name}</Text>
        <TouchableOpacity onPress={onPress} style={styles.moreButton}>
          <Text style={styles.moreButtonText}>Más...</Text>
        </TouchableOpacity>
      </View>

      <Image
        source={{ uri: imageSrc }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.footer}>
        <Text style={styles.leftText}>Origen: {breed.origin || 'Desconocido'}</Text>
        <Text style={styles.rightText}>Inteligencia: {breed.intelligence ?? '-'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 12,
    overflow: 'hidden',
    elevation: 3,
    padding: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  moreButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  moreButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 10,
    backgroundColor: '#eee',
    marginBottom: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftText: {
    fontSize: 14,
    color: '#444',
  },
  rightText: {
    fontSize: 14,
    color: '#444',
  },
});
