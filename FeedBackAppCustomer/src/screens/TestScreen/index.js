import React from "react";
import { TextInput, View, Text } from "react-native"
import TestScreen2 from "../TestScreen2";

const TestScreen = () => {
    return (
        <View style={{
            height: 50,
            width: 50,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "red"
        }}>
            <TextInput testID="MyTextInput" />
            <Text>Bhautik</Text>
            <TestScreen2  />
        </View>
    )
}

export default TestScreen;