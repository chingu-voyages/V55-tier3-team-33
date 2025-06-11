import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Trainer } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDisciplines(data: Trainer[]): string[] {
  const disciplines = data.map((trainer) => trainer.disciplines);
  return disciplines.flat();
}
