export interface CarType {
  id: string;
  name: string;
  nameLt: string;
  description: string;
  descriptionLt: string;
  image: string;
}

export interface Service {
  id: string;
  name: string;
  nameLt: string;
  description: string;
  descriptionLt: string;
  prices: {
    [carTypeId: string]: number;
  };
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  textLt: string;
  date: string;
}

export interface Language {
  code: 'lt' | 'en';
  name: string;
  flag: string;
}