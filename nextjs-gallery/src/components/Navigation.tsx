import Link from "next/link"


const Navigation = () => {
  return (
    <header>
        <nav>
            <ul>
                <menu className="right-6 z-50 fixed top-4 flex space-x-10 ">
                    <li>
                        <Link href="">LOGO</Link>
                    </li>
                        <li className="underline">
                            <Link href="/" className="underline underline-offset-4 hover:text-blue-600 transition-colors duration-200">Home</Link>
                        </li>
                        <li className="underline">
                            <Link href="/gallery" className="underline underline-offset-4 hover:text-blue-600 transition-colors duration-200"> Gallery</Link>
                        </li>
                </menu>
            </ul>
        </nav>
    </header>
  )
}

export default Navigation