import { getTrainer } from "@/lib/api";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

export default async function TrainersPage({
  params,
}: {
  params: { trainerId: string };
}) {
  const { trainerId } = await params;
  const trainer = await getTrainer(trainerId);

  console.log("trainer:", trainer);

  if (trainer === null) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-[1240px]">
        <h1 className="text-3xl font-bold mb-6">Trainer not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-[680px]">
      <div className="mb-4 font-bold"><FontAwesomeIcon icon={faArrowAltCircleLeft} /> Back</div>
      <Card className="flex flex-col items-center p-8 text-center">

        <h1 className="text-3xl font-bold mb-6">
          {trainer.given_name} {trainer.surname}
        </h1>
        <Image
          src="/images/avatar_female.png"
          alt="Avatar"
          width={200}
          height={200}
        />

        <CardContent>
          <div className="flex gap-4 mb-2">
            Experience: 150 years
          </div>
          <div className="flex gap-2 mb-2">
            Disciplines:
            {trainer.disciplines.map((discipline) => (
              <span key={discipline}>{discipline}</span>
            ))}
          </div>
          <div className="flex gap-2 mb-2">
            Languages:
            {trainer.languages.map((languages) => (
              <span key={languages}>{languages}</span>
            ))}
          </div>
          <div className="flex gap-4 mb-2">
            City: {trainer.city}
          </div>
          <div className="flex text-left gap-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            condimentum nisl at nisl ullamcorper, at placerat arcu efficitur.
          </div>
        </CardContent>

        <CardFooter>
          <div className="flex gap-4">
            <Button>Book Session</Button>
          </div>
        </CardFooter>

      </Card>
    </div>
  );
}
