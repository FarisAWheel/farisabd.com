import Hamburger from './Hamburger/Hamburger.jsx'

function Navbar() {
    return (
        <div className="bg-[#F9F1F9] fixed px-10 py-3 top-0 left-0 right-0 z-50">
            <div className="flex flex-row justify-between items-center">
                <h2 className="order-first text-3xl lg:text-4xl">
                    <span className="text-[#1B998B]">f</span>aris
                </h2>
                <div className="md:flex flex-row gap-10 hidden text-2xl">
                    <p>projects</p>
                    <p>about</p>
                    <p>resume</p>
                </div>
                <div className="md:hidden">
                    <Hamburger />
                </div>
            </div>
        </div>
    );
}

export default Navbar;

