'use client' 
import React from 'react';

interface CatProps {
  isPatientCat:boolean;
  setIsPatientCat: React.Dispatch<React.SetStateAction<boolean>>;
}


export default function WelcomeScreen({isPatientCat, setIsPatientCat}:CatProps) {

console.log("Props received:", { isPatientCat, setIsPatientCat });

  function handleForm (){
    setIsPatientCat(!isPatientCat);
  }

  return (
    <div className={``}>
    {/* Logo Wrapper */}
    <div className= "w-full absolute ">
  
    <div className="flex flex-col w-[25rem] pl-[2rem] pt-[1rem]">
      <h1 className=" text-xl font-bold text-green-900">BICA</h1>
      <p className= "w-full">Better Informed Care Access</p>
    </div>
    </div>

    {/* Welcome Wrapper */}
    <div className="flex flex-col gap-[10px] flex-1 items-center  justify-center bg-zinc-50 font-sans dark:bg-black h-screen">
      <h1 className="text-[6rem] font-bold font-Sans-serif text-green-900 ">Welcome to OPD</h1>
      <p className="w-[40rem] text-[1.51rem] flex text-center text-stone-700 ">Please use this Kiosk to begin with self triage. This will help us understand your need and expedite your care.</p>
      <button onClick={handleForm} className=" text-[1.875rem] font-Sans-serif hover:cursor-pointer bg-blue-600 text-white px-[1.875rem] py-[.5rem] rounded-md">Start Self Service Triage </button>
    </div>

    </div> 
  ); 
}