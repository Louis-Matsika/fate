import {css} from "@emotion/react";
import {colours, spacings, fontSizes} from "#/themes/theme";

export default {
    footer: () =>
        css({
            display: "flex",
            justifyContent: "center",
            borderTop: `1px solid ${colours.NARDOGREY}`,
            padding: `${spacings.DOUBLE} 0 ${spacings.DOUBLE} 0`,
        }),
    link: () =>
        css({
            textDecoration: "none",
            fontSize: `${fontSizes.BARCODE}`,
            color: `${colours.GRAPHITE}`,

            "&:hover": {
                color: `${colours.CHARCOAL}`,
            },
        }),
};
