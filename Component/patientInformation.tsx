'Use Client' 
import React from "react";


export default function patientInformation (){
    return (
      
      <div className="hidden">
      {/* Logo Wrapper */}
      <div className="w-full absolute ">
  
    <div className="flex flex-col w-[25rem] pl-[2rem] pt-[1rem]">
      <h1 className=" text-xl font-bold text-green-900">BICA</h1>
      <p className= "w-full">Better Informed Care Access</p>
    </div>
    </div>

      <div>
      <div className={` h-screen flex flex-col gap-[0.9rem] items-center justify-center bg-stone-100`}>


      {/* Patient Information Wrapper */}
        <div className=" flex flex-col text-center w-full justify-center align-center ">
        <h1 className="text-[2.7rem] font-bold font-Sans-serif text-green-900">Patient Information</h1>
        <p className="text-[1.51rem] font-serif">Please enter your details to begin.</p>
        </div>


        <div className="w-full flex justify-center ">
        <form action="" className="flex flex-col w-[20rem] gap-[10]">

        <section className="flex flex-col">
        <label className="text-[1.51rem] font-Sans-serif">First Name</label>
        <input type="Text" className="text-[1.51rem] font-Sans-serif border border-stone-300 bg-stone-200 rounded-sm px-[0.5rem] py-[0.25rem]" placeholder="e.g Hanna Mae"/>
        </section>

        <section className="flex flex-col">
        <label className="text-[1.51rem] font-Sans-serif">Last Name</label>
        <input type="Text" className=" text-[1.51rem] font-Sans-serif border border-stone-300 bg-stone-200 rounded-sm px-[0.5rem] py-[0.25rem]" placeholder="e.g Gica"/>
        </section>

        <section className="flex flex-col">
        <label className="text-[1.51rem]">Age</label>
        <input type="Text" className="text-[1.51rem] font-Sans-serif border border-stone-300 bg-stone-200 rounded-sm px-[0.5rem] py-[0.25rem]" placeholder="e.g 22"/>
        </section>

        <button className=" text-[1.6rem] font- bg-blue-600 text-white px-[1rem] py-[.5rem] rounded-md hover:cursor-pointer">Proceed</button>
        </form>
        </div>

      </div>
      </div> 
      </div>
    ); 
}