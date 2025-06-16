import { Label } from "@components/ui/label";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";

import type { Dispatch, SetStateAction } from "react";

export function BasicDetails({
  name,
  setName,
  surname,
  setSurname,
  prevStep,
  nextStep,
}: {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  surname: string;
  setSurname: Dispatch<SetStateAction<string>>;
  prevStep: () => void;
  nextStep: () => void;
}) {
  return (
    <>
      <div className="flex flex-col py-5 px-5">
        <div>
          <div className="grid w-full gap-2 mb-4">
            <Label htmlFor="name">Given Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />
            {name && !isNameValid(name) && (
              <p>Enter a name of at least 3 chars</p>
            )}
          </div>

          <div className="grid w-full gap-2">
            <Label htmlFor="surname">Surname</Label>
            <Input
              id="surname"
              value={surname}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSurname(e.target.value)
              }
            />
            {surname && !isSurnameValid(surname) && (
              <p>Enter a surname of at least 3 chars</p>
            )}
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
            variant="outline"
            onClick={nextStep}
            disabled={!isNameValid(name) || !isSurnameValid(surname)}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
}

function isNameValid(name: string): boolean {
  return name.length >= 3;
}

function isSurnameValid(surname: string): boolean {
  return surname.length >= 3;
}
