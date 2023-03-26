import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import ReactHookField from "../ReactHookField/ReactHookField";
import { useRouter } from 'next/router'

const defaultInitialValues = {
  username: "",
  password: "",
};

const LoginForm = () => {
  const router = useRouter()
  const [errorMessage, setErrorMessage] = useState("");
  const methods = useForm({
    defaultValues: defaultInitialValues,
  });

  const onSubmit = (data) => {
    if (data?.username === "Bloom" && data?.password === "Hoshinlabs") {
      console.log("done");
      router.push('/home');
    } else {
      setErrorMessage("Incorrect username and password. Please try again");
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="mt-4">
          <ReactHookField label="Username" name="username" required />
        </div>
        <div className="mt-4">
          <ReactHookField label="Password" name="password" required />
        </div>
        {errorMessage && (
          <p className="mt-4 py-1 text-xs text-red-700">{errorMessage}</p>
        )}
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
