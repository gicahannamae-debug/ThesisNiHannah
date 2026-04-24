'use client'
import React from "react";

export type SummaryScreenProps = {
  patientName?: string;
  age?: string | number;
  gender?: string;
  bpSys?: string | number;
  bpDia?: string | number;
  hr?: string | number;
  spo2?: string | number;
  temperature?: string | number;
  complaints?: string;
  clinic?: string;
  queueCode?: string;
};

export default function SummaryScreen({
  patientName = "---",
  age = "---",
  gender = "---",
  bpSys = "--",
  bpDia = "--",
  hr = "--",
  spo2 = "--",
  temperature = "--",
  complaints = "---",
  clinic = "---",
  queueCode = "---",
}: SummaryScreenProps) {
  return (
    // Main Wrapper - Added relative to contain children and overflow-hidden to prevent scroll issues
    <div className="hidden">
    <div className="relative min-h-screen bg-stone-100 overflow-x-hidden">
      
      {/* Logo Wrapper - Kept absolute but removed 'border' to look cleaner */}
      <div className="absolute top-0 left-0 w-full z-10">
        <div className="flex flex-col w-[25rem] pl-[2rem] pt-[1.5rem]">
          <h1 className="text-2xl font-bold text-green-900">BICA</h1>
          <p className="text-black">Better Informed Care Access</p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-row items-center justify-center gap-12 pt-[8rem] pb-8 px-4 h-full min-h-screen">
        
        {/* Summary Results (Left Side) */}
        <form action="" className="flex flex-col">
          {/* Standardized the width to 50rem so it doesn't conflict with the form width */}
          <div className="border border-dashed border-green-700 rounded-md p-[2rem] w-[50rem] bg-white shadow-2xl">
            <div className="result-card">
              <h2 className="text-[2rem] font-serif text-green-900 mb-6 border-b pb-2">Patient Summary Result</h2>

              {/* Patient Information */}
              <div className="mb-6">
                <h2 className="text-[1.2rem] font-bold text-green-800 mb-3">Patient Information</h2>
                <div className="flex flex-row justify-between pr-[2rem]">
                  <div className="pl-[1rem]">
                    <h2 className="text-[1rem] font-bold font-serif text-black">Full Name</h2>
                    <p className="text-[1.1rem] font-medium">{patientName}</p> 
                  </div>
                  <div> 
                    <h2 className="text-[1rem] font-bold font-serif text-black">Age</h2>  
                    <p className="text-[1.1rem] font-medium">{age}</p>
                  </div>
                  <div>
                    <h2 className="text-[1rem] font-bold font-serif text-black">Gender</h2>
                    <p className="text-[1.1rem] font-medium">{gender}</p>
                  </div>
                </div>
              </div>
               
              <hr className="my-4" />

              {/* Vital Signs Section */}
              <div className="vitals-section mb-6">
                <h5 className="text-[1.1rem] font-bold text-green-800 mb-3">Vital Signs:</h5>
                <div className="grid grid-cols-4 gap-4 pl-[1rem]">
                  <div>
                    <h5 className="text-[0.9rem] font-bold font-serif text-black">Blood Pressure</h5>
                    <p className="text-[1rem] text-black">Sys: {bpSys} mmHg</p>
                    <p className="text-[1rem] text-black">Dia: {bpDia} mmHg</p>
                  </div>
                  <div>
                    <h5 className="text-[0.9rem] font-bold font-serif text-black">Heart Rate</h5>
                    <p className="text-[1rem] text-black">{hr} bpm</p>
                  </div>
                  <div>
                    <h5 className="text-[0.9rem] font-bold font-serif text-black">Oxygen Sat</h5>
                    <p className="text-[1rem] ">SpO2 {spo2}%</p>
                  </div>
                  <div>
                    <h5 className="text-[0.9rem] font-bold font-serif text-black">Temperature</h5>
                    <p className="text-[1rem] text-black">{temperature} °C</p>
                  </div>
                </div>
              </div>

              <hr className="my-4" />

              {/* Chief Complaints Section */}
              <div className="mb-6">
                <h4 className="text-[1.1rem] font-bold text-green-800 mb-2">Chief Complaints:</h4>
                <p className="pl-[1rem] text-[1.1rem] italic text-black">{complaints}</p>
              </div>

              <hr className="my-4" />

              {/* Code & Clinic Section */}
              <div className="flex flex-row justify-between items-center bg-green-50 p-4 rounded-lg">
                <div> 
                  <h3 className="text-[1rem] font-bold font-serif text-black">Queueing Code</h3>
                  <p className="text-[2.5rem] font-bold text-green-900 leading-tight">{queueCode}</p>
                </div>
                <div className="text-right">
                  <h4 className="text-[1rem] font-bold font-serif text-black">Assigned Clinic</h4>
                  <p className="text-[1.5rem] font-bold text-blue-900">{clinic}</p>
                </div>
              </div>

            </div>
          </div>
        </form>

        {/* Action Button (Right Side) */}
        <div className="flex items-center">
          <button className="text-[1.8rem] font-bold bg-blue-600 text-white px-[3rem] py-[1.5rem] rounded-xl hover:bg-blue-700 hover:scale-105 transition-all shadow-xl cursor-pointer">
            Print / Finish
          </button>
        </div>

      </div>
    </div>
    </div>
  );
}