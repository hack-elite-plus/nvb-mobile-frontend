import { HStack, Stack, Text, VStack } from "@react-native-material/core";
import { useEffect, useState } from "react";
import ImageButton from "../../Components/ImageButton";
import { useSignupContext } from "../../hooks/useSignupContext";

interface SetGenderProps {}

const enum Selected {
  MALE="MALE",
  FEMALE="FEMALE",
  NONE="NONE",
}

const SetGender = (props: SetGenderProps) => {
  const {handleContinueState, setSignUpValues} = useSignupContext();
  const [selected, setSelected] = useState(Selected.NONE);
  const handlePress = (type: Selected) => setSelected(type);

  useEffect(() => {
    if (selected !== Selected.NONE) handleContinueState(true);
    else handleContinueState(false);

    setSignUpValues(prev => ({...prev, gender: selected}))
  }, [selected]);

  return (
    <VStack spacing={20}>
      <HStack spacing={8}>
        <Stack grow={1}>
          <ImageButton
            onPress={() => handlePress(Selected.MALE)}
            imageSource={require("../../assets/male.png")}
            title="male"
            selected={selected === Selected.MALE}
          />
        </Stack>

        <Stack grow={1}>
          <ImageButton
            onPress={() => handlePress(Selected.FEMALE)}
            imageSource={require("../../assets/female.png")}
            title="female"
            selected={selected === Selected.FEMALE}
          />
        </Stack>
      </HStack>
      <VStack items="center">
        <Text
          onPress={() => handlePress(Selected.NONE)}
          variant="body1"
          style={{ fontWeight: "600", color: "#7165e3" }}
        >
          prefer not to choose
        </Text>
      </VStack>
    </VStack>
  );
};

export default SetGender;
