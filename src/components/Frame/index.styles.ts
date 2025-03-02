import {css} from "@emotion/react";
import {colours, spacings, breakpoints} from "#/themes/theme";

export default {
    frameContainer: () =>
        css({
            display: "flex",
            justifyContent: "center",
            margin: `${spacings.QUINTUPLE}`,
        }),
    art: () =>
        css({
            border: `1px solid ${colours.NARDOGREY}`,
            borderRadius: `${spacings.FULL}`,
        }),
};
