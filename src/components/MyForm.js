import React from 'react';
import { Formik, Form, Field } from 'formik';

const MyForm = () => {

  const initialValues = {
    name: '',
    email: '',
  };

  // Define the validation function
  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Name is required';
    } else if (values.name.length < 3) {
      errors.name = 'Name must be at least 3 characters';
    }

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email is invalid';
    }

    return errors;
  };

  const handleSubmit = (values) => {
    console.log(values);
  };


  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <h1>6.Formik:-</h1>
          <div>
            <label htmlFor="name">Name</label>
            <Field id="name" name="name" type="text" />
            {touched.name && errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Field id="email" name="email" type="email" />
            {touched.email && errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  )
}

export default MyForm
