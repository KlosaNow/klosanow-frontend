import { Box } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";
import {
  FormikStepProps,
  TWizardProps,
} from "../../../types/components/componetInterface";

export function FormikStep({ children }: FormikStepProps): any {
  return children;
}

export function FormikStepper({ ...props }: TWizardProps) {
  const childrenArray = React.Children.toArray(
    // @ts-ignore
    props.children
  ) as React.ReactElement<FormikStepProps>[];
  const currentChild = childrenArray[props.step];

  function isLastStep() {
    return props.step === childrenArray.length - 1;
  }

  return (
    <Box>
      <Formik
        {...props}
        validationSchema={currentChild.props.validationSchema}
        onSubmit={(values, helpers) => {
          console.log("sumbit");
          helpers.setSubmitting(true);
          if (props.isError === true) {
            props.setStep(0);
          } else if (!isLastStep()) {
            props.setStep(props.step + 1);
          } else {
            props.onSubmit(values, helpers) as Promise<any>;
          }

          helpers.setSubmitting(false);
        }}
      >
        <Form>{currentChild}</Form>
      </Formik>
    </Box>
  );
}
