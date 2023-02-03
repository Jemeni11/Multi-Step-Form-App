import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyleSheet, View } from "react-native";
import React from "react";
import SVGImageBackground from "../components/ScreenBackground";
import {
  PageTitle,
  PageSubTitle,
  FormFieldTitle,
  FormTextInput,
} from "../components/FormComponents";

const FirstScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  React.useEffect(() => {
    navigation.setOptions({
      tabBarStyle: {
        height: insets.top,
      },
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <SVGImageBackground />
      <View style={styles.formContainer}>
        <PageTitle customStyles={{ paddingVertical: 12 }}>
          Personal info
        </PageTitle>
        <PageSubTitle customStyles={{ paddingTop: 8, paddingBottom: 24 }}>
          Please provide your name, email address, and phone number.
        </PageSubTitle>
        <View style={styles.formRow}>
          <FormFieldTitle>Name</FormFieldTitle>
          <FormTextInput placeholder="e.g. Stephen King" autoComplete="name" />
        </View>
        <View style={styles.formRow}>
          <FormFieldTitle>Email Address</FormFieldTitle>
          <FormTextInput
            placeholder="e.g. stephenking@lorem.com"
            keyboard="email-address"
            autoComplete="email"
          />
        </View>
        <View style={styles.formRow}>
          <FormFieldTitle>Phone Number</FormFieldTitle>
          <FormTextInput
            placeholder="e.g. +1 234 567 890"
            keyboard="phone-pad"
            autoComplete="tel"
          />
        </View>
      </View>
    </View>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ECF3FD",
    flex: 1,
  },
  formContainer: {
    zIndex: 1,
    top: 172 / 2,
    position: "absolute",
    marginHorizontal: "5%",
    paddingTop: 12,
    paddingHorizontal: 20,
    paddingBottom: 24,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    width: "90%",
  },
  formRow: {
    marginVertical: 8,
  },
});
