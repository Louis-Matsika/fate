import { css } from "@emotion/react";
import { colours, spacings, fontSizes, pictureWidths } from "#/themes/theme";
import { title } from "process";

export default {
  exhibit: () =>
    css({
      display: "flex",
      alignItems: "center",
      flexDirection: "column",

      paddingTop: `${spacings.QUADRUPLE}`,
    }),
  frame: () =>
    css({
      marginBottom: 0,
    }),
  artistBrand: () => css({}),
  infoPlaque: () =>
    css({
      paddingBottom: `${spacings.QUADRUPLE}`,
      margin: 0,
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    }),

  title: () =>
    css({
      paddingTop: 0,
      margin: 0,
    }),
  credits: () =>
    css({
      paddingTop: 0,
      margin: 0,
    }),
  infoIcon: () =>
    css({
      width: `${pictureWidths.ICON_SMALL}`,
      marginRight: 4,
    }),
  infoDetail: () =>
    css({
      width: "40%",
      color: `${colours.GRAPHITE}`,
    }),
};
