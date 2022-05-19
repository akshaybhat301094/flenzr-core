import React from "react";
import MUICard from "@mui/material/Card";
import { CardProps } from "@mui/material/Card";
import { styled } from "@mui/material/styles";

const CustomCard = styled(MUICard)<CardProps>(({ theme }) => ({}));

const Card: React.FC<CardProps> = (props) => {
  return <CustomCard {...props}>{props.children}</CustomCard>;
};

export default Card;
