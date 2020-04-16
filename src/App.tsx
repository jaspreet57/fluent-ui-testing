import React, { FormEvent, useState } from "react";
import { Stack, FontWeights, Pivot, PivotItem } from "office-ui-fabric-react";
import { DropDownWrapper } from "./components/DropDown/DropDownWrapper";

const defaultOptions = [
  { key: "A", text: "Option a", title: "I am option a." },
  { key: "B", text: "Option b" },
  { key: "C", text: "Option c", disabled: true },
  { key: "D", text: "Option d" },
  { key: "E", text: "Option e" },
];

export const App: React.FunctionComponent = () => {
  const [topMenuKey, setTopMenuKey] = useState<string>("custom");
  const [innerMenuKey, setInnerMenuKey] = useState<string>("one");

  const onTopMenuClick = (item: PivotItem | undefined): void => {
    if (!item || !item.props.itemKey) {
      return;
    }
    setTopMenuKey(item.props.itemKey);
  };

  const onInnerMenuClick = (item: PivotItem | undefined): void => {
    if (!item || !item.props.itemKey) {
      return;
    }
    setInnerMenuKey(item.props.itemKey);
  };

  return (
    <Stack
      verticalFill
      styles={{
        root: {
          width: "960px",
          margin: "0 auto",
          color: "#605e5c",
        },
      }}
      gap={15}
    >
      <div style={{ borderBottom: "1px solid #c8c8c8" }}>
        <Pivot
          aria-label="Top Menu"
          selectedKey={topMenuKey}
          onLinkClick={onTopMenuClick}
          headersOnly={true}
        >
          <PivotItem headerText="Custom" itemKey="custom" />
          <PivotItem headerText="Support" itemKey="support" />
        </Pivot>
      </div>
      <Stack horizontal verticalAlign="center" gap={10}>
        <div>Label here :</div>
        <DropDownWrapper handleChange={() => {}} options={defaultOptions} />
      </Stack>

      <div style={{ borderBottom: "1px solid #c8c8c8" }}>
        <Pivot
          aria-label="Inner Menu"
          selectedKey={innerMenuKey}
          onLinkClick={onInnerMenuClick}
          headersOnly={true}
        >
          <PivotItem headerText="One" itemKey="one" />
          <PivotItem headerText="Two" itemKey="two" />
          <PivotItem headerText="Three" itemKey="three" />
          <PivotItem headerText="Four" itemKey="four" />
          <PivotItem headerText="Five" itemKey="five" />
          <PivotItem headerText="Six" itemKey="six" />
        </Pivot>
      </div>
      <Stack horizontal gap={5}>
        <Stack.Item
          grow
          styles={{
            root: {
              borderRight: "1px solid #c8c8c8",
              width: 100,
              height: 100,
            },
          }}
        >
          <div> Table here</div>
        </Stack.Item>
        <Stack.Item
          styles={{
            root: {
              padding: 0,
              paddingTop: 40,

              width: 200,
            },
          }}
        >
          View Area
        </Stack.Item>
      </Stack>
    </Stack>
  );
};
