import { nav } from 'motion/react-client';
import { useState } from 'react';
import Hamburger from './Hamburger/Hamburger.jsx'
import HamburgerMenu from './Hamburger/HamburgerMenu.jsx';

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

    return (
        <div>
            {handleHamburger(hamburgerOpen)}

            <div className="bg-[#F9F1F9] fixed px-10 py-3 top-0 left-0 right-0 z-50">
                <div className="flex flex-row justify-between items-center">
                    <h2 className="order-first text-4xl hover:cursor-pointer">
                        <span className="text-[#1B998B]">f</span>aris
                    </h2>
                    <div className="md:flex flex-row gap-10 hidden text-3xl">
                        <p className="hover:cursor-pointer">about</p>
                        <p className="hover:cursor-pointer">career</p>
                        <p className="hover:cursor-pointer">projects</p>
                        <p className="hover:cursor-pointer">resume</p>
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

