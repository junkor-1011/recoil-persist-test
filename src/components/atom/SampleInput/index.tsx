import React from 'react';
import { css } from '@emotion/react';

/*
const style = css`
.module {
  border: 1px solid #ccc;
  &:hover {
    border-color: rgb(0, 146, 204);
  }
}
`
 */

const style = css({
  border: '1px solid #ccc',
  '&:hover': {
    borderWidth: 'thick',
    borderColor: 'rgb(0, 220, 200)',
    color: 'blue',
  },
});

const SampleInput: React.FC = () => <input css={style} type="text" />;
export default SampleInput;
