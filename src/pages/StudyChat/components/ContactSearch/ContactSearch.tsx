import React from "react";
import {
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { Formik, FormikHelpers } from "formik";
import { SearchIcon } from "../../assets/svgs";

const ContactSearch: React.FC = () => {
  const intialValue = {
    search: "",
  };

  const handleSubmit = (
    value: typeof intialValue,
    helpers: FormikHelpers<typeof intialValue>
  ) => {
    if (!value.search) {
      helpers.setErrors({ search: "Search not found" });
    }

    console.log("Searched result: ", value);
  };
  return (
    <Formik initialValues={intialValue} onSubmit={handleSubmit}>
      {({ values, errors, handleBlur, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <FormControl isInvalid={!!errors.search}>
            <InputGroup>
              <InputLeftElement>
                <SearchIcon />
              </InputLeftElement>
              <Input
                name="search"
                value={values.search}
                w="300px"
                placeholder="Search by name"
                onBlur={handleBlur}
                onChange={handleChange}
                focusBorderColor="#7B58F4"
                background="#ffffff"
                borderRadius="50px"
                border="none"
              />
            </InputGroup>
            <FormErrorMessage>{errors.search}</FormErrorMessage>
          </FormControl>
        </form>
      )}
    </Formik>
  );
};

export default ContactSearch;
