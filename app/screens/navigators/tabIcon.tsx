// TabIcon.tsx (Optional for clarity)
import React from 'react';
import { Image } from 'react-native';

type TabIconProps = {
  source: any;
  focused: boolean;
  size: number;
};

export const TabIcon = ({ source, focused, size }: TabIconProps) => (
  <Image
    source={source}
    // eslint-disable-next-line react-native/no-inline-styles
    style={{ width: size, height: size, opacity: focused ? 1 : 0.6 }}
    resizeMode="contain"
  />
);


