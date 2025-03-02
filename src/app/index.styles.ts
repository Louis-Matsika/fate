import {css} from "@emotion/react";

export default {
    appBody: () =>
        css({
            margin: 0,
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
        }),
    main: () =>
        css({
            flexGrow: 1,
        }),
};
