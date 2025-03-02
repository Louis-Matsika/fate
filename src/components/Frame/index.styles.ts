import {css} from "@emotion/react";
import {colours, spacings, breakpoints, pictureWidths} from "#/themes/theme";

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

            [`@media (max-width: ${breakpoints.GROUP_2_TABLET})`]: {
                width: `${pictureWidths.PICTURE_2_TABLET}`,
            },
            [`@media (max-width: ${breakpoints.GROUP_1_SMARTPHONE})`]: {
                width: `${pictureWidths.PICTURE_1_SMARTPHONE}`,
            },
            [`@media (max-width: ${breakpoints.GROUP_0_FLIPPHONE})`]: {
                width: `${pictureWidths.PICTURE_0_FLIPPHONE}`,
            },
        }),
};
