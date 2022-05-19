import React from "react";
import MUIGrid from "@mui/material/Grid";
import { GridProps } from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

const CustomGrid = styled(MUIGrid)<GridProps>(({ theme }) => ({}));

const Grid: React.FC<GridProps> = (props) => {
  return <CustomGrid {...props}>{props.children}</CustomGrid>;
};

export default Grid;
