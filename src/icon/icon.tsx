import * as HIconsOutline from '@heroicons/react/24/outline';
import * as HIconsSolid from '@heroicons/react/24/solid';
import React, { ReactElement } from 'react';

interface IconProps {
  icon: string;
  variant?: 'outline' | 'solid';
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  icon,
  className,
  variant,
}): ReactElement => {
  let icons: { [key: string]: React.ElementType } = {}; // Update the type of icons

  icons = variant === 'outline' ? HIconsOutline : HIconsSolid;

  const DynamicIcon = icons[icon];

  // left in for reference
  // console.log(icons);

  return <DynamicIcon className={className} />;
};
