import { Alert } from "react-bootstrap";
import { MessageProps } from "components/Message/types";

const Message = ({ variant = "info", children }: MessageProps) => {
	return <Alert variant={variant}>{children}</Alert>;
};

export default Message;
