import { Image } from "react-native";
import {
  Button,
  HStack,
  Text,
  useTheme,
  VStack,
} from "@react-native-material/core";
import CustomButton from "../Components/CustomButton";

interface WelcomeScreenProps {
  navigation: any;
}

const WelcomeScreen = (props: WelcomeScreenProps) => {
  const { navigation } = props;

  return (
    <VStack grow={1} items="center">
      <VStack grow={3}>
        <Image
          style={{ width: 150, height: 150 }}
          resizeMode="contain"
          source={require("../assets/logo.png")}
        />
      </VStack>
      <VStack grow={5} items="center">
        <Text variant="h6">Welcome to</Text>
        <Text variant="h4" style={{ fontWeight: "700" }}>
          Nimbus Venture Band
        </Text>
      </VStack>
      <VStack items="center" grow={2} spacing={15}>
        <CustomButton
          onPress={() => navigation.navigate("SignUpScreen")}
          title={"Get Started"}
        ></CustomButton>
        <HStack spacing={5}>
          <Text>Already have account?</Text>
          <Text onPress={() => navigation.navigate("SignInScreen")}>Sign In</Text>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default WelcomeScreen;
