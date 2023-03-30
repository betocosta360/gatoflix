import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '12%',
    backgroundColor: '#120420'
    
  },
  card: {
    margin: 20,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#d8d8d9',
    borderRadius: 10,
    shadowColor: "#FFF",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  cardImageContainer: {
    width: "30%",
    aspectRatio: 1,
    marginRight: 10,
  },
  cardImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    resizeMode: 'contain'
  },
  cardContent: {
    width: "70%",
    marginTop: 20
  },
  cardTitle: {
    fontSize: 18,
    fontFamily: 'Inter_600SemiBold',
    color: '#3D3D3D', // preto
  },
  searchInput: {
    backgroundColor: "#FFF",
    padding: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#8c8c8c",
  },
 
  header:{
    
    backgroundColor: '#ffa814', 
    marginLeft: 20,
    marginBottom: 15,
    width: '28%',
    height: 40,
    borderRadius: 8,
    padding: 5
  },
  headerTitle: {
    padding: 3,
    fontSize: 15,
    color:'white',
    textAlign: 'center',
    fontFamily:'Inter_500Medium',
    justifyContent: 'center'
    
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
    backgroundColor: '#ffa814',
    marginHorizontal: 5,
    borderRadius: 8,
  },
  paginationButtonText: {
    
    fontSize: 12,
    color: 'white',
    fontFamily:'Inter_600SemiBold'
  },
  paginationButtonActive: {
    backgroundColor: '#fd2e44',
  },
  
});

export default styles