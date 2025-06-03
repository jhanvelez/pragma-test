// src/app/index.tsx
import HomeScreen from '@/src/features/cats/screens/HomeScreen';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function Index() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const load = async () => {
      await new Promise((res) => setTimeout(res, 2000));
      await SplashScreen.hideAsync();
      setIsReady(true);
    };
    load();
  }, []);

  if (!isReady) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Catbreeds</Text>
        <Image
          source={require('../../assets/images/splash-icon.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    );
  }

  return <HomeScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 100,
    paddingBottom: 60,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#222',
  },
  image: {
    width: 180,
    height: 180,
  },
});
