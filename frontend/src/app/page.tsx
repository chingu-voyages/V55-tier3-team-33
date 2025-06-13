// homepage
import { faPersonRunning } from "@fortawesome/free-solid-svg-icons/faPersonRunning";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import { Button } from "@components/ui/button";

export default function Home() {
  return (
    <div className="bg-homepage flex flex-1 items-center justify-center min-h-full px-4 sm:px-12">
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
              <Link href="/trainers">
                <Button className="cursor-pointer">Find a trainer</Button>
              </Link>
              <Link href="/register">
                <Button variant="outline" className="cursor-pointer">Register as Trainer</Button>
              </Link>
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
