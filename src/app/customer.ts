export type SocialList =
  | 'Facebook'
  | 'Twitter'
  | 'Instagram'
  | 'Linkedin';

export interface Customer {
    id?: number;
    firstname: string;
    lastname: string;
    country: string;
    nationality: string;
    designation: string;
    company: string;
    workexperience: number;
    cv: string;
    datasource: SocialList;
}