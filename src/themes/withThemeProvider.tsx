import pixelsToRem from "#/utilities/pixelsToRem";

export const colours = {
    SYSTEMBLUE: "#0E53F3",
    MIDNIGHT: "#010101",
    NARDOGREY: "#5F5F5F",
    CANVAS: "#FFF",
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

const theme = {
    colours,
    spacings,
};

export default theme;
