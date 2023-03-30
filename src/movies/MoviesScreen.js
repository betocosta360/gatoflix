import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";

const filmesURL = "https://appvideo.herokuapp.com/api/filmes";
const CARDS_PER_PAGE = 10;

function FilmCard({ title, poster, video, navigation }) {
  return (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Watch', { videoUrl: video })}>
      <View style={styles.cardImageContainer}>
        <Image source={{ uri: poster }} style={styles.cardImage} />
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const MoviesScreen = () => {
  const navigation = useNavigation();

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  //const [currentPage, setCurrentPage] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(filmesURL)
      .then((response) => response.json())
      .then((json) => setData(json.filmes))
      .catch((error) => alert(error))
      .finally(() => setLoading(false));
  }, []);

  const filteredData = data.filter((item) => item.title.includes(searchTerm));
  const totalPages = Math.ceil(filteredData.length / CARDS_PER_PAGE);

  const paginatedData = filteredData.slice(
    (page - 1) * CARDS_PER_PAGE,
    page * CARDS_PER_PAGE
  );

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };



  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={() => navigation.goBack()}>
        <Text style={styles.headerTitle}>VOLTAR</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.searchInput}
        placeholder="Digite o nome do filme"
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
      />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <ScrollView>
          {paginatedData.map((item) => (
            <FilmCard
              key={item.title}
              id={item.id}
              title={item.title}
              poster={item.poster}
              video={item.video}
              onPress={() => alert(`Clicou no filme ${item.title}`)}
              navigation={navigation}
            />
          ))}
        </ScrollView>
      )}
      {totalPages > 1 && (
        <View style={styles.paginationContainer}>
          {page > 1 && (
            <TouchableOpacity
              style={styles.paginationButton}
              onPress={handlePrevPage}
            >
              <Text style={styles.paginationButtonText}>Anterior</Text>
            </TouchableOpacity>
          )}
          {[...Array(totalPages)].map((_, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.paginationButton, page === index + 1 && styles.paginationButtonActive]}
              onPress={() => setPage(index + 1)}
            >
              <Text style={styles.paginationButtonText}>{index + 1}</Text>
            </TouchableOpacity>
          ))}
          {page < totalPages && (
            <TouchableOpacity
              style={styles.paginationButton}
              onPress={handleNextPage}
            >
              <Text style={styles.paginationButtonText}>Próximo</Text>
            </TouchableOpacity>
          )}
        </View>

      )}
    </SafeAreaView>
  );
};

export default MoviesScreen;
