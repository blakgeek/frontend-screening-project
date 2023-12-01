export type MenuItem = {
  text: string;
  url?: string;
  children?: MenuItem[];
};

// define a type for the user returned by https://randomuser.me/api
