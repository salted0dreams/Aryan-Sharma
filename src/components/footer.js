export default function Footer() {
    return (
        <footer className="container w-screen mx-auto flex space-x-96 justify-center flex-row gap-96 text-zinc-200  items-center">
            <p>&copy; 2023. All rights reserved.</p>
            <nav className="py-5">  
                <ul className="flex gap-6">
                    <li>
                        <a href='#'>
                            <img
                                src="../../instagram.png"
                                width='30'
                                height='30'
                            ></img>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                        <img
                                src="../../twitter.png"
                                width='30'
                                height='30'
                            ></img>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                        <img
                                src="../../github.png"
                                width='30'
                                height='30'
                            ></img>
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}
