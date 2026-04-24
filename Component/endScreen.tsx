'Use Client' 
import React from "react";
export default function EndScreen() {
  return (
    <div>
    {/* Logo Wrapper */}
    <div className= "w-full absolute ">
  
    <div className="flex flex-col w-[25rem] pl-[2rem] pt-[1rem]">
      <h1 className=" text-xl font-bold text-green-800">BICA</h1>
      <p className= "w-full">OPD for Better Informed Care Access</p>
    </div>
    </div>

    {/* End Wrapper */}
    <div className="flex flex-col gap-[10px] flex-1 items-center  justify-center bg-zinc-50 font-sans dark:bg-black h-screen">
      <h1 className="text-[4rem] font-bold">Please, proceed to your assigned clinic. </h1>
      <p className="w-[40rem] text-[1.25rem] flex text-center text-stone-500 ">Thank You!</p>
    </div>

    </div>
  );
}