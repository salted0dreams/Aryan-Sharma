import SectionHeader from "./sectionHeader";
import Link from 'next/link';
import TechCard from "./techCard";
import data from '../_data/techdata.json';


export default function TechStack() {


    // console.log(data);

    return (
        <section className=' text-white  flex justify-center mx-36  bg-transparent' id="about">
            <div className='py-12 w-full h-full px-auto flex flex-col justify-center items-center'>
                <SectionHeader title={"My Skills"} />
                <div className='w-11/12'>
                    <div className='grid grid-cols-4 gap-16'>
                        {data.map((tech) => (
                            <TechCard title={tech.title} href={tech.href} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}