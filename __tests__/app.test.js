import "react-native";
import React from "react";
import App from "../App";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react-native";

it("renders correctly", () => {
  renderer.create(<App />);
});

it("have right text", () => {
  const { getByText } = render(<App />);
  const element = getByText("abc");
});