'use client';
import React from 'react';

const RegisterPage = () => {
  return (
   <div className="relative w-[1095px] h-[867px] rounded-[8px] bg-white opacity-100"> 
  <div className="absolute w-[507px] h-[668px] top-[94px] left-[508px] gap-[16px] opacity-100 bg-white rounded-[8px] flex flex-col">
    
    {/* Inner Block - 478px */}
    <div className="w-[507px] h-[478px] gap-[44px] opacity-100 bg-white rounded-[8px] flex flex-col">
      
      {/* ✅ Header + Description */}
      <div className="w-[507px] h-[86px] flex flex-col gap-[20px] opacity-100">
        <h1 className="w-[507px] h-[41px] text-[32px] leading-[41px] font-semibold text-[#100F14] font-['Poppins']">
          Register to get started
        </h1>
       
       <p className="w-[507px] h-[25px] text-base leading-[25px] font-normal text-[#49475A] opacity-100">
  Already have an account?{' '}
  <span
    className="font-semibold underline underline-offset-0 decoration-solid text-base leading-[25px] tracking-[0.5%] text-blue-700 cursor-pointer transition-opacity duration-[1000ms] ease-in"
    onClick={() => {
      // Replace this with your actual overlay-switching logic
      console.log('Swap to Login overlay');
    }}
  >
    Login
  </span>
</p>

      </div>

    </div>
  </div>
</div>

  );
};

export default RegisterPage;