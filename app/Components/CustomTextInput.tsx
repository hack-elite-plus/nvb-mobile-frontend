import { StyleSheet, TextInputProps, TextInput } from "react-native";

interface CustomTextInputProps extends TextInputProps {
  error?: boolean | undefined
}

const CustomTextInput = (props: CustomTextInputProps) => {
  return <TextInput {...props} style={[styles.textInput, (props.error ? {} : {})]} placeholderTextColor="#787ea7"/>;
};

const styles = StyleSheet.create({
  textInput: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: "#fff",
    fontWeight: "600",
    color: '#2b2e42',
    outlineStyle: "none",
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5, 
  },
});

export default CustomTextInput;
