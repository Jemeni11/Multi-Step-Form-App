import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { globalStyles } from "../constants/styles";

export const PageTitle = ({ customStyles, children }) => {
  return <Text style={[styles.pageTitleStyle, customStyles]}>{children}</Text>;
};

export const PageSubTitle = ({ customStyles, children }) => {
  return (
    <Text style={[styles.pageSubTitleStyle, customStyles]}>{children}</Text>
  );
};

export const FormFieldTitle = ({ customStyles, children }) => {
  return (
    <Text style={[styles.formFieldTitleStyle, customStyles]}>{children}</Text>
  );
};

export const FormTextInput = ({
  customStyles,
  customContainerStyles,
  placeholder,
  keyboard = "text",
  autoComplete = "off",
}) => {
  return (
    <View style={[styles.formTextInputContainerStyle, customContainerStyles]}>
      <TextInput
        style={[styles.formTextInputStyle, customStyles]}
        placeholder={placeholder}
        placeholderTextColor={globalStyles.colors.neutral.lightGray}
        keyboardType={keyboard}
        autoComplete={autoComplete}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pageTitleStyle: {
    color: globalStyles.colors.primary.marineBlue,
    fontSize: globalStyles.fontSize.large,
    fontWeight: globalStyles.fontWeight.veryBold,
  },
  pageSubTitleStyle: {
    color: globalStyles.colors.neutral.lightGray,
    fontSize: globalStyles.fontSize.regular,
    fontWeight: globalStyles.fontWeight.regular,
  },
  formFieldTitleStyle: {
    color: globalStyles.colors.primary.marineBlue,
    fontSize: globalStyles.fontSize.regular,
    fontWeight: globalStyles.fontWeight.regular,
  },
  formTextInputContainerStyle: {
    marginVertical: 8,
    paddingVertical: 12,
    paddingHorizontal: 4,
    borderColor: globalStyles.colors.neutral.lightGray,
    borderWidth: 1,
    borderRadius: 8,
  },
  formTextInputStyle: {
    paddingLeft: 12,
  },
});
