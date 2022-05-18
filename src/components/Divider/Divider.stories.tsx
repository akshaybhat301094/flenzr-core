import React from "react";
import { Story } from "@storybook/react";
import { DividerProps } from "@mui/material/Divider";
import Divider from "./Divider";

export default {
  title: "Divider",
  component: Divider,
};

const Template: Story<DividerProps> = (args) => <Divider {...args} />;

export const divider = Template.bind({});
divider.args = {};
