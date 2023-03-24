import { VStack } from "@react-native-material/core";
import { useFormik } from "formik";
import { useEffect } from "react";
import { View } from "react-native";
import * as Yup from "yup";
import axiosClient from "../../AxiosClient/axiosClient";
import CustomTextInput from "../../Components/CustomTextInput";
import { useSignupContext } from "../../hooks/useSignupContext";

const scheme = Yup.object({
  email: Yup.string().email("Enter a valid email").required("Email is required"),
  password: Yup.string().min(8).max(255).required("Password is required"),
  confirmPassword: Yup.string().test("passwords-match", "Passwords must match", function (value) {
    return this.parent.password === value;
  }),
});

const SetEmail = () => {
  const { handleContinueState, setSignUpValues } = useSignupContext();

  const { values, handleChange, isValid } = useFormik({
    validateOnMount: true,
    initialValues: { email: "", password: "", confirmPassword: "" },
    validationSchema: scheme,
    onSubmit: () => {},
  });

  useEffect(() => {
    handleContinueState(false);

    if (isValid) {
      axiosClient
        .post(`/auth/checkEmail?email=${values.email}`) 
        .then(({ data }) => {
          if (data) {
            handleContinueState(true);
          } else handleContinueState(false);
        })
        .catch((_) => handleContinueState(false));
    }
  }, [isValid]);

  useEffect(() => {
    const { email, password } = values;
    if (isValid) setSignUpValues((prev) => ({ ...prev, email, password }));
  }, [values, isValid]);

  return (
    <VStack spacing={8}>
      <View>
        <CustomTextInput
          placeholder="Email"
          value={values.email}
          textContentType="emailAddress"
          onChangeText={handleChange("email")}
        />
      </View>
      <View>
        <CustomTextInput
          placeholder="Password"
          value={values.password}
          autoCorrect={false}
          secureTextEntry={true}
          autoCapitalize="none"
          textContentType="password"
          onChangeText={handleChange("password")}
        />
      </View>
      <View>
        <CustomTextInput
          placeholder="Confirm Password"
          value={values.confirmPassword}
          autoCorrect={false}
          secureTextEntry={true}
          autoCapitalize="none"
          textContentType="password"
          onChangeText={handleChange("confirmPassword")}
        />
      </View>
    </VStack>
  );
};

export default SetEmail;
