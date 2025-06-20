import { faPersonRunning } from "@fortawesome/free-solid-svg-icons/faPersonRunning";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function NavBar() {
  return (
    <nav className="text-black aw-full px-6 py-4 bg-[var(--color-navbar)]">
      <div className="max-w-[1240px] m-auto flex justify-between items-center">
        <h1 className="text-3xl flex items-center gap-2">
          <FontAwesomeIcon icon={faPersonRunning} />
          <Link href="/">App name</Link>
        </h1>

        {/* <div className="flex gap-6 text-lg">
                <Link href="/">Home</Link>
                <Link href="/#">Item 2</Link>
                <Link href="/#">Item 3</Link>
            </div> */}
      </div>
    </nav>
  );
}

export default NavBar;
