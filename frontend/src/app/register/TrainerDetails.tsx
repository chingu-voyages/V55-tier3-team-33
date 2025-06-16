import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { Combobox } from "./Combobox";

import cities from "./cities.json";
import disciplines from "./disciplines.json";
import languages from "./languages.json";

import type { Dispatch, FormEvent, SetStateAction } from "react";

export function TrainerDetails({
  city,
  setCity,
  discipline,
  setDiscipline,
  language,
  setLanguage,
  prevStep,
  handleSubmit,
  isLoading,
}: {
  city: string;
  setCity: Dispatch<SetStateAction<string>>;
  discipline: string;
  setDiscipline: Dispatch<SetStateAction<string>>;
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
  prevStep: () => void;
  handleSubmit: (e: FormEvent) => void;
  isLoading: boolean;
}) {
  return (
    <>
      <div className="flex flex-col py-5">
        <div>
          <div className="grid w-full gap-2 mb-4">
            <Label htmlFor="language">Language</Label>
            <Combobox
              id="language"
              value={language}
              setValue={setLanguage}
              items={languages}
              defaultPlaceholder="Select a language"
              searchPlaceholder="Search for a language"
            />
          </div>

          <div className="grid w-full gap-2 mb-4">
            <Label htmlFor="discipline">Discipline</Label>
            <Combobox
              id="discipline"
              value={discipline}
              setValue={setDiscipline}
              items={disciplines}
              defaultPlaceholder="Select a discipline"
              searchPlaceholder="Search for a discipline"
            />
          </div>

          <div className="grid w-full gap-2 mb-4">
            <Label htmlFor="city">City</Label>
            <Combobox
              id="city"
              value={city}
              setValue={setCity}
              items={cities}
              defaultPlaceholder="Select a city"
              searchPlaceholder="Search for a city"
            />
          </div>
        </div>

        <div className="flex items-center justify-between py-10">
          <Button
            type="button"
            className="cursor-pointer"
            variant="outline"
            onClick={prevStep}
          >
            Back
          </Button>
          <Button
            className="cursor-pointer"
            onClick={handleSubmit}
            disabled={
              isLoading ||
              !isLanguageValid(language) ||
              !isDisciplineValid(discipline) ||
              !isCityValid(city)
            }
          >
            Done!
          </Button>
        </div>
      </div>
    </>
  );
}

function isLanguageValid(language: string): boolean {
  return languages.includes(language);
}

function isDisciplineValid(discipline: string): boolean {
  return disciplines.includes(discipline);
}

function isCityValid(city: string): boolean {
  return cities.includes(city);
}
