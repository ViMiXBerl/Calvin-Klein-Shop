import { StyledSpinner } from "components/Loader/LoaderStyled";
import { LoaderProps } from "components/Loader/types";

const Loader = ({ children }: LoaderProps): any => {
	return (
		<StyledSpinner animation='border' role='status'>
			<span className='sr-only'> Loading...</span>
		</StyledSpinner>
	);
};

export default Loader;
