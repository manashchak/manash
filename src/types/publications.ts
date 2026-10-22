export interface Publication {
  title: string;
  authors: string;
  year: number | string;
  venue: string;
  link: string | null;
  featured: boolean;
}

export interface PublicationsType {
  authorName: string;
  items: Publication[];
}
