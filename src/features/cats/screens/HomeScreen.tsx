import { useListBreedsQuery } from '@/src/api/catApi';
import CatCard from '@/src/app/cat/CatCard';
import SearchBar from '@/src/features/cats/components/SearchBar';
import { useNavigation, useRouter } from 'expo-router';
import React, { useEffect, useMemo, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

export default function HomeScreen() {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const navigation = useNavigation();

  const { data: breeds, error, isLoading } = useListBreedsQuery(search, {
    skip: !search.trim(),
  });

  const filteredBreeds = useMemo(() => {
    if (!breeds) return [];
    return breeds;
  }, [breeds]);

  useEffect(() => {
    navigation.setOptions?.({ title: 'Catbreeds' });
  }, [navigation]);

  if (isLoading) return <Text>Cargando...</Text>;
  if (error) return <Text>Error al cargar datos</Text>;

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <SearchBar value={search} onChange={setSearch} />
      {!search.trim() ? (
        <Text>Escribe algo para buscar una raza</Text>
      ) : (
        <FlatList
          data={filteredBreeds}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CatCard
              breed={item}
              onPress={() =>
                router.push({ pathname: '/cat/detail', params: { breed: JSON.stringify(item) } })
              }
            />
          )}
        />
      )}
    </View>
  );
}
