'use client'
import React, { useState } from "react";

const CLINIC_MAPPING = {
  "Head & Neck": [
    { label: "Ear Pain / Hearing Loss",   clinic: "ENT" },
    { label: "Blurry Vision / Eye Pain",  clinic: "Ophthalmology" },
    { label: "Toothache / Gum Swelling",  clinic: "Dental" },
    { label: "Persistent Headache",       clinic: "Family Medicine" },
  ],
  "Chest & Breathing": [
    { label: "Chronic Cough (>2 weeks)",  clinic: "Pulmonary" },
    { label: "Asthma Flare-up",           clinic: "Pulmonary" },
    { label: "Chest Pain / Tightness",    clinic: "ER / Cardiology" },
    { label: "Difficulty Breathing",      clinic: "ER" },
  ],
  "Stomach & Body": [
    { label: "Abdominal Pain / Hernia",      clinic: "Surgery" },
    { label: "Severe Vaginal Bleeding",      clinic: "OB-GYN" },
    { label: "Prenatal / Pregnancy Checkup", clinic: "OB-GYN" },
    { label: "Dialysis Follow-up",           clinic: "Nephrology" },
  ],
  "Others": [
    { label: "Bone Fracture / Joint Pain", clinic: "Orthopedics" },
    { label: "Child Fever / Vaccination",  clinic: "Pediatrics" },
    { label: "Tumor / Chemo Follow-up",    clinic: "Oncology" },
    { label: "Anxiety / Mental Health",    clinic: "Psychiatry" },
  ],
};

type ClinicCategory = keyof typeof CLINIC_MAPPING;

export default function ChiefComplaints() {
  const [selectedCategory, setSelectedCategory] = useState<ClinicCategory>("Head & Neck");
  const [selectedSymptom, setSelectedSymptom] = useState("");
  const [selectedClinic, setSelectedClinic]   = useState("");

  const handleSymptom = (label: string, clinic: string) => {
    setSelectedSymptom(label);
    setSelectedClinic(clinic);
  };

  return (
    <div className="">

      {/* ── NAV ── */}
      <nav className="w-full pl-[2rem] pt-[1rem] pb-[1rem] pr-[2rem] text-cyan-950 bg-yellow-50">
        <div className="container mx-auto flex items-center justify-between">

          <div className="flex flex-col">
            <h1 className="text-2xl font-bold">BICA</h1>
            <p className="w-full">Better Informed Care Access</p>
          </div>

          <div className="pr-[2rem]">
            <ul className="md:flex space-x-8 hidden text-xl font-semibold w-full">
              <li><a href="#" className="cursor-pointer hover:underline">Triage Form |</a></li>
              <li><a href="#" className="cursor-pointer hover:underline">Vital Signs |</a></li>
              <li><a href="#" className="cursor-pointer hover:underline">Chief Complaints |</a></li>
              <li><a href="#" className="cursor-pointer hover:underline">Summary |</a></li>
            </ul>
            <div className="md:hidden">
              <a className="text-4xl font-semibold" href="#">&#8801;</a>
            </div>
          </div>

        </div>
      </nav>

      {/* ── MAIN ── */}
      <div className="min-h-screen flex flex-col gap-[1.5rem] items-center justify-center bg-cyan-950 py-[3rem]">

        {/* Header */}
        <div className="flex flex-col text-center justify-center">
          <h1 className="text-[3rem] font-bold text-white">Chief Complaints</h1>
          <p className="text-[1.7rem] font-serif text-white">Select the category and choose your main concern.</p>
        </div>

        {/* ── CONTENT CARD ── */}
        <div className="flex flex-row gap-[1.2rem] bg-cyan-900 px-[2.5rem] py-[2rem] rounded-xl w-[70rem]">

          {/* ── LEFT: Category Buttons ── */}
          <div className="flex flex-col gap-[0.7rem] w-[14rem] flex-shrink-0">

            <p className="text-[0.78rem] font-semibold text-white uppercase tracking-wider mb-[0.2rem]">
              Where is the problem?
            </p>

            {(Object.keys(CLINIC_MAPPING) as ClinicCategory[]).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  setSelectedSymptom("");
                  setSelectedClinic("");
                }}
                className={`px-[1rem] py-[0.75rem] rounded-lg text-left text-[1rem] font-semibold transition-all cursor-pointer
                  ${selectedCategory === cat
                    ? "bg-orange-50 text-cyan-950"
                    : "bg-cyan-950 text-white hover:bg-cyan-800"
                  }`}
              >
                {cat}
              </button>
            ))}

          </div>

          {/* ── MIDDLE: Symptom Grid ── */}
          <div className="flex flex-col flex-1 gap-[0.9rem]">

            <div>
              <p className="text-[0.78rem] font-semibold text-white uppercase tracking-wider mb-[0.4rem]">
                Select your main concern
              </p>
              <p className="text-[0.9rem] text-orange-100">
                Choose the option that best describes how you feel.
              </p>
            </div>

            {/* 2x2 grid */}
            <div className="grid grid-cols-2 gap-[0.8rem]">
              {CLINIC_MAPPING[selectedCategory].map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleSymptom(item.label, item.clinic)}
                  className={`px-[1rem] py-[1.2rem] rounded-lg text-center text-[1rem] font-semibold transition-all cursor-pointer flex flex-col items-center justify-center gap-[0.3rem]
                    ${selectedSymptom === item.label
                      ? "bg-orange-50 text-cyan-950 border-2 border-orange-300"
                      : "bg-cyan-950 text-white border-2 border-cyan-800 hover:border-orange-200 hover:text-orange-100"
                    }`}
                >
                  {item.label}
                  <span className={`text-[0.75rem] font-normal
                    ${selectedSymptom === item.label ? "text-cyan-700" : "text-orange-300"}`}>
                    → {item.clinic}
                  </span>
                </button>
              ))}
            </div>

            {/* Not listed */}
            <div className="pt-[0.5rem] border-t border-dashed border-cyan-700">
              <button
                type="button"
                className="text-[0.9rem] text-orange-200 hover:text-white hover:underline cursor-pointer"
              >
                My symptom is not listed here... →
              </button>
            </div>

          </div>

          {/* ── RIGHT: Selected + Proceed ── */}
          <div className="flex flex-col gap-[0.8rem] w-[16rem] flex-shrink-0">

            <p className="text-[0.78rem] font-semibold text-white uppercase tracking-wider">
              Selected Concern
            </p>

            {/* Selection result box */}
            <div className={`rounded-lg px-[1rem] py-[1rem] flex flex-col gap-[0.4rem] min-h-[7rem] border
              ${selectedSymptom
                ? "bg-orange-50 border-orange-300"
                : "bg-cyan-950 border-cyan-800"}`}>
              {selectedSymptom ? (
                <>
                  <p className="text-[0.75rem] font-semibold text-cyan-700 uppercase tracking-wider">Complaint</p>
                  <p className="text-[1rem] font-bold text-cyan-950">{selectedSymptom}</p>
                  <div className="border-t border-orange-200 mt-[0.3rem] pt-[0.3rem]">
                    <p className="text-[0.75rem] font-semibold text-cyan-700 uppercase tracking-wider">Referred to</p>
                    <p className="text-[1rem] font-bold text-cyan-900">{selectedClinic} Clinic</p>
                  </div>
                </>
              ) : (
                <p className="text-[0.88rem] text-white mt-[0.5rem]">
                  No concern selected yet. Please choose from the grid.
                </p>
              )}
            </div>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Buttons */}
            <div className="flex flex-col gap-[0.6rem]">

              <button
                type="submit"
                disabled={!selectedSymptom}
                className={`text-[1.1rem] font-semibold px-[1.5rem] py-[0.75rem] rounded-md transition-all
                  ${selectedSymptom
                    ? "bg-orange-50 text-cyan-950 hover:bg-orange-100 cursor-pointer"
                    : "bg-cyan-800 text-cyan-500 cursor-not-allowed"}`}
              >
                Proceed →
              </button>

              <button
                type="button"
                className="text-[1rem] font-semibold bg-transparent text-orange-50 border border-orange-100 px-[1.5rem] py-[0.6rem] rounded-md hover:bg-cyan-800 cursor-pointer"
              >
                ← Back
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}