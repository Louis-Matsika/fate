import {css} from "@emotion/react";
import {pictureWidths, colours, spacings} from "#/themes/theme";

export default {
    header: () =>
        css({
            display: "flex",
            justifyContent: "center",
            borderBottom: `1px solid ${colours.NARDOGREY}`,
            padding: `${spacings.DOUBLE} 0 ${spacings.DOUBLE} 0`,
        }),
    omoBrand: () =>
        css({
            width: `${pictureWidths.ICON_SMALL}`,
        }),
};
