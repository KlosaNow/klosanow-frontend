import { useState } from "react";
import { FormikStep, FormikStepper } from "./components/FormikStepper";
import { initialValues } from "./utils/lessonData";
import { createLessonSteps } from "./utils/lessonSteps";

export default function CreateLesson() {
  const [step, setStep] = useState(0);
  const nextStep = () => {
    setStep(step + 1);
  };
  return (
    <>
      <FormikStepper
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        isError={false}
        isLoading={false}
        step={step}
        setStep={setStep}
      >
        {createLessonSteps.map(({ validationSchema, Component, name }) => (
          <FormikStep
            key={name}
            name={name}
            onSubmit={() => {
              console.log("something went wrong");
            }}
            validationSchema={validationSchema}
          >
            <Component nextFunc={nextStep} />
          </FormikStep>
        ))}
      </FormikStepper>
    </>
  );
}
