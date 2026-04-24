'use client' 
import React from "react";

interface CatProps {
  isPatientCat:boolean;
  // setIsPatientCat: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function PatientCategory ({isPatientCat}:CatProps){

console.log("Props PatienCat received:", {isPatientCat});

     return (
      
    <div>
    {/* Logo Wrapper */}
    <div className="w-full absolute ">
  
    <div className="flex flex-col w-[25rem] pl-[2rem] pt-[1rem]">
      <h1 className=" text-xl font-bold text-green-900">BICA</h1>
      <p className= "w-full">Better Informed Care Access</p>
    </div>
    </div>

      <div>
      <div className={` h-screen flex flex-col gap-[0.9rem] items-center justify-center bg-stone-100`}>

      {/* Patient Category Wrapper */}
        <div className=" flex flex-col text-center w-full justify-center align-center ">
        <h1 className="text-[2.7rem] font-bold font-Sans-serif text-green-900">Patient Category</h1>
        <p className="text-[1.51rem] font-serif">Please select your category.</p>
        </div>

     <div className="flex flex-row gap-[8rem]">
        <button className=" w-[16rem] h-[16rem] text-[3rem] font-semibold bg-green-600 text-white px-[1rem] py-[.5rem] rounded-md hover:cursor-pointer"> Old Patient</button>
        <button className=" w-[16rem] h-[16rem] text-[3rem] font-semibold bg-blue-600 text-white px-[1rem] py-[.5rem] rounded-md hover:cursor-pointer"> New Patient</button>
        <button className=" w-[16rem] h-[16rem] text-[3rem] font-semibold bg-yellow-600 text-white px-[1rem] py-[.5rem] rounded-md hover:cursor-pointer"> Referred Patient</button>
        </div>
     </div>

      </div>
      </div> 
     ); 
}