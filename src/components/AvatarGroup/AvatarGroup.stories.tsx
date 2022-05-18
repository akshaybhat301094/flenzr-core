import React from "react";
import { Story } from "@storybook/react";
import { AvatarGroupProps } from "@mui/material/AvatarGroup";
import AvatarGroup from "./AvatarGroup";
import Avatar from "../Avatar/Avatar";

export default {
  title: "Avatar Group",
  component: AvatarGroup,
};

const Template: Story<AvatarGroupProps> = (args) => <AvatarGroup {...args} />;

export const avatarGroup = Template.bind({});
avatarGroup.args = {
  children: (
    <>
      <Avatar
        alt="Remy Sharp"
        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <Avatar
        alt="Remy Sharp"
        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <Avatar
        alt="Remy Sharp"
        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <Avatar
        alt="Remy Sharp"
        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <Avatar
        alt="Remy Sharp"
        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <Avatar
        alt="Remy Sharp"
        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <Avatar
        alt="Remy Sharp"
        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
    </>
  ),
  total: 100,
};
