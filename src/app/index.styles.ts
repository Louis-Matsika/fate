import { css } from "@emotion/react";
import withThemeProvider from "#/themes/withThemeProvider";

const { colours, spacings } = withThemeProvider;

export default {
  div: () =>
    css({
      backgroundColor: colours.RED,
      padding: spacings.FULL,
    }),
};
