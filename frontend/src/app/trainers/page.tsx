import { getTrainers } from "@lib/api";

export default async function UsersPage() {
  const trainers = await getTrainers();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">User List</h1>
      {trainers.map((trainer) => (
        <div key={trainer.id} className="mb-4">
          <h2 className="text-xl font-semibold">
            {trainer.given_name} {trainer.surname}
          </h2>
          <p className="text-gray-600">{trainer.city}</p>
        </div>
      ))}
      <ul className="space-y-2"></ul>
    </div>
  );
}
