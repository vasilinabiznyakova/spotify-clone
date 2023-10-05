'use client';

import { RingLoader } from 'react-spinners';
import Box from '@/components/Box';

const Loading = () => {
  return (
    <Box className="h-full flex items-center justify-center">
      <RingLoader color="#22c55e" />
    </Box>
  );
};

export default Loading;
