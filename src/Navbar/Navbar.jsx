import { useState } from 'react';
import Hamburger from './Hamburger/Hamburger.jsx'
import HamburgerMenu from './Hamburger/HamburgerMenu.jsx';
import { useLocation } from 'react-router-dom';

const handleHamburger = (hamburgerOpen) => {
    if (hamburgerOpen) {
        return (
            <div>
                <HamburgerMenu />
            </div>
        );
    }

    return (
        <div className="hidden">
            <HamburgerMenu />
        </div>
    );
}

function Navbar() {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const location = useLocation().pathname;

    return (
        <div>
            {handleHamburger(hamburgerOpen)}
            
            <div className="bg-[#F9F1F9] fixed px-10 py-3 top-0 left-0 right-0 z-50">
                <div className="flex flex-row justify-between items-center">
                    <a href="/" className="order-first text-4xl hover:cursor-pointer">
                        <span className="text-[#1B998B]">f</span>aris
                    </a>
                    <div className="md:flex flex-row gap-10 hidden text-3xl">
                        <a href="about" className={location.includes("about") ? "hover:cursor-pointer text-[#1B998B]" : "hover:cursor-pointer"}>about</a>
                        <a href="career" className={location.includes("career") ? "hover:cursor-pointer text-[#1B998B]" : "hover:cursor-pointer"}>career</a>
                        <a href="projects" className={location.includes("projects") ? "hover:cursor-pointer text-[#1B998B]" : "hover:cursor-pointer"}>projects</a>
                        <a href="resume" className="hover:cursor-pointer">resume</a>
                    </div>
                    <div onClick={() => setHamburgerOpen(!hamburgerOpen)} className="md:hidden hover:cursor-pointer">
                        <Hamburger />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;

