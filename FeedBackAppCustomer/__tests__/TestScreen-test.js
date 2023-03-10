import "react-native";
import React from "react";

import renderer from "react-test-renderer";
import TestScreen from "../src/screens/TestScreen";

it("Login snapShot", () => {
    const snap = renderer.create(<TestScreen/>).toJSON();

    const getTextInput = (snap, id) => {
        let result = undefined;

        for( node of snap.children){
            if(node.type == id ){
                result = true;
            }
        }

        return result;
    }

    expect(getTextInput(snap, "TextInput")).toBe(true)
})