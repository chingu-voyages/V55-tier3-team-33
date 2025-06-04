import Link from "next/link"

function NavBar() {

    return (
        <nav className="bg-black w-full border-0 py-4 lg:px-24 px-10 flex justify-between items-center sticky top-0 z-10">
            <h1 className="text-3xl text-white flex items-center gap-2">

                <Link href="/">App name</Link>
            </h1>

            <div className="flex gap-6 text-white text-lg">
                <Link href="/">Item 1</Link>
                <Link href="/about">Item 2</Link>
                <Link href="/contact">Item 3</Link>

            </div>
        </nav>
    )

}

export default NavBar