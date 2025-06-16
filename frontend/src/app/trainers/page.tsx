import CategoryFilter from "@/components/categoryFilter";
import TrainersLister from "@/components/trainersLister";
import CategoryProvider from "@context/categoryProvider";
import { getTrainers } from "@lib/api";
import { getDisciplines } from "@lib/utils";

async function TrainersListingPage() {
  const trainers = await getTrainers();
  const disciplines = getDisciplines(trainers);

  return (
    <div className="container mx-auto px-4 py-8 max-w-[1240px]">
      <h1 className="text-3xl font-bold mb-6">Find Your Fitness Coach</h1>
      <div>
        Browse and book top trainers for Yoge, fitness, Pilates, and more.
      </div>
      <CategoryProvider>
        <CategoryFilter categories={disciplines} selectedCategory={""} />
        <TrainersLister trainers={trainers} />
      </CategoryProvider>
    </div>
  );
}

export default TrainersListingPage;
