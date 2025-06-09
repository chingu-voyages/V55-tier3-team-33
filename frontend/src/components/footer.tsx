import Link from "next/link";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full flex justify-center items-center border-0 py-4 lg:px-24 px-10 bg-gray-900/30 text-white backdrop-blur-sm">
      <div className="max-w-[1240px] m-auto">
        {/* <div className="text-md">
                <Link href="#">Team 33</Link> | <Link href="#">Link</Link>
            </div> */}
        <div className="text-md">
          &copy; {currentYear} App. All lefts reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
