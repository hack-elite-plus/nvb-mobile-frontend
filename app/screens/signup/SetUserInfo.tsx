import { VStack } from "@react-native-material/core";
import { useFormik } from "formik";
import { useEffect } from "react";
import { View } from "react-native";
import * as Yup from "yup";
import CustomTextInput from "../../Components/CustomTextInput";
import { useSignupContext } from "../../hooks/useSignupContext";

const scheme = Yup.object({
  firstName: Yup.string().min(2).max(255).required(),
  lastName: Yup.string().min(2).max(255).required(),
});

const UserInfo = () => {
  const { handleContinueState, setSignUpValues } = useSignupContext();

  const { values, handleChange, isValid } = useFormik({
    validateOnMount: true,
    initialValues: { firstName: "", lastName: "" },
    validationSchema: scheme,
    onSubmit: () => {},
  });

  useEffect(() => {
    handleContinueState(isValid);
  }, [isValid]);

  

  useEffect(() => {
    if(isValid) setSignUpValues(prev => ({...prev, ...values}))
  }, [values, isValid])

  return (
    <VStack spacing={8}>
      <View>
        <CustomTextInput
          value={values.firstName}
          onChangeText={handleChange("firstName")}
          placeholder="First Name"
        />
      </View>
      <View>
        <CustomTextInput
          value={values.lastName}
          onChangeText={handleChange("lastName")}
          placeholder="Last Name"
        />
      </View>
    </VStack>
  );
};

export default UserInfo;
