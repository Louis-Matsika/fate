import {css} from "@emotion/react";
import {colours, spacings, fontSizes} from "#/themes/theme";

export default {
    label: () =>
        css({
            display: 'flex',
            justifyContent: 'center',
            padding: `${spacings.DOUBLE}`,
        }),

};
