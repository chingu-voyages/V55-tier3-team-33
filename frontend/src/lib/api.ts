import { Trainer } from "@lib/types";

export async function getTrainers(): Promise<Trainer[]> {
  try {
    const url = process.env.NEXT_PUBLIC_API_URL + "trainers";
    const res = await fetch(url, { cache: "no-cache" });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();

    return data ?? [];
  } catch (error) {
    console.error("Error fetching data: ", error);
    return [];
  }
}

export async function getTrainer(id: string): Promise<Trainer | null> {
  try {
    const url = process.env.NEXT_PUBLIC_API_URL + "trainers/" + id;
    const res = await fetch(url, { cache: "no-cache" });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();

    return data ?? {};
  } catch (error) {
    console.error("Error fetching data: ", error);
    return null;
  }
}
