import { useState } from "react";
import { FormikStep, FormikStepper } from "./components/FormikStepper";
import { createLessonSteps } from "./utils/lessonSteps";

const initialValues = {
  title: "",
  note: "",
  thumbnail: "",
  content: "",
  author: {
    name: "",
    bio: "",
  },
};

export default function CreateLesson() {
  const [step, setStep] = useState(0);
  const nextStep = () => {
    setStep(step + 1);
  };
  return (
    <>
      <FormikStepper
        initialValues={initialValues}
        onSubmit={() => {}}
        isError={false}
        isLoading={false}
        step={step}
        setStep={setStep}
      >
        {createLessonSteps.map(({ validationSchema, Component, name }) => (
          <FormikStep
            key={name}
            name={name}
            onSubmit={() => {}}
            validationSchema={validationSchema}
          >
            <Component nextFunc={nextStep} />
          </FormikStep>
        ))}
      </FormikStepper>
    </>
  );
}
