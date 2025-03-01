import { css } from '@emotion/react';
import withThemeProvider from '#/themes/withThemeProvider';

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