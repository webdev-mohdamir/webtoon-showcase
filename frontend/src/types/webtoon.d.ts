export type Webtoon = {
  _id: string;
  title: string;
  imageUrl?: string;
  description: string;
  writer?: string;
  art?: string;
  reads?: string;
  votes: {
    manhwa: number;
    anime: number;
  };
  createdAt?: string;
  updatedAt?: string;
};
