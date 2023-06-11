export default function Footer() {
    return (
        <footer className="container w-screen mx-auto flex space-x-80 justify-center flex-row  items-center">
            <p>&copy; 2023. All rights reserved.</p>
            <nav className="py-5">  
                <ul className="flex gap-6">
                    <li>
                        <a href='#'>
                            <img
                                src="../../instagram.svg"
                                width='30'
                                height='30'
                            ></img>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                        <img
                                src="../../twitter.svg"
                                width='30'
                                height='30'
                            ></img>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                        <img
                                src="../../github.svg"
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
