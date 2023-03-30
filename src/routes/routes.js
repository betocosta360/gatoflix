import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MoviesScreen from "../movies/MoviesScreen";
//import WatchScreen from "../watch/WatchScreen";
import CategoryScreen from "../category/CategoryScreen";
import CategoryMovieScreen from "../categoryMovies/CategoryMovieScreen";
import Watch from "../watch/watch";



const Stack = createNativeStackNavigator()
const Routes = () =>{

    return(
        <Stack.Navigator initialRouteName="OnBoardScreen">
            <Stack.Screen name="Category" component={CategoryScreen} initialRouteName="Category"  options={{headerShown: false}}/>
            <Stack.Screen name="CategoryMovie" component={CategoryMovieScreen} initialRouteName="Category"  options={{headerShown: false}}/>
            <Stack.Screen name="Movie" component={MoviesScreen}  options={{headerShown: false}}/>
            
            <Stack.Screen name="Watch" component={Watch}  options={{headerShown: false}}/>
            
        </Stack.Navigator>
    )

}


export default Routes