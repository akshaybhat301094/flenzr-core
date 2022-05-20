import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { SkeletonProps } from '@mui/material/Skeleton';
import { styled } from '@mui/material/styles';

const CustomSkeleton = styled(Skeleton)<SkeletonProps>(({ theme }) => ({}));

const SkeletonComponent: React.FC<SkeletonProps> = (props) => {
  return <CustomSkeleton {...props} />;
};

export default SkeletonComponent;
