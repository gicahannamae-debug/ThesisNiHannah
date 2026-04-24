'use client'
import { useState } from "react";
import WelcomeScreen from "@/Component/welcomeScreen"; 
import PatientCategory from "@/Component/patientCategory";
import PatientInformation from "@/Component/patientInformation";
import VsTemperature from "@/Component/vsTemperature";
import VsBloodpressure from "@/Component/vsBloodpressure";
import VsOximeter from "@/Component/vsOximeter";
import ChiefComplaints from "@/Component/chiefComplaints";
import SummaryScreen, { SummaryScreenProps } from "@/Component/summaryScreen";

export default function Home(){
  const [summary] = useState<SummaryScreenProps>({
    patientName: "Hanna Mae Gica",
    age: 22,
    gender: "Female",
    bpSys: 118,
    bpDia: 76,
    hr: 70,
    spo2: 98,
    temperature: 36.8,
    complaints: "Eye Irritation",
    clinic: "General OPD",
    queueCode: "R-ENT-007",
  });

  const [isPatientCat, setIsPatientCat] = useState<boolean>(false);

  return (
    <div className={`w-auto h-auto`}>

      {!isPatientCat && (
        <WelcomeScreen 
          setIsPatientCat={setIsPatientCat}
          isPatientCat={isPatientCat} />
      )}
      
      {isPatientCat && (
        <PatientCategory 
          isPatientCat={isPatientCat} />
      )}

      <PatientInformation />

      <VsTemperature />
      <VsBloodpressure />
      <VsOximeter />
      <ChiefComplaints />
      <SummaryScreen {...summary} />
    </div>
  );
}
