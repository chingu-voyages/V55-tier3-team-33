// homepage
import Link from "next/link";
import { Button } from "@components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonRunning } from "@fortawesome/free-solid-svg-icons/faPersonRunning";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center min-h-full px-4 sm:px-12">
      <div className="max-w-[1240px] w-full flex justify-end">
        <main className="max-w-xl w-full">
          <div className="bg-white flex flex-col justify-center p-12 gap-8 shadow-xl rounded-lg">
            <h1 className="text-4xl text-center font-bold text-gray-900">
              <FontAwesomeIcon icon={faPersonRunning} /> My Trainer
            </h1>
            <p className="text-lg text-gray-600">
              Pellentesque egestas sed sem vel tincidunt. In elementum mauris et
              lorem egestas, ac ultrices dolor vehicula. Praesent a tellus
              hendrerit, eleifend ipsum a, posuere metus. Mauris egestas mauris
              velit, non ultrices lorem lobortis et. Mauris bibendum, purus a
              sollicitudin posuere, magna ligula hendrerit libero, sit amet
              porta urna purus sit amet lectus. Donec nec dolor sit amet ante
              faucibus elementum. Sed mollis nunc turpis, sit amet laoreet dui
              porttitor eget.
            </p>

            <div className="flex justify-center gap-4">
              {/* <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
              Get Started
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-100 transition">
              Learn More
            </button> */}
              <Button>Sign Up</Button>
              <Button variant="outline">Learn More</Button>{" "}
              {/* make it scroll , bring to features, infos etc*/}
            </div>
            <div className="flex justify-center gap-4 text-sm text-gray-600">
              <Link href="/login"> Already have one account? Login</Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
