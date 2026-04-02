export interface Flavor {
  id: string;
  name: string;
  description: string;
  color: string;
  image: string;
  isNew?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}
