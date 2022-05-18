import React from "react";
import { Story } from "@storybook/react";
import { ChipProps } from "@mui/material/Chip";
import Chip from "./Chip";

export default {
  title: "Chip",
  component: Chip,
};

const Template: Story<ChipProps> = (args) => <Chip {...args} />;

export const chip = Template.bind({});
chip.args = {
  label: "Chip",
  deleteIcon: <></>,
};
