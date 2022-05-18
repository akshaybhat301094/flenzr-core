import React from "react";
import MUIAvatarGroup from "@mui/material/AvatarGroup";
import { styled } from "@mui/material/styles";
import { AvatarGroupProps } from "@mui/material/AvatarGroup";

const CustomAvatarGroup = styled(MUIAvatarGroup)<AvatarGroupProps>(
  ({ theme }) => ({})
);

const AvatarGroup: React.FC<AvatarGroupProps> = (props) => {
  let { children, ...args } = props;
  return <CustomAvatarGroup {...args}>{children}</CustomAvatarGroup>;
};

export default AvatarGroup;
