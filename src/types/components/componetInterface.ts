import { FormikConfig, FormikValues } from "formik";
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

export interface LessonCardProps {
  bgColor: string;
  buttonText: string;
  buttonTextColor: string;
  cardTitle: string;
  cardDesc: string;
  cardSrc: string;
  buttonLink?: string;
  template?: string;
  onClick?: () => void;
}

export interface FormikStepProps
  extends Pick<
    FormikConfig<FormikValues>,
    "children" | "validationSchema" | "onSubmit"
  > {
  children: React.ReactNode;
  name: string;
}

export interface TWizardProps extends FormikConfig<FormikValues> {
  isError: boolean;
  isLoading: boolean;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export interface FormikStepComponentProps {
  nextFunc?: () => void;
  step?: number;
  setStep?: React.Dispatch<React.SetStateAction<number>>;
}
