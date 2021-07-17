import { ButtonProps } from "components/Button/types";
import { ButtonStyled } from "components/Button/ButtonStyled";

const Button = ({ children, type, disabled }: ButtonProps): any => {
	return (
		<ButtonStyled type={type} disabled={disabled}>
			{children}
		</ButtonStyled>
	);
};

export default Button;
