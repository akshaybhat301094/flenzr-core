import React from "react";
import { Story } from "@storybook/react";
import { CardProps } from "@mui/material/Card";
import Card from "./Card";

export default {
  title: "Card",
  component: Card,
};

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const card = Template.bind({});
card.args = {
  children: "Text",
};
