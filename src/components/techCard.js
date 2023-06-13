import Link from "next/link";
export default function TechCard({ title, href }) {
    title = title.toLowerCase();
    const src = `../../${title}.svg`;
    return (
        <Link href='/' target="_blank" className="w-24 bg-zinc-800 mx-20 flex justify-center h-24 rounded-full hover:opacity-50 transition duration-300 ease-in-out">
            <img
                src={src}
                className="my-3"
            >
            </img>
        </Link>
    );
    }