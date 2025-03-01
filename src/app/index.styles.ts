import { css } from "@emotion/react";

import { colours, spacings } from '#/themes/withThemeProvider'


export default {
  div: () =>
    css({
      backgroundColor: colours.RED,
      padding: spacings.FULL,
    }),
};
