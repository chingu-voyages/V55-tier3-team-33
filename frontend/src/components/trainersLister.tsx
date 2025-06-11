"use client";
import React from "react";
import { Trainer } from "@/lib/types";
import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CategoryContext } from "@/context/categoryContext";

interface TrainersListerProps {
  trainers: Trainer[];
}

export default function TrainersLister({ trainers }: TrainersListerProps) {
  const { state } = React.useContext(CategoryContext);

  const filteredTrainers = state.selectedCategory
    ? trainers.filter((trainer: Trainer) =>
        trainer.disciplines.includes(state.selectedCategory)
      )
    : trainers;

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredTrainers.map((trainer: Trainer) => (
        <Card
          key={trainer.id}
          className="flex flex-col items-center text-center"
        >
          <Image
            src="/images/avatar_female.png"
            alt="Avatar"
            width={100}
            height={100}
          />
          <CardTitle>
            {trainer.given_name} {trainer.surname}
          </CardTitle>
          <CardContent>Coach title</CardContent>
          <CardDescription>
            Certified fitness coach specializing in strength & HIIT. Passionate
            about results-driven training.
          </CardDescription>
          <Button className="bg-[var(--color-primary)] hover:bg-[var(--color-dark)] cursor-pointer">
            Book Session
          </Button>
        </Card>
      ))}
    </ul>
  );
}
