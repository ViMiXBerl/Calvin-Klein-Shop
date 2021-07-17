import { TextProps } from "components/Text/types";
import {
	TextHeading1,
	TextHeading2,
	TextHeading3,
	TextHeading4,
	TextHeading5,
	TextHeading6,
	TextParagraph1,
	TextParagraph2,
	TextParagraph3,
	TextDescription1,
	TextDescription2,
	TextButton,
	TextDescription3,
	TextDescription4,
	TextDescription5,
} from "components/Text/TextStyles";

const Text = ({
	variant = "p",
	children,
	variantNumber = 0,
}: TextProps): any => {
	switch (variant) {
		case "h1":
			return <TextHeading1>{children}</TextHeading1>;

		case "h2":
			return <TextHeading2>{children}</TextHeading2>;

		case "h3":
			return <TextHeading3>{children}</TextHeading3>;

		case "h4":
			return <TextHeading4>{children}</TextHeading4>;

		case "h5":
			return <TextHeading5>{children}</TextHeading5>;
		case "h6":
			return <TextHeading6>{children}</TextHeading6>;

		case "p1":
			return <TextParagraph1>{children}</TextParagraph1>;

		case "p2":
			return <TextParagraph2>{children}</TextParagraph2>;

		case "p3":
			return <TextParagraph3>{children}</TextParagraph3>;
		case "p4":
			return <TextButton>{children}</TextButton>;

		case "d1":
			return <TextDescription1>{children}</TextDescription1>;

		case "d2":
			return <TextDescription2>{children}</TextDescription2>;
		case "d3":
			return <TextDescription3>{children}</TextDescription3>;
		case "d4":
			return <TextDescription4>{children}</TextDescription4>;
		case "d5":
			return <TextDescription5>{children}</TextDescription5>;
		default:
			return <TextDescription2>{children}</TextDescription2>;
	}
};

export default Text;
