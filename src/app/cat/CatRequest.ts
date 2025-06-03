export type TCatBreed = {
  id: string;
  name: string;
  temperament: string;
  origin: string;
  image: {
    height: number;
    id: string;
    url: string;
    width: number;
  },
  description: string;
  country_codes: string;
  country_code: string;
  life_span: string;
  wikipedia_url: string;
  intelligence: string;
  weight: {
    imperial: string;
    metric: string;
  };
};

export type TCatImageResponse = {
  id: string;
  url: string;
  breeds: TCatBreed[];
};