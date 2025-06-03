import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TCatBreed } from './CatRequest';

type Props = {
  breed: TCatBreed;
  onPress: () => void;
  imageUrl?: string;
};

const DEFAULT_IMAGE = 'https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg';

export default function CatCard({ breed, onPress, imageUrl }: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        source={{ uri: imageUrl || DEFAULT_IMAGE }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.info}>
        <Text style={styles.title}>{breed.name}</Text>
        <Text style={styles.subtitle}>{breed.origin}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 12,
    overflow: 'hidden',
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    backgroundColor: '#eee',
  },
  info: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  subtitle: {
    color: '#666',
    fontSize: 14,
  },
});