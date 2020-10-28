import React from "react";
import renderer from "react-test-renderer";
import About from "../src/components/profile/About";
import PrivacyPolicy from "../src/components/profile/PrivacyPolicy";
import TermsUse from "../src/components/profile/TermsUse";

it("About component renders correctly", () => {
  const tree = renderer.create(<About />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("PrivacyPolicy component renders correctly", () => {
  const tree = renderer.create(<PrivacyPolicy />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("TermsUse component renders correctly", () => {
  const tree = renderer.create(<TermsUse />).toJSON();
  expect(tree).toMatchSnapshot();
});
