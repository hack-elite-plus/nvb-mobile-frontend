import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  ImageSourcePropType,
} from "react-native";

interface ImageButtonProps {
  onPress: () => void;
  imageSource: ImageSourcePropType;
  title: string;
  selected?: boolean;
}

const ImageButton = (props: ImageButtonProps) => {
  const { onPress, imageSource, title, selected=false } = props;
console.log(selected);
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.container,
          { borderColor: selected ? "#7165e3" : "#fff" },
        ]}
      >
        <Image style={[styles.image]} resizeMode="cover" source={imageSource} />

        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minWidth: 170,
    maxWidth: 200,
    height: 200,
    borderRadius: 12,
    borderWidth: 3,
    overflow: "hidden",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 150,
  },
  text: {
    fontWeight: "600",
    fontSize: 16,
  },
});

export default ImageButton;
