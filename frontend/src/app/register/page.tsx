"use client";

import { useState } from "react";

import { AccountDetails } from "./AccountDetails";
import { BasicDetails } from "./BasicDetails";
import { TrainerDetails } from "./TrainerDetails";

export default function MultiStepForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isTrainer, setIsTrainer] = useState(false);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const [city, setCity] = useState("");
  const [discipline, setDiscipline] = useState("");
  const [language, setLanguage] = useState("");

  const [step, setStep] = useState(1);

  const prevStep = () => setStep(step - 1);
  const nextStep = () => setStep(step + 1);

  // function handleSubmit(e: FormEvent): void {
  //   e.preventDefault();
  //   console.log("HAAA HAAA");
  // }

  return (
    <div className="container mx-auto p-4 max-w-lg">
      <form>
        <h1 className="text-2xl font-bold mb-4 text-center">Sign Up</h1>

        {step === 1 && (
          <AccountDetails
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            isTrainer={isTrainer}
            setIsTrainer={setIsTrainer}
            nextStep={nextStep}
          />
        )}

        {step === 2 && (
          <BasicDetails
            name={name}
            setName={setName}
            surname={surname}
            setSurname={setSurname}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        )}

        {step === 3 && (
          <TrainerDetails
            city={city}
            setCity={setCity}
            discipline={discipline}
            setDiscipline={setDiscipline}
            language={language}
            setLanguage={setLanguage}
            // prevStep={prevStep}
          />
        )}
      </form>
    </div>
  );
}
