import SectionHeader from "./sectionHeader";
import Link from 'next/link';
import TechCard from "./techCard";
import data from '../_data/techdata.json';


export default function About() {


    // console.log(data);

    return (
        <section className=' text-white flex justify-center items-center mx-36  bg-transparent' id="about">
            <div className='py-12 w-full px-3 flex flex-col justify-center items-center'>
                <SectionHeader title={"About"} />
                <div className='w-2/3'>
                        <p className='text-2xl mb-6 text-center'>Experienced web developer with strong problem-solving skills and meticulous attention to detail. Dedicated and loyal, I strive for excellence in every project. Passionate about coding and the frontend spectrum, I thrive on ambitious challenges and collaborative work. Committed to delivering exceptional results, whether refining code or starting from scratch.</p>
                        <p className='text-2xl mb-6 text-center '>Outside of work, I enjoy boxing, outdoor activities, and video games. These hobbies provide inspiration, recharge my creativity, and allow me to continuously improve my coding skills. As a highly motivated web developer, I seek new challenges and growth opportunities in collaborative environments. Excited to contribute to meaningful projects with talented teams.</p>
                </div>
                <nav className="py-5">  
                <ul className="flex gap-40">
                    <li>
                        <a href='#'>
                            <img
                                src="../../instagram.png"
                                width='50'
                                height='50'
                                className="hover:opacity-50 transition duration-300 ease-in-out"
                            ></img>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                        <img
                                src="../../twitter.png"
                                width='50'
                                height='50'
                                className="hover:opacity-50 transition duration-300 ease-in-out"
                            ></img>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                        <img
                                src="../../linkedin.png"
                                width='50'
                                height='50'
                                className="hover:opacity-50 transition duration-300 ease-in-out"
                            ></img>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                        <img
                                src="../../github.png"
                                width='50'
                                height='50'
                                className="hover:opacity-50 transition duration-300 ease-in-out"
                            ></img>
                        </a>
                    </li>
                </ul>
            </nav>
            </div>
        </section>
    );
}