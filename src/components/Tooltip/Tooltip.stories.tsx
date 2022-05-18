import React from "react";
import { Story } from "@storybook/react";
import { TooltipProps } from "@mui/material/Tooltip";
import Tooltip from "./Tooltip";
import Button from "../Button";

export default {
  title: "Tooltip",
  component: Tooltip,
};

const Template: Story<TooltipProps> = (args) => <Tooltip {...args} />;

export const tooltip = Template.bind({});
tooltip.args = {
  children: <span>Arrow</span>,
  title: "Add",
  placement: "right",
  arrow: true,
};
