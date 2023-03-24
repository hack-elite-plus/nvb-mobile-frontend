import { VStack } from "@react-native-material/core";
import { StyleSheet, View } from "react-native";
import CustomTextInput from "../../Components/CustomTextInput";
import Dropdown from "../../Components/Dropdown";

interface SetPetDetailsProps {}

const SetPetDetails = (props: SetPetDetailsProps) => {
  return (
    <VStack spacing={8}>
      <View>
        <CustomTextInput onChangeText={() => {}} placeholder="Name" />
      </View>
      <View>
        <Dropdown
          placeholder="pet type"
          dropdownItems={[
            { label: "Dog", value: "dog" },
            { label: "Cat", value: "cat" },
          ]}
        />
      </View>
      <View>
        <Dropdown
          placeholder="gender"
          dropdownItems={[
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
          ]}
        />
      </View>
      <View>
        <CustomTextInput onChangeText={() => {}} placeholder="date of birth" />
      </View>
    </VStack>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default SetPetDetails;
