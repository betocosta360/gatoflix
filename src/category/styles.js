import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dadada'
  },
  ContainerRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 15,
    

  },
  heading: {
    fontSize: 20,
    color: '#120420',
    marginRight: '10%',
    fontFamily: 'Inter_600SemiBold',
  },
  allMoviesButton: {
    backgroundColor: '#ffa814',
    padding: 10,
    borderRadius: 5,
    fontFamily: 'Inter_600SemiBold',
    color: '#fff',
    
  },
  categoriesContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    
  },
  card: {
    margin: 20,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#E6E6E6',
    borderRadius: 10,
    shadowColor: "#372645",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Inter_500Medium',
    color: '#120420', // preto
  },
 
  logo: {
    width: 350,
    height: 250,
    resizeMode: 'cover',
  },
  containerLogo: {
    alignItems: 'center',
    marginBottom: 10,
    
  },
});

export default styles;
