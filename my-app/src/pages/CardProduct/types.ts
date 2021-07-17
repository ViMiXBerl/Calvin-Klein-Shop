import { ReactNode } from "react";

export interface CardProductProps {
	vendorCode?: string;
	children?: ReactNode;
}

export interface RouteComponentProps<P> {
	match: match<P>;
}

export interface match<P> {
	params: P;
	isExact: boolean;
	path: string;
	url: string;
}

interface Props extends RouteComponentProps<CardProductProps> {}
