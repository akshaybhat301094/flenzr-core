import React from "react";
import { Story } from "@storybook/react";
import { GridProps } from "@mui/material/Grid";
import Grid from "./Grid";

export default {
  title: "Grid",
  component: Grid,
};

const Template: Story<GridProps> = (args) => <Grid {...args} />;

export const grid = Template.bind({});
grid.args = {};
