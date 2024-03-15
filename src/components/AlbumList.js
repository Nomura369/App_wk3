import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import albumData from "../json/albums.json";

const AlbumList = () => {
  return (
    <ScrollView>
      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
            <Image style={styles.thumbnailStyle} source={{uri: albumData[0].thumbnail_image}} />
            <View style={styles.headerContentStyle}>
            <Text style={styles.albumTitleStyle}>{albumData[0].title}</Text>
            <Text style={styles.albumArtistStyle}>{albumData[0].artist}</Text>
            </View>
        </View>
        <View style={styles.cardSectionStyle}>
            <Image style={styles.imageStyle} source={{uri: albumData[0].image}} />
        </View>      
      </View>

      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
            <Image style={styles.thumbnailStyle} source={{uri: albumData[1].thumbnail_image}} />
            <View style={styles.headerContentStyle}>
            <Text style={styles.albumTitleStyle}>{albumData[1].title}</Text>
            <Text style={styles.albumArtistStyle}>{albumData[1].artist}</Text>
            </View>
        </View>
        <View style={styles.cardSectionStyle}>
            <Image style={styles.imageStyle} source={{uri: albumData[1].image}} />
        </View>      
      </View>

      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
            <Image style={styles.thumbnailStyle} source={{uri: albumData[2].thumbnail_image}} />
            <View style={styles.headerContentStyle}>
            <Text style={styles.albumTitleStyle}>{albumData[2].title}</Text>
            <Text style={styles.albumArtistStyle}>{albumData[2].artist}</Text>
            </View>
        </View>
        <View style={styles.cardSectionStyle}>
            <Image style={styles.imageStyle} source={{uri: albumData[2].image}} />
        </View>      
      </View>

      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
            <Image style={styles.thumbnailStyle} source={{uri: albumData[3].thumbnail_image}} />
            <View style={styles.headerContentStyle}>
            <Text style={styles.albumTitleStyle}>{albumData[3].title}</Text>
            <Text style={styles.albumArtistStyle}>{albumData[3].artist}</Text>
            </View>
        </View>
        <View style={styles.cardSectionStyle}>
            <Image style={styles.imageStyle} source={{uri: albumData[3].image}} />
        </View>      
      </View>

      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
            <Image style={styles.thumbnailStyle} source={{uri: albumData[4].thumbnail_image}} />
            <View style={styles.headerContentStyle}>
            <Text style={styles.albumTitleStyle}>{albumData[4].title}</Text>
            <Text style={styles.albumArtistStyle}>{albumData[4].artist}</Text>
            </View>
        </View>
        <View style={styles.cardSectionStyle}>
            <Image style={styles.imageStyle} source={{uri: albumData[4].image}} />
        </View>      
      </View>
    </ScrollView>
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

export default AlbumList;