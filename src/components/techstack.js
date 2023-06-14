import SectionHeader from "./sectionHeader";
import Link from 'next/link';
import TechCard from "./techCard";
import data from '../_data/techdata.json';


export default function TechStack() {

    const services = [
        {
            title: "Web Development",
            img: "../../pngs/webDev.png",
        },
        {
            title: "Web Design",
            img: "../../pngs/design.png",
        },
        {
            title: "Software Development",
            img: "../../pngs/softwareDev.png",
        }
    ]
    let count = 0;
    return (
        <section className=' text-white  flex flex-col justify-center mx-36  bg-transparent h-screen' id="services">
            <div className='py-10 w-full h-full px-auto flex flex-col justify-center items-center'>
                <SectionHeader title={"What I Do"} />
                <div className='w-11/12 flex flex-row justify-evenly'>
                    {services.map((service) => (
                        <span className=" w-1/4 h-44 flex flex-col justify-center bg-zinc-800">
                        <img
                            src={service.img}
                            width='50'
                            height='50'
                            className="mx-auto my-4 "
                        ></img>
                        <h1 className='text-2xl mb-6 text-center'>{service.title}</h1>
                    </span>
                    ))}
                    
                </div>
            </div>
            <div className='py-12 w-full h-full px-auto flex flex-col justify-center items-center'>
                <SectionHeader title={"My Skills"} />
                <div className='w-11/12'>
                    <div className='grid grid-cols-6 gap-6'>
                        {data.map((tech) => (
                            <TechCard title={tech.title} href={tech.href} mykey={tech.id} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}