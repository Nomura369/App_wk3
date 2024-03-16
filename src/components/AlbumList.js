//多張專輯卡的統整
import { FlatList } from 'react-native';
import AlbumDetail from "./AlbumDetail";

const AlbumList = ({ list }) => { // list是從App.js傳過來json陣列
  const renderItem = ({ item }) => <AlbumDetail album={item} />; // 將資料再往下傳
  return (
    <FlatList 
        data={list} // json裡的陣列資料
        renderItem={renderItem} //將 item 資料透過 album 屬性傳給 AlbumDetail.js
        keyExtractor={item => item.title} //幫每個 item 資料設定 key
      />
  );
}

export default AlbumList;