import React from 'react';
import './Rating.css';
import Rating from '@mui/material/Rating';
import { RatingProps } from '@mui/material/Rating';
import { styled } from '@mui/material/styles';

const CustomRating = styled(Rating)<RatingProps>(({ theme }) => ({}));

const RatingComponent: React.FC<RatingProps> = (props) => {
  return <CustomRating {...props} />;
};

export default RatingComponent;
