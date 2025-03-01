import { css } from '@emotion/react';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    div: () =>
      css({
        justifyContent: 'center',
        backgroundColor: 'hotpink',
        '&:hover': {
          color: 'lightgreen'
        }
      }),
    }