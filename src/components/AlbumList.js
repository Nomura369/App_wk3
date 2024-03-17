//多張專輯卡的統整
import { Text, FlatList, SectionList, StyleSheet } from 'react-native';
import AlbumDetail from "./AlbumDetail";
import BestSellerDetail from "./BestSellerDetail";
import sections from "../json/album_section.json"

const AlbumList = () => {
  const renderSectionHeader = ({ section }) => (
    <>
      <Text style={styles.sectionHeader}>{section.title}</Text>
      {section.horizontal ? (
        <FlatList
          horizontal={true}
          data={section.data}
          renderItem={({ item }) => <BestSellerDetail album={item} />}
          showsHorizontalScrollIndicator={false}
          keyExtractor={ item => item.title }
        />
      ) : null}
    </>
  );
  const renderItem = ({ item, section }) => {
    if (section.horizontal) {
      return null;
    }
    return <AlbumDetail album={item} />
  };

  return (
    <SectionList 
      sections={sections} // json資料
      contentContainerStyle={{ paddingHorizontal: 10 }} //元件樣式
      stickySectionHeadersEnabled={false}
      showsHorizontalScrollIndicator={false}
      renderSectionHeader={renderSectionHeader}
      renderItem={renderItem}
      keyExtractor={ item => item.title }
    />
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    fontWeight: "600",
    fontSize: 18,
    paddingTop: 20,
    paddingBottom: 5,
    paddingLeft: 10,
    textTransform: "uppercase",
  },
})

export default AlbumList;