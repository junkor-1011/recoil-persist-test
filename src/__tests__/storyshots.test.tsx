/* eslint-disable testing-library/no-node-access */
/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { render } from '@testing-library/react';
import initStoryshots from '@storybook/addon-storyshots';
import { createSerializer } from '@emotion/jest';

const reactTestingLibrarySerializer = {
  print: (val: any, serialize: any, indent: any) => serialize(val.container.firstChild),
  test: (val: any) => val && val.hasOwnProperty('container'),
};

initStoryshots({
  renderer: render,
  snapshotSerializers: [reactTestingLibrarySerializer, createSerializer()],
});
