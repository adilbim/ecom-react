interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

export const navigation: NavigationItem[] = [
  { name: "Products", href: "/products", current: true },
  { name: "Women", href: "#", current: false },
  { name: "Men", href: "#", current: false },
  { name: "Stores", href: "#", current: false },
];