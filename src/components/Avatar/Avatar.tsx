import React from "react";
import MUIAvatar from "@mui/material/Avatar";
import { AvatarProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomAvatar = styled(MUIAvatar)<AvatarProps>(({ theme }) => ({}));

const Avatar: React.FC<AvatarProps> = (props) => {
  let { children, ...args } = props;
  return <CustomAvatar {...args}></CustomAvatar>;
};

export default Avatar;
