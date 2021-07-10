import styled from "@emotion/styled";
import { COLORS, FONTS, BREAKPOINTS } from "styles/global.style";
export const FormHeading = styled.h2`
  text-align: left;
  color: ${(props) => (props.light ? COLORS.white : COLORS.dark)};
  font-size: 1.2rem; // clamp(1.2rem, 1.2rem + 0.5vw, 2.5rem);
  font-family: ${FONTS.bold};
  line-height: 1.8;
`;