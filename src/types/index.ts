export interface MenuItem {
  label: string;
  url?: string;
  children?: MenuItem[];
}

// define a type for the user returned by https://randomuser.me/api
