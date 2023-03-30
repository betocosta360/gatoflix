import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [latestMovies, setLatestMovies] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    // Chamar a API e obter as últimas atualizações de filmes
    fetch('https://appvideo.herokuapp.com/api/filmes')
      .then(response => response.json())
      .then(data => setLatestMovies(data))
      .catch(error => console.log(error));
  }, []);

  const handleWatchPress = (movieId) => {
    // Navegar para a tela de assistir filme com base no ID do filme
    navigation.navigate('WatchScreen', { id: movieId });
  }

  const handleCategoryPress = () => {
    // Navegar para a tela de categorias de filmes
    navigation.navigate('CategoryScreen');
  }

  const renderMovieCard = ({ item }) => {
    return (
      <TouchableOpacity style={styles.movieCard} onPress={() => handleWatchPress(item.id)}>
        <Image source={{ uri: item.poster }} style={styles.poster} />
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        {/* Banner principal aqui */}
      </View>
      <View style={styles.latestMovies}>
        <Text style={styles.sectionTitle}>Últimas atualizações</Text>
        <FlatList 
          data={latestMovies}
          renderItem={renderMovieCard}
          keyExtractor={item => item.id.toString()}
          horizontal
        />
      </View>
      <TouchableOpacity style={styles.categoryButton} onPress={handleCategoryPress}>
        <Text style={styles.categoryButtonText}>Categorias</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  banner: {
    // Estilos para o banner principal
  },
  latestMovies: {
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  movieCard: {
    marginRight: 16,
  },
  poster: {
    width: 120,
    height: 180,
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  categoryButton: {
    backgroundColor: 'blue',
    borderRadius: 8,
    padding: 16,
    marginTop: 24,
    alignSelf: 'center',
  },
  categoryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
