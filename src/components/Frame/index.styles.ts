import {css} from "@emotion/react";
import {colours, spacings, breakpoints} from "#/themes/theme";

export default {
    frameContainer: () =>
        css({
            display: "flex",
            justifyContent: "center",
            margin: `${spacings.QUINTUPLE}`,

            [`@media (max-width: ${breakpoints.GROUP_3_COMPUTER})`]: {
                backgroundColor: `${colours.NARDOGREY}`
            }
        }),
    art: () =>
        css({
            border: `1px solid ${colours.NARDOGREY}`,
            borderRadius: `${spacings.FULL}`,
        }),
};