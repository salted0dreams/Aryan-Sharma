import SectionHeader from "./sectionHeader";
import Link from 'next/link';
import TechCard from "./techCard";
import data from '../_data/data.json';


export default function About() {


    // console.log(data);

    return (
        <section className=' text-white bg-zinc-900 flex justify-center items-center mx-36  bg-transparent'>
            <div className='py-12 w-auto px-3'>
                <SectionHeader title={"About Me"} />
                <div className=''>
                    <div className=''>
                        <p className='text-xl mb-6'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.<br/> Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        <p className='text-xl mb-6'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.<br /> Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
            </div>
            <div className='py-12 w-auto px-3'>
                <SectionHeader title={"Tech"} />
                <div className=''>
                    <div className='grid grid-cols-5 gap-5 '>
                        {data.map((tech) => (
                            <TechCard title={tech.title} href={tech.href}  />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}