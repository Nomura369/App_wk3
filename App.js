import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";
import albumData from "./src/json/albums.json";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Header title={albumData.albumTitle} />
      <AlbumList list={albumData.albumList} />
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

