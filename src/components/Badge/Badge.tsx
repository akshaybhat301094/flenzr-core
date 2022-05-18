import React from "react";
import MUIBadge from "@mui/material/Badge";
import { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

const CustomBadge = styled(MUIBadge)<BadgeProps>(({ theme }) => ({}));

const Badge: React.FC<BadgeProps> = (props) => {
  return <CustomBadge {...props}>{props.children}</CustomBadge>;
};

export default Badge;
