import Link from "next/link";


export default function Header() {
    return (
        <header className="mx-auto flex justify-between h-20 bg-trasnparent text-white items-center">
            <div className="flex items-center mx-16">
                <Link href='mailto:aryan182282@gmail.com' target="_blank" className="w-12 bg-zinc-800 mx-8 flex justify-center h-12 rounded-full">
                    <img
                        src="../../mail.png"
                        className="my-3"
                    >
                    </img>
                </Link>
                <Link href='mailto:aryan182282@gmail.com' target="_blank" className="">
                    <p className="text-sm text-zinc-600 font-bold hover:text-zinc-400">Get in touch</p>
                </Link>
            </div>
            <nav>
                <ul className="flex gap-8 font-bold text-xl mx-28">
                    <li className="hover:opacity-50 transition duration-300 ease-in-out">
                        <Link href='#about'>About</Link>
                    </li>
                    <li className="hover:opacity-50 transition duration-300 ease-in-out">
                        <Link href='#services'>Services</Link>
                    </li>
                    <li className="hover:opacity-50 transition duration-300 ease-in-out">
                        <Link href='#contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}