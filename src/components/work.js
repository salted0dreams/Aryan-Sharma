import SectionHeader from "./sectionHeader";
import data from '../_data/projectdata.json';
import ProjectCard from "./projectCard";

export default function Work() {
    return (
        <section className=' text-white  flex justify-center mx-36  bg-transparent' id="work">
            <div className='py-12 w-full h-full px-auto flex flex-col justify-center items-center'>
                <SectionHeader title={"My work"} />
                <div className='w-11/12'>
                    <div className='grid grid-cols-3 gap-6'>
                        {data.map((project) => (
                            <ProjectCard title={project.title} href={project.github} description={project.description} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}