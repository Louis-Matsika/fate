import {css} from "@emotion/react";
import {colours, spacings} from "#/themes/theme";

export default {
    footer: () =>
        css({
            display: "flex",
            justifyContent: "center",
            borderTop: `1px solid ${colours.NARDOGREY}`,
            padding: `${spacings.DOUBLE} 0 ${spacings.DOUBLE} 0`,
        }),
};
