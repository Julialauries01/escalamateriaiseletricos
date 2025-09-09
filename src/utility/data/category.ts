interface Category {
  name: string;
  persantine: string;
  icon: string;
  image: string;
  item: number;
  num: number;
}

const category: Category[] = [
  {
    persantine: "30%",
    icon: "fi fi-tr-peach",
    image: process.env.NEXT_PUBLIC_URL + "/shop-left-sidebar-col-3.html",
    name: "Fruits",
    item: 320,
    num: 1,
  },
  {
    persantine: "",
    icon: "fi fi-tr-bread",
    image: process.env.NEXT_PUBLIC_URL + "/shop-left-sidebar-col-3.html",
    name: "Bakery",
    item: 65,
    num: 2,
  },
  {
    persantine: "15%",
    icon: "fi fi-tr-corn",
    image: process.env.NEXT_PUBLIC_URL + "/shop-left-sidebar-col-3.html",
    name: "Vegetables",
    item: 548,
    num: 3,
  },
  {
    persantine: "10%",
    icon: "fi fi-tr-coffee-pot",
    image: process.env.NEXT_PUBLIC_URL + "/shop-left-sidebar-col-3.html",
    name: "Dairy & Milk",
    item: 48,
    num: 4,
  },
  {
    persantine: "",
    icon: "fi fi-tr-french-fries",
    image: process.env.NEXT_PUBLIC_URL + "/shop-left-sidebar-col-3.html",
    name: "Snack & Spice",
    item: 59,
    num: 5,
  },
  {
    persantine: "",
    icon: "fi fi-tr-hamburger-soda",
    image: process.env.NEXT_PUBLIC_URL + "/shop-left-sidebar-col-3.html",
    name: "Juice & Drinks",
    item: 845,
    num: 6,
  },
  {
    persantine: "",
    icon: "fi fi-tr-shrimp",
    image: process.env.NEXT_PUBLIC_URL + "/shop-left-sidebar-col-3.html",
    name: "Seafood",
    item: 652,
    num: 1,
  },
  {
    persantine: "20%",
    icon: "fi fi-tr-popcorn",
    image: process.env.NEXT_PUBLIC_URL + "/shop-left-sidebar-col-3.html",
    name: "Fast Food",
    item: 320,
    num: 2,
  },
  {
    persantine: "",
    icon: "fi fi-tr-egg",
    image: process.env.NEXT_PUBLIC_URL + "/shop-left-sidebar-col-3.html",
    name: "Eggs",
    item: 154,
    num: 3,
  },
];
export default category;
