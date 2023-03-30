import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import * as Animatable from 'react-native-animatable'

import styles from './styles';



export default function CategoriesScreen({ navigation }) {
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://appvideo.herokuapp.com/api/filmes')
      .then((response) => response.json())
      .then((data) => {
        const uniqueCategories = [
          ...new Set(data.filmes.map((filme) => filme.category)),
        ];
        const categoriesData = uniqueCategories.map((category) => ({
          title: category,
        }));
        setCategories(categoriesData);
        setLoading(false); // Altera o estado para false após os dados terem sido recuperados com sucesso
      })
      .catch((error) => {
        console.error(error);
        setLoading(false); // Altera o estado para false em caso de erro
      });
  }, []);

  const handleCategoryPress = (category) => {
    navigation.navigate('CategoryMovie', { category });
  };

  const handleAllMoviesPress = () => {
    navigation.navigate('Movie', { category: 'Todos' });
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
      <Animatable.Image animation="pulse" easing="ease-out" iterationCount="infinite" source={require('../../assets/icon.png') } style={styles.logo} />
      </View>
     
      <View  style={styles.ContainerRow}>
        <Text style={styles.heading}>Categorias</Text>
        <TouchableOpacity onPress={handleAllMoviesPress}>
          <Text style={styles.allMoviesButton}>Todos os filmes</Text>
        </TouchableOpacity>
      </View>
      {isLoading ? (
        <Text>Carregando...</Text> // Exibe uma mensagem de carregando enquanto os dados são recuperados
      ) : (
        <ScrollView
          contentContainerStyle={styles.categoriesContainer}
          showsVerticalScrollIndicator={false}
        >
          <Animatable.View animation="lightSpeedIn" style={styles.row}>
            {categories.map((category, index) => (
              <TouchableOpacity
                key={index}
                style={styles.card}
                onPress={() => handleCategoryPress(category.title)}
              >
                <Text style={styles.title}>{category.title}</Text>
              </TouchableOpacity>
            ))}
          </Animatable.View>
        </ScrollView>
      )}
    </View>
  );
}