export interface Country {
    code: string;
    name: string;
    continent: {
      name: string;
    };
    languages: {
      name: string;
    }[];
    currency: string;
    states: {
      name: string;
    }[];
  }
  