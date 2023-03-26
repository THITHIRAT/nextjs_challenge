import React from 'react';
import LogoImage from '../../public/Logo.png';
import Image from "next/image";

const Logo = () => {
  return (
    <div className='flex justify-center	'>
      <Image src={LogoImage} alt="Logo" />
    </div>
  );
};

export default Logo;
