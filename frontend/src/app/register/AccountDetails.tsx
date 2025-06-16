import { Label } from "@components/ui/label";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";
// import { Checkbox } from "@components/ui/checkbox";
import { Separator } from "@components/ui/separator";
import Link from "next/link";

import type { Dispatch, SetStateAction } from "react";

export function AccountDetails({
  title,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  // isTrainer,
  // setIsTrainer,
  nextStep,
}: {
  title: string;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  confirmPassword: string;
  setConfirmPassword: Dispatch<SetStateAction<string>>;
  // isTrainer: boolean;
  // setIsTrainer: Dispatch<SetStateAction<boolean>>;
  nextStep: () => void;
}) {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4 text-center">{title}</h1>
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
        {email && !isEmailValid(email) && <p>Invalid email address</p>}
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
        {password && !isPasswordValid(password) && (
          <p>
            Enter a password of at least 8 chars with uppercase, lowercase,
            number and special char
          </p>
        )}
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
        {confirmPassword &&
          !isConfirmPasswordValid(password, confirmPassword) && (
            <p>Password is not the same</p>
          )}
      </div>

      {/* <div className="flex items-center gap-3 mb-4">
        <Checkbox
          id="is-trainer"
          checked={isTrainer}
          onCheckedChange={() => setIsTrainer(!isTrainer)}
        />
        <Label htmlFor="is-trainer">I am a Trainer</Label>
      </div> */}

      <div className="flex flex-col items-center mt-10">
        <Button
          className="pl-8 pr-8 cursor-pointer"
          onClick={nextStep}
          disabled={
            !isEmailValid(email) ||
            !isPasswordValid(password) ||
            !isConfirmPasswordValid(password, confirmPassword)
          }
        >
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

function isEmailValid(email: string): boolean {
  const emailRegex =
    /^[A-Z0-9._-]{3,64}@[A-Z0-9-]{3,64}(\.[A-Z]{2,32}){1,2}$/gi;
  return emailRegex.test(email);
}

function isPasswordValid(password: string): boolean {
  const charTypeRegexes = [/[A-Z]/, /[a-z]/, /[0-9]/, /[^A-Za-z0-9]/];

  return (
    password.length >= 8 &&
    charTypeRegexes.every((regex) => regex.test(password))
  );
}

function isConfirmPasswordValid(
  password: string,
  confirmPassword: string
): boolean {
  return password === confirmPassword;
}
