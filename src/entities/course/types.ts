export type Course = {
  id: string;
  name: string;
  image: string;
  bgColor: string;
  tags: string[];
};

export type Filter = {
  id: SystemFilter | string;
  value: string;
};

export enum SystemFilter {
  ALL = 'ALL',
}
