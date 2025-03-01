import { css } from "@emotion/react";
import withThemeProvider from "#/themes/withThemeProvider";

// Define a type for the colours parameter
type ColoursType = typeof withThemeProvider.colours;

export default {
  div: ({ colours = withThemeProvider.colours }: { colours?: ColoursType }) =>
    css({
      backgroundColor: colours.BLACK,
    }),
};
