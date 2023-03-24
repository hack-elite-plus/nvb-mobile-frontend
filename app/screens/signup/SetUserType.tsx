import { Stack, VStack, Wrap } from "@react-native-material/core";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import ImageButton from "../../Components/ImageButton";
import { Step, UserType } from "../../enums/enums";
import { useSignupContext } from "../../hooks/useSignupContext";

interface SetUserTypeProps {
  setStepCount: React.Dispatch<React.SetStateAction<Step>>;
}

const setUserType = (props: SetUserTypeProps) => {
  const { setStepCount } = props;

  const { handleContinueState, setSignUpValues } = useSignupContext();
  const [currentUserType, setCurrentUserType] = useState(UserType.NONE);

  const handleUserType = (type: UserType) => {
    setCurrentUserType(type);
    if (type === UserType.PET_OWNER) {
      setStepCount(Step.PET_DETAILS);
    } else {
      setStepCount(Step.USER_TYPE);
    }
    setSignUpValues(prev => ({...prev, userType: type}))
  };

  useEffect(() => {
    if (currentUserType !== UserType.NONE) handleContinueState(true);
    else handleContinueState(false);
  }, [currentUserType]);

  return (
    <VStack spacing={20}>
      <Wrap spacing={8} justify="center">
        <Stack grow={1}>
          <ImageButton
            onPress={() => handleUserType(UserType.PET_OWNER)}
            imageSource={require("../../assets/male.png")}
            title="Pet Owner"
            selected={currentUserType === UserType.PET_OWNER}
          />
        </Stack>

        <Stack grow={1}>
          <ImageButton
            onPress={() => handleUserType(UserType.BICKER)}
            imageSource={require("../../assets/female.png")}
            title="Bicker"
            selected={currentUserType === UserType.BICKER}
          />
        </Stack>

        <Stack>
          <ImageButton
            onPress={() => handleUserType(UserType.JOGGER)}
            imageSource={require("../../assets/female.png")}
            title="Jogger"
            selected={currentUserType === UserType.JOGGER}
          />
        </Stack>
      </Wrap>
    </VStack>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default setUserType;
