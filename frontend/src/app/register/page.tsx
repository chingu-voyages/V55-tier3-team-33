"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { register } from "@/lib/api";

import { AccountDetails } from "./AccountDetails";
import { BasicDetails } from "./BasicDetails";
import { TrainerDetails } from "./TrainerDetails";

import type { FormEvent } from "react";

export default function MultiStepForm() {
  const router = useRouter();

  const [step, setStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [isTrainer, setIsTrainer] = useState(false);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const [city, setCity] = useState("");
  const [discipline, setDiscipline] = useState("");
  const [language, setLanguage] = useState("");

  const prevStep = () => setStep(step - 1);
  const nextStep = () => setStep(step + 1);

  async function handleSubmit(e: FormEvent): Promise<void> {
    e.preventDefault();

    setIsLoading(true);
    // C'mon... Do something.
    // TODO: extract the user info from the token, do something with the login feature
    let error, token;
    try {
      token = await register({
        email,
        password,
        name,
        surname,
        city,
        disciplines: [discipline],
        languages: [language],
      });
    } catch (err) {
      // we do this only here because we redirect on success and
      // don't want the user to send another request while doing so
      setIsLoading(false);
      error = err;
    }

    if (error) {
      console.error(error);
      return;
    }

    // eslint-disable-next-line no-console
    console.info(token);

    router.push("/trainers");
  }

  return (
    <div className="container mx-auto p-4 max-w-lg">
      <form>
        {step === 0 && (
          <AccountDetails
            title="Sign Up"
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            // isTrainer={isTrainer}
            // setIsTrainer={setIsTrainer}
            nextStep={nextStep}
          />
        )}

        {step === 1 && (
          <BasicDetails
            name={name}
            setName={setName}
            surname={surname}
            setSurname={setSurname}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        )}

        {step === 2 && (
          <TrainerDetails
            city={city}
            setCity={setCity}
            discipline={discipline}
            setDiscipline={setDiscipline}
            language={language}
            setLanguage={setLanguage}
            prevStep={prevStep}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
          />
        )}
      </form>
    </div>
  );
}
