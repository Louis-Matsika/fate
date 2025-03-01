import {css} from "@emotion/react";
import {colours, spacings} from "#/themes/theme";

export default {
    div: () =>
        css({
            backgroundColor: colours.CANVAS,
            padding: spacings.FULL,
        }),
};
