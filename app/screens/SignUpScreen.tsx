import { AntDesign } from "@expo/vector-icons";
import { Flex, HStack, IconButton, Spacer, Text, VStack } from "@react-native-material/core";
import { useEffect, useState } from "react";
import { BackHandler, StyleSheet, View } from "react-native";
import * as Progress from "react-native-progress";
import axiosClient from "../AxiosClient/axiosClient";
import CustomButton from "../Components/CustomButton";
import { SignUpContext } from "../contexts/SignUpContext";
import { Step } from "../enums/enums";
import { useAuthContext } from "../hooks/useAuth";
import { SignUpValues } from "../types/types";
import SetBandId from "./signup/SetBandId";
import SetEmail from "./signup/SetEmail";
import SetGender from "./signup/SetGender";
import SetPetDetails from "./signup/SetPetDetails";
import UserInfo from "./signup/SetUserInfo";
import SetUserType from "./signup/SetUserType";

interface SignUpScreenProps {
  navigation: any;
}

const STATIC_STEP_COUNT = 6;

const titles = [
  "Set your info",
  "Set login info",
  "Which one are you?",
  "Set your Band ID",
  "Set your type",
  "Set your Pet",
];

const SignUpScreen = (props: SignUpScreenProps) => {
  const { navigation } = props;

  const {user, setUser} = useAuthContext()
  
  const [signUpValues, setSignUpValues] = useState<SignUpValues>({
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "1999-10-01",
    email: "",
    password: "",
    phoneNumber: "0771234567",
    userType: "",
    bandId: "",
  });
  const [continueState, setContinueState] = useState(false);
  const [currentStep, setCurrentStep] = useState<Step>(Step.NAME);
  const [stepCount, setStepCount] = useState(Step.USER_TYPE);

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBack);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBack);
    };
  }, [currentStep]);

  const getProgress = () => {
    return currentStep / stepCount;
  };

  const handleContinue = () => {
    if (currentStep < stepCount) {
      setCurrentStep((prev) => prev + 1);
    }

    setContinueState(false);

    if (currentStep === stepCount) {
      axiosClient
        .post("/auth/register", signUpValues)
        .then((data) => {
          if('token' in data) setUser({
            email: signUpValues.email,
            authToken: data.token
          })
        })
        .catch((e) => console.log(e));

      navigation.navigate("EmailConfirmation", {email: signUpValues.email});
    }
  };

  const handleContinueState = (isValid: boolean) => {
    setContinueState(isValid);
  };

  const handleBack = () => {
    if (currentStep > Step.NAME) {
      setCurrentStep((prev) => prev - 1);
      setStepCount(STATIC_STEP_COUNT);
    } else if (currentStep === Step.NAME) props.navigation.navigate("Home");
    return true;
  };

  return (
    <VStack grow={1} spacing={20} style={{ backgroundColor: "#f8f9fd", paddingHorizontal: 20 }}>
      <HStack items="center" justify="between" mt={40}>
        <IconButton
          onPress={handleBack}
          icon={(props) => <AntDesign name="left" size={24} color="black" />}
        />

        <Flex items="center">
          <Progress.Bar
            progress={getProgress()}
            width={130}
            height={10}
            color="#7165e3"
            borderWidth={0}
            unfilledColor="#e4dfff"
          />
        </Flex>
        <View>
          <Text>Next</Text>
        </View>
      </HStack>
      <Spacer />
      <VStack items="center">
        <Text
          style={{
            textTransform: "uppercase",
            color: "#7165e3",
            fontWeight: "600",
          }}
        >
          Step {currentStep} / {stepCount}
        </Text>
        <Text variant="h5" style={{ fontWeight: "600" }}>
          {titles[currentStep - 1]}
        </Text>
      </VStack>

      <VStack grow={2} spacing={12}>
        <SignUpContext.Provider value={{ handleContinueState, setSignUpValues }}>
          {currentStep === Step.NAME && <UserInfo />}
          {currentStep === Step.EMAIL_AND_PASSWORD && <SetEmail />}
          {currentStep === Step.GENDER && <SetGender />}
          {currentStep === Step.BAND_ID && <SetBandId />}
          {currentStep === Step.USER_TYPE && <SetUserType setStepCount={setStepCount} />}
          {currentStep === Step.PET_DETAILS && <SetPetDetails />}
        </SignUpContext.Provider>

        <Flex items="center" mt={15}>
          <CustomButton
            onPress={handleContinue}
            title={currentStep === stepCount ? "Finish" : "Continue"}
            disabled={!continueState}
          ></CustomButton>
        </Flex>
      </VStack>
    </VStack>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default SignUpScreen;
