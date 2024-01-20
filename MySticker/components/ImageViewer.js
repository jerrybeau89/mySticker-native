import { StyleSheet, Image } from "react-native";

export default function ImageViewer({ placeholderImageSource,selectedImage }) {

  // Assigns either a selected image or placeholder image to a variable used in the Image component
  const imageSource = selectedImage ? { uri: selectedImage } : placeholderImageSource;

  return <Image source={imageSource} style={styles.image} />;
}

// Image styles
const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
