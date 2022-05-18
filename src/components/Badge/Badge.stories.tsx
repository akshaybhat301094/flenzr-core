import React from "react";
import { Story } from "@storybook/react";
import { BadgeProps } from "@mui/material";
import Badge from "./Badge";
import Button from "../Button";

export default {
  title: "Badge",
  component: Badge,
};

const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

export const badge = Template.bind({});
badge.args = {
  variant: "dot",
  overlap: "circular",
  anchorOrigin: { vertical: "bottom", horizontal: "right" },
  color: "info",
  children: <Button variant="outlined">test</Button>,
  badgeContent: 4,
  invisible: false,
};
