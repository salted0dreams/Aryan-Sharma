import Link from "next/link";
export default function TechCard({ title, href, mykey }) {
    const newtitle = title.toLowerCase();
    const src = `../../svgs/${newtitle}.svg`;
    return (
        <Link href={href} key={mykey} target="_blank" className="w-24 bg-zinc-800 mx-20 flex justify-center h-24 rounded-full hover:opacity-50  ease-in-out">
            <img
                src={src}
                className="my-3"
                title={title}
                // key={mykey}
            >
            </img>
        </Link>
    );
    }