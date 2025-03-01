export const colours = {
    RED: "#FF0000",
    BLACK: "#000000", // Added BLACK for the example
};

const FULL = 8;

export const spacings = {
    /* 8px */
    FULL: `${FULL}px`,
    /* 4px */
    HALF: `${FULL / 2}px`,
    /* 16px */
    DOUBLE: `${FULL * 2}px`,
    /* 24px */
    TRIPLE: `${FULL * 3}px`,
    /* 32px */
    QUADRUPLE: `${FULL * 4}px`,
    /* 40px */
    QUINTUPLE: `${FULL * 5}px`,
    /* 48px */
    SEXTUPLE: `${FULL * 6}px`,
};

const theme = {
    colours,
    spacings,
};

export default theme;
