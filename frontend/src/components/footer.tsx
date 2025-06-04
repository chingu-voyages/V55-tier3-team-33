import Link from "next/link";

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-black w-full flex justify-between items-center border-0 py-4 lg:px-24 px-10 bottom-0 ">
            <div className="text-md text-white">
                <Link href="#">Team 33</Link> | <Link href="#">Link</Link>
            </div>
            <div className="flex gap-6 text-white text-md">
                &copy; {currentYear} App. All lefts reserved.
            </div>
        </footer>
    );
}

export default Footer;