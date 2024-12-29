import { CreditCard, Explore, Home } from "@/icons";
import { JSX } from "react";

export type MenuProps = {
  id: number;
  label: string;
  icon: JSX.Element;
  path: string;
  section?: boolean;
  integration?: boolean;
};

export const LANDING_PAGE_MENU: MenuProps[] = [
  {
    id: 0,
    label: "Home",
    icon: <Home key={0} />,
    path: "/",
    section: true,
  },
  {
    id: 1,
    label: "Pricing",
    icon: <CreditCard key={1} />,
    path: "#pricing",
    section: true,
  },
  {
    id: 2,
    label: "Explore",
    icon: <Explore key={2} />,
    path: "/explore",
  },
];
