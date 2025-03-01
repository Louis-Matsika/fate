import { css } from '@emotion/react';

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