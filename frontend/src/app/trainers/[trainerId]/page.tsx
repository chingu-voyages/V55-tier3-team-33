import { getTrainer } from "@/lib/api";


export default async function TrainersPage({ params }: { params: { trainerId: string } }) {
    const { trainerId } = await params
    const trainer = await getTrainer(trainerId);

    return <div>TrainersPage: {JSON.stringify(trainer)}</div>;
    // return <div>TrainersPage: {trainerId}</div>;
}