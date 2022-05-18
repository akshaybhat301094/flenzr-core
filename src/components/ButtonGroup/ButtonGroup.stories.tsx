import React from "react";
import { Story } from "@storybook/react";
import { ButtonGroupProps } from "@mui/material/ButtonGroup";
import ButtonGroup from "./ButtonGroup";
import Button from "../Button/Button";

export default {
  title: "Button Group",
  component: ButtonGroup,
};

const Template: Story<ButtonGroupProps> = (args) => <ButtonGroup {...args} />;

export const buttonGroup = Template.bind({});
buttonGroup.args = {
  children: (
    <>
      <Button>One</Button>
      <Button>two</Button>
      <Button>three</Button>
    </>
  ),
  variant: "text",
};
