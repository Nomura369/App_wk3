//多張專輯卡的統整
import { FlatList } from 'react-native';
import AlbumDetail from "./AlbumDetail";

const AlbumList = ( {list} ) => {
  const renderItem = ( {item} ) => <AlbumDetail album={item} />;
  return (
    <FlatList
      data={list} // 由 props 傳來的 json 陣列
      renderItem={renderItem} // 將陣列中的資料逐筆往下傳
      keyExtractor={item => item.title} // 替陣列中每筆資料分配專屬的 key
    />    
  );
};

export default AlbumList;