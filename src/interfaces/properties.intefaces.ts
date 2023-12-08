export interface IAddressCreate {
	district: string;
	zipCode: string;
	number?: string;
	city: string;
	state: string;
}

export interface IPropertyCreate {
	value: number;
	size: number;
	address: IAddressCreate;
	categoryId: string;
}

