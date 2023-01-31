import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FirstScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  React.useEffect(() => {
    navigation.setOptions({
      tabBarStyle: {
        paddingTop: insets.top,
      },
    });
  }, [navigation]);
  return (
    <View>
      <Text>FirstScreen</Text>
    </View>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({});
