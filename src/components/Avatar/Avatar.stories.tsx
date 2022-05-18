import React from "react";
import { Story } from "@storybook/react";
import { AvatarProps } from "@mui/material";
import Avatar from "./Avatar";

export default {
  title: "Avatar",
  component: Avatar,
};

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const avatar = Template.bind({});
avatar.args = {
  src: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  children: "",
};
