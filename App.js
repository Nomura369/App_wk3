import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";
//import albumData from "./src/json/albums.json";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Header />
      <AlbumList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#FFEED8",
  },
});

export default App;

