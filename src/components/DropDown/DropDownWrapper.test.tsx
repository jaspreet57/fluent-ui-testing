import React from "react";
import { DropDownWrapper } from "./DropDownWrapper";
import toJson from "enzyme-to-json";
import { shallow, mount } from "enzyme";

const defaultProps = [
  { key: "A", text: "Option a", title: "I am option a." },
  { key: "B", text: "Option b" },
  { key: "C", text: "Option c", disabled: true },
  { key: "D", text: "Option d" },
  { key: "E", text: "Option e" },
];

describe("DropDownWrapper", () => {
  it("should match snapshots", () => {
    const handleFn = jest.fn();
    const wrapper = shallow(
      <DropDownWrapper handleChange={handleFn} options={defaultProps} />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should call handleChange with selected prop", () => {
    const handleFn = jest.fn();
    const wrapper = mount(
      <DropDownWrapper handleChange={handleFn} options={defaultProps} />
    );

    wrapper.find('.ms-Dropdown-title').simulate('click', { nativeEvent: { stopImmediatePropagation: jest.fn() } })
    wrapper.find('.ms-Dropdown-item').at(0).simulate('click', { nativeEvent: { stopImmediatePropagation: jest.fn() } })

    expect(handleFn).toHaveBeenCalledTimes(1)
    expect(handleFn).toHaveBeenCalledWith(expect.anything(), defaultProps[0], 0)
  });
});
