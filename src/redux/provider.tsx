"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

type Props = {
  children: Readonly<ReactNode>;
};

export const ReduxProvider = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};
