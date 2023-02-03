import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FourthScreen = ({ navigation }) => {
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
      <Text>FourthScreen</Text>
    </View>
  );
};

export default FourthScreen;

const styles = StyleSheet.create({});
