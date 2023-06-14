import Link from "next/link";

export default function ProjectCard({ title, href, description}) {
    return(
        <Link href={href} target="_blank" className=" bg-zinc-800 flex flex-col justify-center items-center  hover:opacity-50  ease-in-out">
            <h1 className=" text-4xl text-slate-100 m-7 font-extrabold">{title}</h1>
            <p className="text-slate-100 py-3 px-3 text-center">{description}</p>
        </Link>
    )
}