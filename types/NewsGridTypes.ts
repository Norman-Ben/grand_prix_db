export type NewsItemType = {
  image: {
    contentUrl: string;
  };
  description: string;
  url: string;
  name: string;
};
export type NewsType = {
  newsObj: {
    value: NewsItemType[];
  };
};
