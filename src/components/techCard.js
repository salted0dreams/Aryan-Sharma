import Link from "next/link";
export default function TechCard({ title, href }) {
    title = title.toLowerCase();
    const src = `../../${title}.svg`;
    return (
        <Link href='/' target="_blank" className="w-16 bg-zinc-800 mx-6 flex justify-center h-16 rounded-full">
            <img
                src={src}
                className="my-3"
            >
            </img>
        </Link>
    );
    }