import pixelsToRem from "#/utilities/pixelsToRem";

export const colours = {
    SYSTEMBLUE: "#0E53F3",
    MIDNIGHT: "#010101",
    CHARCOAL: "#212121",
    GRAPHITE: "#555555",
    NARDOGREY: "#AAAAAA",
    CANVAS: "#FFFFFF",
};

const FULL = pixelsToRem(8);

export const spacings = {
    /* 0.5rem (8px) */
    FULL: `${FULL}rem`,
    /* 0.25rem (4px) */
    HALF: `${FULL / 2}rem`,
    /* 1rem (16px) */
    DOUBLE: `${FULL * 2}rem`,
    /* 1.5rem (24px) */
    TRIPLE: `${FULL * 3}rem`,
    /* 2rem (32px) */
    QUADRUPLE: `${FULL * 4}rem`,
    /* 2.5rem (40px) */
    QUINTUPLE: `${FULL * 5}rem`,
    /* 3rem (48px) */
    SEXTUPLE: `${FULL * 6}rem`,
};

export const breakpoints = {
    GROUP_0_FLIPPHONE: "320px",
    GROUP_1_SMARTPHONE: "480px",
    GROUP_2_TABLET: "770px",
    GROUP_3_COMPUTER: "1000px",
};

export const pictureWidths = {
    ICON_SMALL: "20px",
    ICON_MEDIUM: "50px",
    ICON_LARGE: "75px",
    PICTURE_0_FLIPPHONE: "200px",
    PICTURE_1_SMARTPHONE: "250px",
    PICTURE_2_TABLET: "350px",
    PICTURE_3_COMPUTER: "400px",
};

export const fontSizes = {
    H1: "50px",
    H2: "30px",
    H3: "24px",
    BODY: "16px",
    SMALLPRINT: "12px",
    BARCODE: "30px",
};

const theme = {
    colours,
    spacings,
    breakpoints,
    pictureWidths,
};

export default theme;
