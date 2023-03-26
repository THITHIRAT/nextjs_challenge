import React from 'react';
import Logo from '../components/Logo/Logo'
import LoginForm from '../components/LoginForm/LoginForm';

const Home = (): JSX.Element => {
  return (
    <div className="flex justify-center h-screen w-full overflow-y-hidden bg-black">
      <div className="flex flex-col w-80">
        <Logo />
        <h1 className="mt-[60px] mb-2text-lg text-white font-medium">Log In</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default Home;
