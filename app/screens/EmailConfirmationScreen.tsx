import { Flex, Spacer, Text, VStack } from "@react-native-material/core";
import { Image } from "react-native";
import CustomButton from "../Components/CustomButton";

interface EmailConfirmationProps {
  route: any;
}

const EmailConfirmationScreen = (props: EmailConfirmationProps) => {
  return (
    <VStack
      grow={1}
      spacing={20}
      items="center"     
      justify="center"
      style={{ backgroundColor: "#f8f9fd", paddingHorizontal: 20 }}
    >
      <Spacer></Spacer>
      <VStack items="center" spacing={8}>
        <Image source={require("../assets/email.png")} style={{ width: 120, height: 120 }}></Image>
        <Flex items="center">
          <Text variant="h5">Confirm your email address</Text>
          <Text>We sent a verification email to:</Text>
          <Text variant="h6" style={{ marginVertical: 15 }}>
            {props.route.params.email}
          </Text>
        </Flex>
        <Text>Check your email and click on the confirmation link to continue.</Text>
      </VStack>

      <Spacer></Spacer>
      <Flex items="center" mb={50}>
        <CustomButton onPress={() => {}} title={"Resend Email"}></CustomButton>
      </Flex>
    </VStack>
  );
};

export default EmailConfirmationScreen;
