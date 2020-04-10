export interface iMobile {
  personal: number;
  business: number;
  home: number;
}

export interface iCustomer {
  Id?: string;
  firstname?: string;
  lastname?: string;
  postalcode?: string;
  message?: string;
  mobile?: iMobile;
}

export interface iCustomers {
  customers: iCustomer[];
}
