import { useListBreedsQuery } from '@/src/api/catApi';
import SearchBar from '@/src/features/cats/components/SearchBar';
import { useRouter } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import CatCard from './CatCard';

export default function CatListScreen() {
  const { data: breeds, error, isLoading } = useListBreedsQuery();
  const [search, setSearch] = useState('');
  const router = useRouter();

  // Filtrado en memoria
  const filteredBreeds = useMemo(() => {
    if (!breeds) return [];
    return breeds.filter(b =>
      b.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [breeds, search]);

  if (isLoading) return <Text>Cargando...</Text>;
  if (error) return <Text>Error al cargar datos</Text>;

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <SearchBar value={search} onChange={setSearch} />
      <FlatList
        data={filteredBreeds}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <CatCard
            breed={item}
            onPress={() => router.push({ pathname: '/cat/detail', params: { id: item.id } })}
          />
        )}
      />
    </View>
  );
}