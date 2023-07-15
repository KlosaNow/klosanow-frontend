import React from "react";

export interface dashboardLayoutInterface {
  children?: React.ReactNode | JSX.Element;
}

export interface headerInterface {
  pageName?: string;
  link?: string;
}

export interface buttonInterface {
  children: string;
  action: () => void;
  buttonStyle: string;
  buttonSize: string;
  width: string;
}
