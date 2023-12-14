"use client";
import {Toaster} from "react-hot-toast"
import React, { FC, ReactNode } from "react";

interface ProviderProps {
  children: ReactNode;
}

const Providers: FC<ProviderProps> = ({children}) => {
  return <>
    <Toaster position="top-center" reverseOrder={false}/>
    {children}
  </>;
};

export default Providers;
