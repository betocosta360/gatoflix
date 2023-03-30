import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Video } from 'expo-av';
import { useRoute, useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import styles from './style';

const API_URL = 'https://appvideo.herokuapp.com/api';

function FilmCard({ title, poster, videoUrl, onPress }) {
  return (
    <Animatable.View animation="flipInX" style={styles.card}>
      <View style={styles.cardImageContainer}>
        <Image source={{ uri: poster }} style={styles.cardImage} />
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>
          {title}
        </Text>
      </View>
      <TouchableOpacity animation="bounce" style={styles.button} onPress={onPress}>
        <Animatable.Text style={styles.buttonText}>Assistir</Animatable.Text>
      </TouchableOpacity>
    </Animatable.View>
  );
}

export default function CategoryMovie() {
  const [movies, setMovies] = useState([]);
  const [originalMovies, setOriginalMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const { params } = useRoute();
  const { category } = params;
  const navigation = useNavigation();

  useEffect(() => {
    setIsLoading(true);
    fetch(`${API_URL}/filmes?category=${category}`)
      .then(response => response.json())
      .then(data => {
        setOriginalMovies(data.filmes);
        setMovies(paginate(data.filmes, 1));
      })
      .catch(error => console.error(error))
      .finally(() => setIsLoading(false));
  }, [category]);

  const handlePress = (videoUrl) => {
    navigation.navigate('Watch', { videoUrl });
  };

  const paginate = (items, pageNumber) => {
    const startIndex = (pageNumber - 1) * 5;
    return items.slice(startIndex, startIndex + 5);
  }

  const handlePageChange = (page) => {
    setPageNumber(page);
    setMovies(paginate(originalMovies, page));
  }

  const renderFilmCard = ({ item }) => (
    <FilmCard
      title={item.title}
      poster={item.poster}
      videoUrl={item.video}
      onPress={() => handlePress(item.video)}
    />
  );

  const renderPagination = () => {
    const totalPages = Math.ceil(originalMovies.length / 5);
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  
    return (
      <View style={styles.paginationContainer}>
        <TouchableOpacity
          style={[styles.paginationButton, pageNumber === 1 && styles.disabledPaginationButton]}
          onPress={() => handlePageChange(pageNumber - 1)}
          disabled={pageNumber === 1}
        >
          <Text style={styles.paginationButtonText}>Anterior</Text>
        </TouchableOpacity>
        {pages.map(page => (
          <TouchableOpacity
            key={`page-${page}`}
            style={[styles.paginationButton, page === pageNumber && styles.activePaginationButton]}
            onPress={() => handlePageChange(page)}
          >
            <Text style={styles.paginationButtonText}>{page}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={[styles.paginationButton, pageNumber === totalPages && styles.disabledPaginationButton]}
          onPress={() => handlePageChange(pageNumber + 1)}
          disabled={pageNumber === totalPages}
        >
          <Text style={styles.paginationButtonText} >Próximo</Text>
        </TouchableOpacity>
      </View>
    );
  };
 
  return (
    <View style={styles.container}>
      {isLoading ?
        <Text style={styles.loading}>Carregando...</Text>
        :
        <>
          <FlatList
            data={movies}
            keyExtractor={item => item._id}
            renderItem={renderFilmCard}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
          />
          {renderPagination()}
        </>
      }
    </View>
  );
} 
