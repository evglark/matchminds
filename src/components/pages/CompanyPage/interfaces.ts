export interface Company {
  createdAt: string;
  description: string;
  id: number;
  logo: string;
  name: string;
  updatedAt: string;
}

export interface Vacancy {
  companiesId: number;
  createdAt: string;
  jobTitle: string;
  id: number;
  updatedAt: string;
}
