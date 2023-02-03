import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";
import React from "react";

const SecondScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  React.useEffect(() => {
    navigation.setOptions({
      tabBarStyle: {
        height: insets.top,
      },
    });
  }, [navigation]);

  return (
    <View>
      <Text>SecondScreen</Text>
    </View>
  );
};

export default SecondScreen;

const styles = StyleSheet.create({});
