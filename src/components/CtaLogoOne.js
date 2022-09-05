import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const createHelpers = (width, height, css) => {
  // somehow sizes is ending up in markup, even if it is not a valid svg attribute
  // until we have a better solution, just render it empty, instead to '[Object object]'
  const sanitizeSizes = sizes =>
    Object.defineProperty(sizes, "toString", {
      value: () => "",
      enumerable: false
    });

  const getDimensions = (size, sizes) => {
    if (
      size &&
      typeof size.width === "number" &&
      typeof size.height === "number"
    ) {
      return size;
    }

    return size && sizes[size] ? sizes[size] : { width, height };
  };

  const getCss = (size, sizes, fillColor, fillColorRule, noStyles) => {
    if (noStyles) {
      return "";
    }

    const dimensions = getDimensions(size, sizes);
    const fillRule =
      fillColor && fillColorRule
        ? `${fillColorRule}{ fill: ${fillColor}; }`
        : "";

    return css`
      width: ${dimensions.width}px;
      height: ${dimensions.height}px;
      ${fillRule}
    `;
  };

  const propsToCss = ({ size, sizes, fillColor, fillColorRule, noStyles }) =>
    getCss(size, sizes, fillColor, fillColorRule, noStyles);

  return {
    getCss,
    getDimensions,
    propsToCss,
    sanitizeSizes
  };
};

const width = "276";
const height = "64";
const viewBox = "0 0 276 64";

const { getDimensions, getCss, propsToCss, sanitizeSizes } = createHelpers(
  width,
  height,
  css
);

const sizes = sanitizeSizes({
  small: { width: 18, height: 18 },
  medium: { width: 24, height: 24 }
});

const Image = styled.svg`
  ${propsToCss}
`;

const children = (
  <Fragment>
    <defs key="key-0">
      <radialGradient
        id="s-6ac5595778-a"
        cx="-160.71"
        cy="416.47"
        r="2.71"
        gradientTransform="matrix(31.48 0 0 -31.48 5234.3 13141.86)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".06" stopColor="#fff" />
        <stop offset=".08" stopColor="#cbffff" />
        <stop offset=".1" stopColor="#96ffff" />
        <stop offset=".12" stopColor="#68ffff" />
        <stop offset=".14" stopColor="#43ffff" />
        <stop offset=".17" stopColor="#25ffff" />
        <stop offset=".19" stopColor="#1ff" />
        <stop offset=".21" stopColor="#04ffff" />
        <stop offset=".23" stopColor="#0ff" />
        <stop offset="1" stopColor="#00f" stopOpacity="0" />
      </radialGradient>
    </defs>
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M185.83 42.65v1.49a.58.58 0 01-.58.58h-7.07v1a54.3 54.3 0 01-.3 6 .59.59 0 01-.58.53h-1.53a.55.55 0 01-.54-.56 50.87 50.87 0 00.31-5.91v-1h-7a.58.58 0 01-.58-.58v-1.55a.57.57 0 01.57-.58h6.9a51.6 51.6 0 00-.92-7.11.49.49 0 01.38-.57h1.76a.53.53 0 01.52.44 55 55 0 01.9 7.25h7.17a.58.58 0 01.59.57z"
      key="key-1"
    />
    <path
      fill="none"
      d="M92.12 23.11zm-.47.05a1.62 1.62 0 01-.53-.11 1.23 1.23 0 00.55.13h.14zm0 0a1.62 1.62 0 01-.53-.11 1.23 1.23 0 00.55.13h.14z"
      key="key-2"
    />
    <path
      fill="url(#s-6ac5595778-a)"
      d="M176.21 30.88a49.37 49.37 0 00-86.79-8.76.58.58 0 00-.07.51.6.6 0 00.36.37l1.29.43a.72.72 0 00.82-.28 46.76 46.76 0 0181.74 8.05.68.68 0 00.62.42h1.53a.54.54 0 00.54-.54.71.71 0 000-.2zm-85-7.81a.22.22 0 01-.11 0h.1z"
      key="key-3"
    />
    <path
      fill="#fff"
      d="M108.08 33.08s.37-.55.68-1a17.71 17.71 0 012.34-2.48l.51-.42s-.43 0-.67.09a5.16 5.16 0 00-1.86 1c-.7.6-1.47 1.58-1.12 2.45l.12.29zm3.9 1.05a7.59 7.59 0 003.12-.93c1-.53 2.35-1.57 2.2-2.78a1 1 0 00-.63-.83 1.46 1.46 0 00-1.18 0 3.55 3.55 0 00-.94.4 14.28 14.28 0 00-3.47 3.06c-.19.25-.39.54-.54.73s-.17.23-.16.26a4.9 4.9 0 001.6.08zm-2.82 2.06a6.38 6.38 0 00-.36.63 1.14 1.14 0 01-.27.31.58.58 0 01-.82 0 2 2 0 01-.63-1.4 3.75 3.75 0 000-.67 4.18 4.18 0 00-.57-1 3.85 3.85 0 01-.39-1.41 4.68 4.68 0 011.48-3.38 9.63 9.63 0 013.28-2.24 6.41 6.41 0 014.21-.39 3.13 3.13 0 011.31.89 1.12 1.12 0 00.18.2 1.3 1.3 0 00.33.07 3.26 3.26 0 011.26.6 2.43 2.43 0 01.88 1.41 3.87 3.87 0 01-1.21 3.26 11.92 11.92 0 01-4.32 3 7.09 7.09 0 01-2.75.49c-.26 0-.53-.09-.79-.11a4 4 0 01-.66-.17c-.06-.05-.13-.09-.16-.07zm1.51 2.62a.66.66 0 01.2.06 1.75 1.75 0 011 1.38 42 42 0 01.53 5.75c0 .91.06 1.8.1 2.7a10.83 10.83 0 01-.07 2.49 1.16 1.16 0 01-.47.71 2.2 2.2 0 01-1.28.12c-.87-.18-1.15-.74-1.28-1.6a43.82 43.82 0 010-7.78 17.34 17.34 0 01.6-3.14c.1-.26.31-.77.69-.69zm-26.81 3.08s-1.28.09-2.17.19a24.36 24.36 0 00-4.47.92c-.36.14-1.11.44-1.18.82a1.31 1.31 0 00.45 1c.16.19 1 1 1.29 1.25a22.37 22.37 0 004.69 2.85c.53.22 1.41.53 1.41.53s-.06-2.5 0-5v-2.6zm23.62 1a11.21 11.21 0 01-.13 2.12 9.47 9.47 0 01-.4 1.38 16 16 0 01-.71 1.44 12.05 12.05 0 01-2 2.48 17 17 0 01-8.59 3.37 21.86 21.86 0 01-6.41-.19l-1.81-.38a7.11 7.11 0 010 .74 2.74 2.74 0 01-.18.62 1 1 0 01-.77.55A2.36 2.36 0 0185.1 55a1.89 1.89 0 01-1-1.64c-.1-.58-.2-1.59-.2-1.59l-.9-.49a23.91 23.91 0 01-3.59-2.19c-.63-.5-1.25-1-1.85-1.56a10.24 10.24 0 01-2-2.45 2.36 2.36 0 01-.22-2.2c.44-1.1 2-1.93 3.11-2.4a25.69 25.69 0 014.29-1.31c.48-.07 1.23-.2 1.28-.23s.06-1.13 0-1.52.29-3 .39-3.52a6.38 6.38 0 01.5-1.73.46.46 0 01.63-.05c1.17.73 1.53 3.27 1.62 4.56 0 .78.08 2 .08 2h2.18a21.27 21.27 0 012.53.27 17.7 17.7 0 014.37 1.25 4.47 4.47 0 012.21 2.23 2.3 2.3 0 01-.19 2.12A3 3 0 0196.06 46a3.73 3.73 0 01-1.61-.37.27.27 0 010-.39s.51-.29.79-.44a1.64 1.64 0 00.37-.26c.24-.21.45-.44.43-.7s-.4-.55-.75-.69a27.74 27.74 0 00-6.49-1.29l-1.5-.06.19 8.72 1.3.23c.32.05 1.72.17 2.09.18a19.2 19.2 0 008.55-1.4 8.94 8.94 0 003-2.1 6.1 6.1 0 001.44-4.52 11.76 11.76 0 00-2.52-5.41c-2.76-3.55-7.5-6.48-11.66-8.19a37.21 37.21 0 00-13-2.92 22 22 0 00-5 .37l-.54.15a1.42 1.42 0 00-.4.17l-.06.06a.74.74 0 00.15.08c.14.06.71.09 1 .15a1 1 0 01.65.38.38.38 0 010 .48c-.3.36-1.38.3-1.87.22s-1.12-.23-1.24-.67a2 2 0 01.37-1.48 3.61 3.61 0 012.4-1.72 24.69 24.69 0 015.06-.79A29.43 29.43 0 0187 25.21a46.27 46.27 0 016.11 2.38 47.41 47.41 0 014.46 2.49c.36.23 2.46 1.77 2.79 2.05.68.55 1.57 1.35 2.21 2a21.14 21.14 0 013.55 4.63c.18.36.32.71.55 1.13a9.34 9.34 0 01.48 1.24c.06.25.14.61.15.62a6.14 6.14 0 01.17 1.15zm14.52.63h.14a11.12 11.12 0 012.82.67 2.92 2.92 0 011.52 1.44 4.07 4.07 0 01-2 5.7A7.61 7.61 0 01122 52a9.14 9.14 0 01-4.83-.86 5.72 5.72 0 01-2.45-2.09 2 2 0 01.1-2.22c.75-1 2.38-1.27 3.6-1.23a15.32 15.32 0 013.5.64 6.32 6.32 0 011.31.61.42.42 0 01.14.42c-.2.62-1.71.95-2.14 1-1.16.18-1.77-.26-3.09-.78a4.35 4.35 0 00-1.11-.3c-.6-.06-1.32.11-1.44.76 0 .34.34.66.64.79a4.74 4.74 0 002 .42 10.29 10.29 0 006.07-1.5.92.92 0 00.46-.71s0-.36-.16-.4-.1-.12-.16-.18a2.58 2.58 0 00-.71-.4 17.17 17.17 0 00-4.31-.8c-1.14-.1-2.93-.24-3.35-.31a4.92 4.92 0 01-1.31-.32 1.63 1.63 0 01-.88-1 3.14 3.14 0 01.49-2.35c1.13-1.62 3.77-2.23 5.74-2.48s5-.24 6.87.76c.29.15.44.3.38.61a1.53 1.53 0 01-1.09 1.12 12.45 12.45 0 01-2.21.27 36.86 36.86 0 00-7.15.65 1.63 1.63 0 00-.55.23c-.34.37.63.47.83.52h.14l4.76.56zm7.05 8.48c-.91-.33-1.12-1.8-1.16-2.55a23.35 23.35 0 011.31-8.07c.23-.65.57-1.71 1.29-1.65a1.65 1.65 0 011.14.83c.77 1.09 1.53 2.2 2.28 3.32s1.36 2.14 2 3.11a1.26 1.26 0 00.25.31c.12.1.23.1.27 0a14.28 14.28 0 000-1.51c-.05-.39-.07-.7-.12-1a30.43 30.43 0 00-.67-3.29c-.28-1-.61-2.13-.85-3.14a4.08 4.08 0 01-.15-1 .51.51 0 01.76-.53c.93.33 2.16 2.35 2.52 3 .12.23.6 1.43.72 1.77a14.9 14.9 0 01.72 3.51 9.76 9.76 0 01-.5 4.2 4.54 4.54 0 01-.91 1.34 2.1 2.1 0 01-2.22.45 11.6 11.6 0 01-2.23-3c-.73-1.27-2-3.76-2.17-4a.43.43 0 00-.2-.15c-.07 0-.1.13-.12.23-.13.73-.21 4.11-.21 4.21a16.89 16.89 0 01-.22 2.65c-.1.45-.21.82-.63 1a1 1 0 01-.87-.06zm12.58-.44a4.17 4.17 0 01-.37-.36 6.68 6.68 0 01-.41-.67c-.06-.13-.1-.22-.14-.33a4.11 4.11 0 01-.13-2.36 11.3 11.3 0 01.69-1.87.48.48 0 000-.17c0-.15-.22-1.12-.23-1.44 0-.48.35-.82 1-.88h.13c.25-.06.42-.54.55-.92l.48-1.35c-.41-.1-.81-.21-1.21-.34a1.76 1.76 0 01-1-.84c-.25-.51-.08-.79.45-.95.19-.07 1.72-.36 2.2-.43l1.75-.23c.5-.06 2.78-.33 3.51-.31a2.87 2.87 0 012.48 1.43c.35.5.59 1.1.06 1.42-.81.49-3.43.53-3.91.53h-1.83l-.53 1.79h2.93a3.49 3.49 0 01.65.05c.54.12.73.53.75 1.13s-.1 1-.66 1.1c-.28.05-3.51.07-4 .12l-.56.07s-.23.61-.43 1.23-.38 1.29-.38 1.29h.3a3.38 3.38 0 00.63-.07c1-.17 2.45-.39 3.65-.58.65-.1 1-.15 1.31.28a1.79 1.79 0 01.47 1.15c0 .43-.31.71-.71 1a12 12 0 01-5 2.2 3.35 3.35 0 01-1.59-.17 3 3 0 01-.57-.27s-.24-.14-.33-.21zM162 42.79a17.72 17.72 0 00-2.41 2.85c-.69 1-1.33 2.1-2 3a10.36 10.36 0 00-.52.92 2.07 2.07 0 00.84 0 7.19 7.19 0 002.71-1.26 5.78 5.78 0 002-3.1 3.33 3.33 0 00-.19-2.28.32.32 0 00-.44-.05zm-6.6 10s-.26.77-.45 1.38c-.34 1-1.07 3.86-1.25 4.73-.25 1.3-1 4.71-1 4.78a.45.45 0 01-.2.21c-.3.17-.42.11-.79-.08a3.55 3.55 0 01-1.24-1c-.71-.92-.54-2.66-.4-3.68a32 32 0 012.34-8.67.15.15 0 000-.13 6.91 6.91 0 01-.65-2.86c0-2.78 1.6-5.52 3.39-7.73.13-.17 1-1.22 1.41-1.2s.47.49.41.88a11.88 11.88 0 01-1.73 3.67 11 11 0 00-1.18 2.82 7.87 7.87 0 00-.19 1.08c0 .3.08.68.08.68s1.13-1.59 1.88-2.56c.4-.53.7-.89 1-1.27.66-.73 1.35-1.44 2-2.13a7.59 7.59 0 012-1.53 1.77 1.77 0 012 0 4.58 4.58 0 011.64 3.37 8.15 8.15 0 01-.78 4.26 8.8 8.8 0 01-3.16 3.42 8.52 8.52 0 01-4.72 1.55h-.48z"
      key="key-4"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M247 42.33s-.06.54-.15 1.14a2.42 2.42 0 01-2.72 2.05h-5.85l-.66 5.23h-4.66l1.04-8.42zm-27.49 0h10.24c1.46 0 3.32.63 2.95 3.27a20.58 20.58 0 01-.55 3.21c-.78 1.86-3.1 1.92-3.43 1.94h-10.31l.46-3.65h9.07l.2-1.58h-6.31c-1.58 0-2.7-.99-2.36-3.19zm-.94 0l-.4 3.19h-7.81l-.2 1.58h7.81l-.47 3.65H205l1.07-8.42zm29.38 0h4.66l-1.06 8.42h-4.67l1.07-8.42zm8.85 0h4.66l-1.06 8.42h-4.7l1.06-8.42zm-50-5.33h12.47l-.49 3.86h-12.53l.49-3.86zm37.4 0c2.6 0 3.3 1.49 3.09 3.14 0 .29-.08.63-.09.71h-27.54s.07-.53.14-1.13c.19-1.58 1.5-2.65 3.49-2.72h20.85zm14.6 0c1.61 0 3.28.74 2.95 3.27-.06.45-.07.59-.07.59h-13.59l.49-3.86z"
      key="key-5"
    />
    <path
      fill="#f9b300"
      fillRule="evenodd"
      d="M272.2 42.14l.44-3.43h-3.71l-.43 3.43H265l-.42 3.41h3.48l-.42 3.45h3.7l.45-3.49h3.49l.43-3.41z"
      key="key-6"
    />
    <path fill="none" d="M0 34h49.19v17.22H0z" key="key-7" />
    <path
      fill="#1ce783"
      d="M30.15 51.22h3.91V34h-3.92v17.22zm-6.89-4.91a1.08 1.08 0 01-1 1.11h-2.32a1.09 1.09 0 01-1.05-1.11v-6.94H15v7.28c0 3 1.8 4.55 4.44 4.55h3.83c2.44 0 3.92-1.87 3.92-4.55v-7.28h-3.95l.02 6.94zm22-6.94v6.94a1.09 1.09 0 01-1 1.11H42a1.09 1.09 0 01-1-1.11v-6.94h-4v7.28c0 3 1.8 4.55 4.45 4.55h3.82c2.44 0 3.92-1.87 3.92-4.55v-7.28zm-37.55 0H5.24a2.91 2.91 0 00-1.32.24V34H0v17.2h3.9v-6.92a1.09 1.09 0 011-1.11h2.32a1.09 1.09 0 011 1.11v6.94h3.92v-7.5c0-3.14-2-4.35-4.44-4.35z"
      key="key-8"
    />
  </Fragment>
);

const defaultProps = {
  children,
  viewBox,
  fillColor: null,
  fillColorRule: "&&& path, &&& use, &&& g",
  sizes,
  size: null
};

Image.propTypes /* remove-proptypes */ = {
  fillColor: PropTypes.string,
  fillColorRule: PropTypes.string,
  viewBox: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      height: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired
    })
  ]),
  sizes: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number
  })
};

export default Object.assign(Image, {
  getDimensions,
  getCss,
  defaultProps,
  displayName: "CtaLogoOne"
});
