import React, { HTMLAttributes } from 'react';
import Group7 from '../AirlineLogoComponents/Group7Logo';
import Group8 from '../AirlineLogoComponents/Group8Logo';

export interface AirlineLogoProps extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  AirlineCode?: any;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
export const AirlineLogo: any = ({ AirlineCode }: AirlineLogoProps) => {
  const allLogo: any = {
    1: Group7,
    2: Group8,
    3: Group7,
    4: Group8,
  };
  const Component = AirlineCode ? allLogo[AirlineCode] : <></>;
  return (
    <>
      <Component />
    </>
  );
};
