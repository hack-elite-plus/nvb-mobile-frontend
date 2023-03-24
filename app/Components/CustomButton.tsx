import { styled } from "nativewind";
import { StyleSheet, Text, TouchableOpacity, ButtonProps } from "react-native";

interface CustomButtonProps extends ButtonProps {
  title: string;
  onPress: () => void;
}

const StyledTouchableOpacity = styled(TouchableOpacity);

const CustomButton = (props: CustomButtonProps) => {
  const { onPress, title, ...otherProps } = props;

  return (
    <StyledTouchableOpacity
      onPress={onPress}
      style={[styles.button, styles.buttonMedium, props.disabled ? styles.buttonDisabled : {}]}
      {...otherProps}
    >
      <Text style={styles.text}>{title}</Text>
    </StyledTouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    paddingHorizontal: 12,
    backgroundColor: "#7165e3",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",

    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  text: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  buttonMedium: {
    width: 200,
  },
  buttonDisabled: {
    opacity: 0.5,
  }
});

export default CustomButton;
