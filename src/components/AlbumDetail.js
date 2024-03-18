//單張專輯卡的細節
import { StyleSheet, View, Text, Image, Button, Linking } from "react-native";

const AlbumDetail = ( {album} ) => {
    return (
        <View style={styles.cardContainerStyle}>
            {/*專輯簡介*/}
            <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
                <Image 
                    style={styles.thumbnailStyle}
                    source={{uri: album.thumbnail_image}}
                />
                <View style={styles.headerContentStyle}>
                    <Text style={styles.albumTitleStyle}>{album.title}</Text>
                    <Text style={styles.albumArtistStyle}>{album.artist}</Text>
                </View>
            </View>
            {/*專輯圖片*/}
            <View style={styles.cardSectionStyle}>
                <Image 
                    style={styles.imageStyle}
                    source={{uri: album.image}}
                />
            </View>
            {/*專輯按鈕。樣式為預設，無法自行調整*/}
            <Button 
              onPress={() => Linking.openURL(album.url)}
              title="More Detail"
              color="#E53711"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainerStyle: {
      borderWidth: 1,
      borderRadius: 2,
      borderColor: "#ddd",
      shadowColor: "#000",
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 1,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10,
    },
    thumbnailContainerStyle: {
      flexDirection: "row",
      justifyContent: "flex-start",
    },
    thumbnailStyle: {
      height: 50,
      width: 50,
    },
    headerContentStyle: {
      flexDirection: "column",
      justifyContent: "space-around",
      paddingLeft: 10,
    },
    cardSectionStyle: {
      padding: 5,
      backgroundColor: "#fff",
      borderColor: "#ddd",
      borderBottomWidth: 1,
    },
    imageStyle: {
      height: 300,
      width: null,
    },
    albumTitleStyle: {
      fontSize: 16, 
      fontWeight: "bold",
    },
    albumArtistStyle: {
      color: "#595959",
    },
  });

  export default AlbumDetail;