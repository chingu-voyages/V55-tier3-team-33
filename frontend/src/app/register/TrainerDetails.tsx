import { Label } from "@/components/ui/label";
import { Combobox } from "./Combobox";
import cities from "./cities.json";

import type { Dispatch, SetStateAction } from "react";

export function TrainerDetails({
  city,
  setCity,
  discipline,
  setDiscipline,
  language,
  setLanguage,
  // prevStep,
}: {
  city: string;
  setCity: Dispatch<SetStateAction<string>>;
  discipline: string;
  setDiscipline: Dispatch<SetStateAction<string>>;
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
  // prevStep: () => void;
}) {
  return (
    <>
      <Label htmlFor="language">Language</Label>
      <Combobox
        id="language"
        value={language}
        setValue={setLanguage}
        items={cities}
        defaultPlaceholder="Select a language"
        searchPlaceholder="Search for a language"
      />

      <Label htmlFor="discipline">Discipline</Label>
      <Combobox
        id="discipline"
        value={discipline}
        setValue={setDiscipline}
        items={cities}
        defaultPlaceholder="Select a discipline"
        searchPlaceholder="Search for a discipline"
      />

      <Label htmlFor="city">City</Label>
      <Combobox
        id="city"
        value={city}
        setValue={setCity}
        items={cities}
        defaultPlaceholder="Select a city"
        searchPlaceholder="Search for a city"
      />
    </>
  );
}
