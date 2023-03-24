import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

interface DropdownProps {
  placeholder: string;
  dropdownItems: {label: string, value: string}[]
}

const Dropdown = (props: DropdownProps) => {
  const { placeholder, dropdownItems } = props;

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(dropdownItems);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder={placeholder}
      style={{
        paddingVertical: 20,
        borderWidth: 0,
        elevation: 1,
      }}
      containerStyle={{
        borderWidth: 0,
      }}
      textStyle={{
        fontWeight: "600",
        color: "#787ea7",
      }}
      dropDownContainerStyle={{
        borderWidth: 0,
        zIndex: 999999,
        elevation: 3,
      }}
    />
  );
};

export default Dropdown;
