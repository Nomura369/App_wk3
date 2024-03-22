import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from "react-native";

import AlbumScreen from './src/screens/AlbumScreen';
import DetailScreen from './src/screens/DetailScreen';

import albumData from "./src/json/albums.json";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={AlbumScreen} 
          options={{
            title: albumData.albumTitle,
            headerTitleStyle: {
              fontWeight: "400",
              fontSize: 20,
              color: "#fff"
            },
            headerStyle: {
              backgroundColor: "#E53711"
            }
          }}
          />
        <Stack.Screen 
          name="Detail" 
          component={DetailScreen} 
          options={ ({route}) => ({
            title: route.params.title,
            headerStyle: {
              backgroundColor: "#E53711"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "400",
              fontSize: 20
            }
          }) }
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#FFEED8",
  },
});*/

export default App;

