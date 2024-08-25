"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./lib/redux/store";

type Props = {};
const StoreProvider = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};
export default StoreProvider;
