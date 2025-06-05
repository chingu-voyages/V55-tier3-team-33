// homepage
import Image from "next/image";
import { Button } from "@components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-end min-h-full px-4 sm:px-12">
      <main className="ml-auto max-w-xl w-full">
        <div className="bg-white flex flex-col justify-center p-12 gap-8 shadow-xl">
          <h1 className="text-4xl text-center font-bold text-gray-900">My Trainer</h1>
          <p className="text-lg text-gray-600">
            Pellentesque egestas sed sem vel tincidunt. In elementum mauris et lorem egestas, ac ultrices dolor vehicula. Praesent a tellus hendrerit, eleifend ipsum a, posuere metus. Mauris egestas mauris velit, non ultrices lorem lobortis et. Mauris bibendum, purus a sollicitudin posuere, magna ligula hendrerit libero, sit amet porta urna purus sit amet lectus. Donec nec dolor sit amet ante faucibus elementum. Sed mollis nunc turpis, sit amet laoreet dui porttitor eget.
          </p>

          <div className="flex justify-center gap-4">
            {/* <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
              Get Started
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-100 transition">
              Learn More
            </button> */}
            <Button>Get Started</Button>
            <Button variant="outline">Learn More</Button>
          </div>
          <div className="flex justify-center gap-4 text-sm text-gray-600">Lost you password?</div>
        </div>
      </main>
    </div>
  );
}
