import React, { FormEvent } from "react";
import {
  Stack,
  Text,
  Link,
  FontWeights,
  IDropdownOption,
} from "office-ui-fabric-react";

import { DropDownWrapper } from "./components/DropDown/DropDownWrapper";

const boldStyle = { root: { fontWeight: FontWeights.semibold } };

export const App: React.FunctionComponent = () => {
  const handleChange = (
    event: FormEvent<HTMLDivElement>,
    item?: IDropdownOption | undefined,
  ): void => {
    console.log("current target", item);
  };

  const options = [
    { key: "A", text: "Option a", title: "I am option a." },
    { key: "B", text: "Option b" },
    { key: "C", text: "Option c", disabled: true },
    { key: "D", text: "Option d" },
    { key: "E", text: "Option e" },
  ];

  return (
    <Stack
      horizontalAlign="center"
      verticalAlign="center"
      verticalFill
      styles={{
        root: {
          width: "960px",
          margin: "0 auto",
          textAlign: "center",
          color: "#605e5c",
        },
      }}
      gap={15}
    >
      <img
        src="https://raw.githubusercontent.com/Microsoft/just/master/packages/just-stack-uifabric/template/src/components/fabric.png"
        alt="logo"
      />
      <Text variant="xxLarge" styles={boldStyle}>
        Welcome to Your UI Fabric App
      </Text>
      <DropDownWrapper handleChange={handleChange} options={options}/>
      <Text variant="large">
        For a guide on how to customize this project, check out the UI Fabric
        documentation.
      </Text>
      <Text variant="large" styles={boldStyle}>
        Essential Links
      </Text>
      <Stack horizontal gap={15} horizontalAlign="center">
        <Link href="https://developer.microsoft.com/en-us/fabric">Docs</Link>
        <Link href="https://stackoverflow.com/questions/tagged/office-ui-fabric">
          Stack Overflow
        </Link>
        <Link href="https://github.com/officeDev/office-ui-fabric-react/">
          Github
        </Link>
        <Link href="https://twitter.com/officeuifabric">Twitter</Link>
      </Stack>
      <Text variant="large" styles={boldStyle}>
        Design System
      </Text>
      <Stack horizontal gap={15} horizontalAlign="center">
        <Link href="https://developer.microsoft.com/en-us/fabric#/styles/icons">
          Icons
        </Link>
        <Link href="https://developer.microsoft.com/en-us/fabric#/styles/typography">
          Typography
        </Link>
        <Link href="https://developer.microsoft.com/en-us/fabric#/styles/themegenerator">
          Theme
        </Link>
      </Stack>
    </Stack>
  );
};
