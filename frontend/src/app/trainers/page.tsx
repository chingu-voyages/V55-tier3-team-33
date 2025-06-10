import { getTrainers } from "@lib/api";
import CategoryFilter from "@/components/categoryFilter";
import { Card, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const categories = ['yoga', 'fitness', 'pilates', 'hiit', 'bodybuilding', 'zumba', 'martial arts', 'strength training', 'cardio kickboxing', 'spinning'];

export default async function UsersPage() {
  const trainers = await getTrainers();

  console.log('data:', trainers)

  return (
    <div className="container mx-auto px-4 py-8 max-w-[1240px]">
      <h1 className="text-3xl font-bold mb-6">Find Your Fitness Coach</h1>
      <div>Browse and book top trainers for Yoge, fitness, Pilates, and more.</div>
      <CategoryFilter categories={categories} selectedCategory={''} />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {trainers.map((trainer) => (
          <Card key={trainer.id} className="flex flex-col items-center text-center">
            <Image src="/images/avatar_female.png" alt="Avatar" width={100} height={100} />
            <CardTitle>{trainer.given_name} {trainer.surname}</CardTitle>
            <CardContent>
              Coach title
            </CardContent>
            <CardDescription>
              Certified fitness coach specializing in strength & HIIT. Passionate about results-driven training.
            </CardDescription>
            <Button className="bg-[var(--color-primary)] hover:bg-[var(--color-dark)] cursor-pointer">Book Session</Button>
          </Card>
        ))}
      </ul>
    </div>
  );
}
