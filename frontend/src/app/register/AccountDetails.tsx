import { Label } from "@components/ui/label";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";
import { Checkbox } from "@components/ui/checkbox";
import { Separator } from "@components/ui/separator";
import Link from "next/link";

import type { Dispatch, SetStateAction } from "react";

export function AccountDetails({
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  isTrainer,
  setIsTrainer,
  nextStep,
}: {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  confirmPassword: string;
  setConfirmPassword: Dispatch<SetStateAction<string>>;
  isTrainer: boolean;
  setIsTrainer: Dispatch<SetStateAction<boolean>>;
  nextStep: () => void;
}) {
  return (
    <>
      <div className="grid w-full gap-2 mb-4">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
      </div>

      <div className="grid w-full gap-2 mb-4">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
      </div>

      <div className="grid w-full gap-2 mb-4">
        <Label htmlFor="confirm-password">Password (Confirm)</Label>
        <Input
          id="confirm-password"
          type="password"
          value={confirmPassword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setConfirmPassword(e.target.value)
          }
        />
      </div>

      <div className="flex items-center gap-3 mb-4">
        <Checkbox
          id="is-trainer"
          checked={isTrainer}
          onCheckedChange={() => setIsTrainer(!isTrainer)}
        />
        <Label htmlFor="is-trainer">I am a Trainer</Label>
      </div>

      <div className="flex flex-col items-center mt-10">
        <Button type="button" onClick={nextStep} className="pl-8 pr-8">
          Sign Up
        </Button>

        <div className="flex items-center justify-center my-4">
          <Separator
            orientation="horizontal"
            className="flex-grow h-px bg-gray-300"
          />
          <span className="mx-5 text-sm">or</span>
          <Separator
            orientation="horizontal"
            className="flex-grow h-px bg-gray-300"
          />
        </div>

        <Link href="/login" className="underline">
          Already have an account?
        </Link>
      </div>
    </>
  );
}
