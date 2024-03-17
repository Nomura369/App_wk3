//多張專輯卡的統整
import { SectionList } from 'react-native';
import AlbumDetail from "./AlbumDetail";
import sections from "../json/album_section.json"

const AlbumList = () => {
  const renderItem = ({ item }) => <AlbumDetail album={item} />; // 將資料再往下傳
  return (
    <SectionList 
        sections={sections} // json裡的陣列資料
        // title 傳給 renderSectionHeade，data 陣列內的資料逐筆變成 item 傳給 renderItem
        renderItem={renderItem} //將 item 資料透過 album 屬性傳給 AlbumDetail.js
        keyExtractor={item => item.title} //幫每個 item 資料設定 key，因為只有一個列表所以不用 index 參數...?
      />
  );
}

export default AlbumList;