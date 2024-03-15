import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerStyle}>
        <Text style={styles.textStyle}>Albums</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#E53711",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    //陰影設定
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2, // Android only
  },
  textStyle: {
    color: "#FFF",
    fontSize: 20,
  },
});

export default Header;