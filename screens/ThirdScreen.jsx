import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ThirdScreen = ({ navigation }) => {
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
      <Text>ThirdScreen</Text>
    </View>
  );
};

export default ThirdScreen;

const styles = StyleSheet.create({});
