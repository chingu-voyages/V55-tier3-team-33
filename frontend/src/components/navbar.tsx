import Link from "next/link"

function NavBar() {

    return (
        <nav className="text-black aw-full flex justify-between items-center px-6 py-4 bg-[var(--color-navbar)]">
            <h1 className="text-3xl flex items-center gap-2">
                <Link href="/">App name</Link>
            </h1>

            <div className="flex gap-6 text-lg">
                <Link href="/">Home</Link>
                <Link href="/#">Item 2</Link>
                <Link href="/#">Item 3</Link>
            </div>
        </nav>
    )

}

export default NavBar