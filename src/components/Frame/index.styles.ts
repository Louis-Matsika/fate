import { css } from "@emotion/react";
import { colours, spacings, breakpoints, pictureWidths } from "#/themes/theme";

export default {
    frameContainer: () =>
        css({
            display: "flex",
            justifyContent: "center",
        }),
    art: () =>
        css({
            border: `1px solid ${colours.NARDOGREY}`,
            borderRadius: `${spacings.FULL}`,

            // Desktop/Large screens
            [`@media (min-width: ${breakpoints.GROUP_3_COMPUTER})`]: {
                width: `${pictureWidths.PICTURE_3_COMPUTER}`,
            },

            // Small desktop/Large tablet
            [`@media (min-width: ${breakpoints.GROUP_2_TABLET}) and (max-width: ${breakpoints.GROUP_3_COMPUTER})`]: {
                width: `${pictureWidths.PICTURE_3_COMPUTER}`,
            },

            // Tablet
            [`@media (min-width: ${breakpoints.GROUP_1_SMARTPHONE}) and (max-width: ${breakpoints.GROUP_2_TABLET})`]: {
                width: `${pictureWidths.PICTURE_2_TABLET}`,
            },

            // Large mobile
            [`@media (min-width: ${breakpoints.GROUP_0_FLIPPHONE}) and (max-width: ${breakpoints.GROUP_1_SMARTPHONE})`]: {
                width: `${pictureWidths.PICTURE_1_SMARTPHONE}`,
            },

            // Small mobile
            [`@media (max-width: ${breakpoints.GROUP_0_FLIPPHONE})`]: {
                width: `${pictureWidths.PICTURE_0_FLIPPHONE}`,
            },
        }),
};