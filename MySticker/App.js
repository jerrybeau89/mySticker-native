import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ImageViewer from "./components/ImageViewer";
import Button from "./components/Button";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import CircleButton from "./components/CircleButton";
import IconButton from "./components/IconButtons";

const PlaceholderImage = require("./assets/background-image.jpeg");

export default function App() {
  console.log("App executed");

  const [selectedImage, setSelectedImage] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const onReset = () => {
    setShowAppOptions(false)
  };
  const onAddSticker = () => {}
  const onSaveImageAsync = async () => {}

  // Asynchronous function used to launch the device's image library allowing the app to present the user with the option to select an image and edit the selected image on IOS and Android platforms.
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert("You did not select any image.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Text style={styles.text}>ReHomeIt World!</Text>
        <ImageViewer
          placeholderImageSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
      </View>
      {/* Ternary operator to toggle sticker button option visibility  */}
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
          </View>
      ) :(
      <View style={styles.footerContainer}>
        <Button
          theme="primary"
          label="Choose a photo"
          onPress={pickImageAsync}
        />
        <Button label="Use this photo" onPress={() => setShowAppOptions(true)}/>
      </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

// Primary app styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
  optionsContainer: {
    position: "absolute",
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: "row",
  },
});
