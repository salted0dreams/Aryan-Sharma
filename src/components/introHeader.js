import Link from "next/link"

export default function IntroHeader() {
    return (
        <header className='px-16 py-10 text-white'>
            <div className='mx-auto flex gap-60 justify-center items-center'>
                
                <div className="mx-6 my-3 flex flex-col justify-center"> 
                    <p className='text-4xl font-bold mb-6'>Hi, I'm <br /> Aryan Sharma <br/> Full-stack Web Developer</p>
                    {/* <p className='text-xl mb-6'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.<br/> Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p> */}
                    <Link href='mailto:aryan182282@gmail.com' target="_blank" className=' bg-green-500 text-zinc-900 w-fit px-4 py-2 text-lg'>Download CV</Link>
                </div>
                
                <img src="../../pfp.jpg" 
                    alt="Image of Aryan"
                    className="rounded-full p-5 bg-neutral-800"
                    width={550}/>
            </div>

        </header>
    )
}