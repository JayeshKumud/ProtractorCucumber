export interface Data {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface Ad {
  company: string;
  url: string;
  text: string;
}

export interface iUsers {
  data: Data;
  ad: Ad;
}
