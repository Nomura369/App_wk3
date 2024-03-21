import { ScrollView, Linking } from 'react-native';
import { Button, Card, Text, PricingCard, Tile } from "react-native-elements";

const DetailScreen = ({ route }) => {
  const { title, artist, price, url, image, description } = route.params;
  const pressed = () => Linking.openURL(url);
  return (
    <ScrollView>
      <Tile
        imageSrc={{ uri: image }}
        featured
        title={title.toUpperCase()}
        caption={artist.toUpperCase()}
      />
      <PricingCard
        color="#E53711"
        title="Discount Now!"
        price={`Price: $${price}`}
        info={["1 User", "Basic Support", "All Core Features"]}
        button={{ title: "BUY NOW"}}
        onButtonPress={pressed}
      />
      <Card>
        <Text>Artist: {artist}</Text>
        <Text style={{ marginBottom: 10 }}>Title: {title}</Text>
        <Text style={{ fontWeight: "bold" }}>Description</Text>
        <Text style={{ marginBottom: 10 }}>{description}</Text>
        <Button
          raised
          icon={{ name: "add-shopping-cart" }}
          backgroundColor="#E53711"
          title="ADD TO CART"
          onPress={pressed}
        />
      </Card>
    </ScrollView>
  );
}

export default DetailScreen;