import styled from "styled-components";
import "assets/fonts/index.css";

import { colors } from "styles/colors";
import { FONT_SIZES } from "constants/fontSizes";

export const TextHeading1 = styled.h1`
	font-family: "Red Hat Text 400";
	color: ${colors.white};
	font-size: ${FONT_SIZES.size96};
	text-transform: none;
	letter-spacing: normal;
`;

export const TextHeading2 = styled.h2`
	font-family: "Red Hat Text 400";
	color: ${colors.black};
	font-size: ${FONT_SIZES.size72};
	text-transform: none;
	letter-spacing: normal;
`;

export const TextHeading3 = styled.h3`
	font-family: "Red Hat Text 400";
	color: ${colors.white};
	font-size: ${FONT_SIZES.size64};
	text-transform: none;
	letter-spacing: normal;
`;

export const TextHeading4 = styled.h4`
	font-family: "Red Hat Text 400";
	color: ${colors.black};
	font-size: ${FONT_SIZES.size48};
	text-transform: none;
	letter-spacing: normal;
`;
export const TextHeading5 = styled.h5`
	font-family: "Red Hat Text 700";
	color: ${colors.black};
	font-size: ${FONT_SIZES.size28};
	text-transform: none;
	letter-spacing: normal;
`;

export const TextParagraph1 = styled.p`
	font-family: "Red Hat Text 500";
	color: ${colors.black};
	font-size: ${FONT_SIZES.size24};
	text-transform: none;
	letter-spacing: normal;
`;

export const TextParagraph2 = styled.p`
	font-family: "Red Hat Text 400";
	color: ${colors.grey};
	font-size: ${FONT_SIZES.size24};
	text-transform: none;
	letter-spacing: normal;
`;
export const TextParagraph3 = styled.p`
	font-family: "Red Hat Text 500";
	color: ${colors.black};
	font-size: ${FONT_SIZES.size18};
	text-transform: none;
	letter-spacing: normal;
`;

export const TextDescription1 = styled.p`
	font-family: "Red Hat Text 400";
	color: ${colors.grey};
	font-size: ${FONT_SIZES.size14};
	text-transform: none;
	letter-spacing: normal;
`;

export const TextDescription2 = styled.p`
	font-family: "Red Hat Text 500";
	color: ${colors.grey};
	font-size: ${FONT_SIZES.size11};
	text-transform: none;
	letter-spacing: normal;
`;
