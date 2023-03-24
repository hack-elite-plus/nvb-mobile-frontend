import { Box, HStack } from "@react-native-material/core";
import { StyleSheet, View } from "react-native";

interface MenuButtonProps {}

const MenuButton = (props: MenuButtonProps) => {
  return (
    <View style={styles.container}>
      <HStack spacing={3}>
        <Box style={styles.menuItem}></Box>
        <Box style={styles.menuItem}></Box>
        <Box style={styles.menuItem}></Box>
      </HStack>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  menuItem: {
    width: 8,
    height: 8,
    backgroundColor: "#f1f6fa",
    borderRadius: 100,
  },
});

export default MenuButton;
