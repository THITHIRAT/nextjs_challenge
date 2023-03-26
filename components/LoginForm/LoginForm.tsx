import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import ReactHookField from '../ReactHookField/ReactHookField';

const defaultInitialValues = {
  username: '',
  password: '',
};

const LoginForm = () => {
  const methods = useForm({
    defaultValues: defaultInitialValues
  });

  const onSubmit = data => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="mt-4">
          <ReactHookField label="Username" name="username" required />
        </div>
        <div className="mt-4">
          <ReactHookField label="Password" name="password" required />
        </div>
        <div className="mt-8">
          <button className="w-full h-11 bg-white rounded-lg" type="submit">
            Log In
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
