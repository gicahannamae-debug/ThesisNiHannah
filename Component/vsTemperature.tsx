'Use Client'
import React from "react";
export default function vsTemperature (){
     return (
      
   <div className="hidden">
      {/* Logo Wrapper */}
      <div className="w-full absolute ">
  
    <div className="flex flex-col w-[25rem] pl-[2rem] pt-[1rem]">
      <h1 className=" text-xl font-bold text-green-800">BICA</h1>
      <p className= "w-full">Better Informed Care Access</p>
    </div>
    </div>

      <div>
      <div className={` h-screen flex flex-col gap-[0.9rem] items-center justify-center bg-stone-100`}>

      <div className=" flex flex-col text-center w-full justify-center align-center "> 
        <h1 className="text-[2.7rem] font-bold font-Sans-serif text-green-900"> Vital Sign Measurement </h1>
        <p className="text-[1.51rem] font-bold font-serif"> Patient Temperature (T)</p>
      </div>

      <div className=" flex flex-row">

      {/* Procedure Wrapper */}
      <div className="border border-dashed rounded-md p-[1rem] w-[50rem] bg-white">
      <h1 className="text-[1.7rem] font-bold font-serif">Procedures</h1>
      <label className="text-[1.51rem]  font-Sans-serif">Please follow the instructions to take your Temperature.</label>
      <p className="text-[1.51rem]  font-Sans-serif" >Step 1: Pick up the Temperature Gun located on the right side of the kiosk</p>
      <p className="text-[1.51rem]  font-Sans-serif">Step 2: Point the device at the center of your forehead</p>
      <p className="text-[1.51rem]  font-Sans-serif">Step 3: Press the trigger button to take your reading.</p>
      <p className="text-[1.51rem]  font-Sans-serif">Step 4: Input the reading in the box on the right side and click Proceed. </p>
      </div>

      {/* Temperature Measurement */}
      <div className= " border-gray p-[1rem] w-[27rem] bg-stone-100 gap-[1.5rem] flex flex-col">
        <div className=" flex flex-col text-center w-full justify-center align-center ">
        <h1 className="text-[1.5rem] font-bold font-serif pt-[1rem]"> Temperature Reading</h1> 
        </div>


        <div className="w-full flex justify-center ">
        <form action="" className="flex flex-col w-[20rem] gap-[10]">

        <section className="flex flex-col">
        <label className="text-[1.51rem]  font-Sans-serif">Temperature (°C):</label>
        <input type="Text" className=" text-[1.51rem] font-Sans-serif border border-stone-300 bg-stone-200 rounded-sm px-[0.5rem] py-[0.25rem]" placeholder=" Input Here"/>
        </section>

        <button className=" text-[1.6rem] font-Sans-serif bg-blue-600 text-white px-[1rem] py-[.5rem] rounded-md hover:cursor-pointer">Proceed</button>
        </form>
        </div>
        </div>
      </div>
      </div>
      </div> 
      </div>
    ); 
}