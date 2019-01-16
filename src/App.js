import React from 'react';
import { Form, Field } from 'react-final-form'
import {
  Container, FormBox, InputBox, Input, ErrMsg, SelectErr, TermLabel, Button,
} from './styles'

/* eslint-disable jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control, no-console */

const App = () => (
  <Container>
    <Form
      onSubmit={values => console.log(values)}
      initialValues={{ sex: 'male' }}
      render={({ handleSubmit, values, submitting }) => (
        <FormBox
          onSubmit={handleSubmit}
        >
          <Field
            name="firstName"
            placeholder="First name"
            validate={value => (value ? undefined : true)}
          >
            {({ input, meta, placeholder }) => (
              <InputBox>
                <label>First name</label>
                <Input
                  {...input}
                  placeholder={placeholder}
                  error={meta.error && meta.touched}
                />
                {meta.error && meta.touched ? <ErrMsg>This field cannot be empty</ErrMsg> : null}
              </InputBox>
            )}
          </Field>
          <Field
            name="lastName"
            placeholder="Last name"
            validate={value => (value ? undefined : true)}
          >
            {({ input, meta, placeholder }) => (
              <InputBox>
                <label>Last name</label>
                <Input
                  {...input}
                  placeholder={placeholder}
                  error={meta.error && meta.touched}
                />
                {meta.error && meta.touched ? <ErrMsg>This field cannot be empty</ErrMsg> : null}
              </InputBox>
            )}
          </Field>
          <Field
            name="email"
            placeholder="Email"
            validate={(value) => {
              const emailReg = /\S+@\S+\.\S+/
              if (!value) return 'This field cannot be empty'
              if (!emailReg.test(value)) return 'Invalid Email'
              return false
            }}
          >
            {({ input, meta, placeholder }) => (
              <InputBox>
                <label>Email</label>
                <Input
                  {...input}
                  type="email"
                  placeholder={placeholder}
                  error={meta.error && meta.touched}
                />
                {meta.error && meta.touched ? <ErrMsg>{meta.error}</ErrMsg> : null}
              </InputBox>
            )}
          </Field>
          <Field
            name="password"
            placeholder="Password"
            validate={(value) => {
              if (!value) return 'This field cannot be empty'
              if (value.length < 6) return 'Password should have at least 6 characters'
              return false
            }}
          >
            {({ input, meta, placeholder }) => (
              <InputBox>
                <label>Password</label>
                <Input
                  {...input}
                  type="password"
                  placeholder={placeholder}
                  error={meta.error && meta.touched}
                />
                {meta.error && meta.touched ? <ErrMsg>{meta.error}</ErrMsg> : null}
              </InputBox>
            )}
          </Field>
          <Field
            name="confPassword"
            placeholder="Confirm password"
            validate={(value) => {
              if (!value) return 'This field cannot be empty'
              if (values.password !== value) return 'Password do not match'
              return false
            }}
          >
            {({ input, meta, placeholder }) => (
              <InputBox>
                <label>Confirm password</label>
                <Input
                  {...input}
                  type="password"
                  placeholder={placeholder}
                  error={meta.error && meta.touched}
                />
                {meta.error && meta.touched ? <ErrMsg>{meta.error}</ErrMsg> : null}
              </InputBox>
            )}
          </Field>
          <InputBox>
            <label>
              <Field
                component="input"
                type="radio"
                name="sex"
                value="male"
              />
            male
            </label>
            <label>
              <Field
                component="input"
                type="radio"
                name="sex"
                value="female"
              />
            female
            </label>
          </InputBox>
          <Field
            component="select"
            name="country"
            validate={valid => (valid ? undefined : 'Choose country')}
          >
            {({ input, meta }) => (
              <InputBox>
                <label>
                  Country:
                  <select {...input}>
                    <option />
                    <option value="poland">Poland</option>
                    <option value="japan">Japan</option>
                    <option value="france">France</option>
                  </select>
                </label>
                {meta.error && meta.touched ? <SelectErr>{meta.error}</SelectErr> : null}
              </InputBox>
            )}
          </Field>
          <Field
            component="checkbox"
            type="checkbox"
            name="terms"
            validate={validate => (validate ? undefined : true)}
          >
            {({ input, meta }) => (
              <InputBox>
                <input type="checkbox" {...input} />
                <TermLabel
                  error={meta.touched && meta.error}
                >
                 I have read and accept policies
                </TermLabel>
              </InputBox>
            )}
          </Field>
          <Button type="submit" disabled={submitting}>
          Create Account
          </Button>
          <pre>{JSON.stringify(values, undefined, 2)}</pre>
        </FormBox>
      )}
    />

  </Container>
)

export default App;
