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
      <Label htmlFor="name">Given Name</Label>
      <Input
        id="name"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />
      <Label htmlFor="surname">Surname</Label>
      <Input
        id="surname"
        value={surname}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSurname(e.target.value)
        }
      />
      <Button type="button" onClick={prevStep}>
        prev
      </Button>
      <Button type="button" onClick={nextStep}>
        next
      </Button>
    </>
  );
}
