import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#120420'
  },
  loading: {
    fontSize: 18,
    fontFamily: 'Inter_600SemiBold',
    color: "#ffa814",
  },
  listContainer: {
    paddingBottom: 10,
  },
  card: {
    marginLeft: 20,
    marginTop: "15%",
    backgroundColor: '#d8d8d9',
    borderRadius: 10,
    margin: 10,
    padding: 20,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardImageContainer: {
    width: "100%",
    aspectRatio: 16 / 9,
    marginBottom: 10,
  },
  cardImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    borderRadius: 10
    
  },
  cardContent: {
    marginBottom: 10,
  },
  cardContainer:{
    resizeMode:'contain'
  },
  cardTitle: {
    fontSize: 18,
    fontFamily: 'Inter_500Medium',
    textAlign: "center",
    color: '#120420', // preto
  },
  button: {
    backgroundColor: '#ffa814',
    padding: 10,
    borderRadius: 8,
    width: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 15,
    color: "#FFFFFF",
    fontFamily: 'Inter_700Bold'
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 12
  },
  paginationButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fd2e44',
    marginHorizontal: 5,
    borderRadius: 8,
  },
  paginationButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
    fontFamily:'Inter_500Medium'
  },
  paginationButtonActive: {
    backgroundColor: '#ffa814',
  },
});

export default styles;
