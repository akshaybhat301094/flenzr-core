import React from "react";
import { Story } from "@storybook/react";
import { ButtonProps } from "@mui/material/Button";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const button = Template.bind({});
button.args = {
  children: "Text",
  variant: "text",
};
