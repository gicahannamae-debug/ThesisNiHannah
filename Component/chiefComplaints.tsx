'use client'
import React, { useState } from "react";

// This maps symptoms to your 12 clinics automatically
const CLINIC_MAPPING = {
  "Head & Neck": [
    { label: "Ear Pain / Hearing Loss", clinic: "ENT" },
    { label: "Blurry Vision / Eye Pain", clinic: "Ophthalmology" },
    { label: "Toothache / Gum Swelling", clinic: "Dental" },
    { label: "Persistent Headache", clinic: "Family Medicine" }
  ],
  "Chest & Breathing": [
    { label: "Chronic Cough (>2 weeks)", clinic: "Pulmonary" },
    { label: "Asthma Flare-up", clinic: "Pulmonary" },
    { label: "Chest Pain / Tightness", clinic: "ER/Cardiology" },
    { label: "Difficulty Breathing", clinic: "ER" }
  ],
  "Stomach & Body": [
    { label: "Abdominal Pain / Hernia", clinic: "Surgery" },
    { label: "Severe Vaginal Bleeding", clinic: "OB-GYN" },
    { label: "Prenatal / Pregnancy Checkup", clinic: "OB-GYN" },
    { label: "Dialysis Follow-up", clinic: "Nephrology" }
  ],
  "Others": [
    { label: "Bone Fracture / Joint Pain", clinic: "Orthopedics" },
    { label: "Child Fever / Vaccination", clinic: "Pediatrics" },
    { label: "Tumor / Chemo Follow-up", clinic: "Oncology" },
    { label: "Anxiety / Mental Health", clinic: "Psychiatry" }
  ]
};

export default function ChiefComplaints() {
  const [selectedCategory, setSelectedCategory] = useState("Head & Neck");
  const [selectedSymptom, setSelectedSymptom] = useState("");

  return (
    <div className="relative min-h-screen bg-stone-200 hidden">
    <div className="relative min-h-screen bg-stone-200 overflow-x-hidden">
      
      {/* Logo Wrapper */}
      <div className="absolute top-0 left-0 w-full z-10">
        <div className="flex flex-col w-[25rem] pl-[2rem] pt-[1.5rem]">
          <h1 className="text-2xl font-bold text-green-500">BICA</h1>
          <p className="text-black font-sans">Better Informed Care Access</p>
        </div>
      </div>

      <div className="flex flex-row items-start justify-center gap-8 pt-[10rem] px-8 h-full">
        
        {/* Left Side: Category Selection */}
        <div className="flex flex-col gap-4 w-[20rem]">
          <h2 className="text-green-900 text-xl font-serif mb-2">Where is the problem?</h2>
          {Object.keys(CLINIC_MAPPING).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`p-4 rounded-lg text-left font-bold transition-all ${
                selectedCategory === cat 
                ? "bg-blue-600 text-white scale-105 shadow-lg" 
                : "bg-white text-stone-800 hover:bg-blue-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Middle: Symptom Grid */}
        <div className="flex flex-col flex-1 max-w-[50rem]">
          <div className="bg-white rounded-md p-8 shadow-2xl border-t-4 border-blue-600">
            <h2 className="text-[1.8rem] font-serif text-green-900 mb-2">Select your Main Concern</h2>
            <p className="text-gray-500 mb-6">Please choose the option that best describes how you feel.</p>

            <div className="grid grid-cols-2 gap-4">
              {CLINIC_MAPPING[selectedCategory].map((item) => (
                <button
                  key={item.label}
                  onClick={() => setSelectedSymptom(item.label)}
                  className={`p-6 border-2 rounded-xl text-center transition-all h-[100px] flex items-center justify-center font-medium ${
                    selectedSymptom === item.label
                    ? "border-blue-600 bg-blue-50 text-green-900 ring-2 ring-blue-600"
                    : "border-gray-200 hover:border-blue-300 text-stone-700"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* "Not Listed" Option */}
            <div className="mt-8 pt-6 border-t border-dashed">
              <button className="text-blue-600 font-bold hover:underline">
                My symptom is not listed here...
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Action Button */}
        <div className="flex flex-col gap-4">
            <button 
              disabled={!selectedSymptom}
              className={`text-[1.5rem] font-bold px-8 py-12 rounded-2xl shadow-xl transition-all ${
                selectedSymptom 
                ? "bg-gray-600 text-white hover:bg-blue-700 cursor-pointer scale-100" 
                : "bg-blue-500 text-gray-300 cursor-not-allowed grayscale"
              }`}
            >
              Next <br/> Step →
            </button>
            <p className="text-white bg-stone-600 rounded-md text-center">Step 2 of 4</p>
        </div>

      </div>
    </div>
    </div>
  );
}