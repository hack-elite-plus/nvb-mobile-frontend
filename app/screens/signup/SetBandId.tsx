import { VStack } from "@react-native-material/core";
import { useFormik } from "formik";
import { useEffect } from "react";
import { View } from "react-native";
import * as Yup from "yup";
import axiosClient from "../../AxiosClient/axiosClient";
import CustomTextInput from "../../Components/CustomTextInput";
import { useSignupContext } from "../../hooks/useSignupContext";

const scheme = Yup.object({
  bandId: Yup.string().length(15).required(),
});

const SetBandId = () => {
  const {handleContinueState, setSignUpValues} = useSignupContext();

  const { values, handleChange, isValid } = useFormik({
    validateOnMount: true,
    initialValues: { bandId: "" },
    validationSchema: scheme,
    onSubmit: () => {},
  });

  useEffect(() => {
    handleContinueState(isValid);

    if(isValid) { 
      axiosClient.post(`/auth/checkBandId?bandId=${values.bandId}`)
      .then(({data}) => {
        if (data) {
          handleContinueState(true);
        } else handleContinueState(false);
      })
      .catch(c => console.log(c)) 
    }

  }, [isValid]);

  useEffect(() => {
    const {bandId} = values;
    if(isValid) setSignUpValues(prev => ({...prev, bandId})) 
  }, [values])

  return (
    <VStack spacing={8}>
      <View>
        <CustomTextInput
          value={values.bandId}
          onChangeText={handleChange("bandId")}
          placeholder="Nimbus Venture Band ID"
        />
      </View>
    </VStack>
  );
};

export default SetBandId;
