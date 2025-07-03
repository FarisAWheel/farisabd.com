import { useLocation } from "react-router-dom";

function HamburgerMenu() {
    const location = useLocation().pathname;

    return (
        <div className="bg-[#F9F1F9] w-screen h-screen fixed top-0 left-0 -mt-[76px] z-49">
            <div className="flex flex-col text-4xl items-center justify-center h-screen gap-12">
                <a href="about" className={location.includes("about") ? "hover:cursor-pointer w-screen text-center text-[#1B998B]" : "hover:cursor-pointer w-screen text-center"}>about</a>
                <a href="career" className={location.includes("career") ? "hover:cursor-pointer w-screen text-center text-[#1B998B]" : "hover:cursor-pointer w-screen text-center"}>career</a>
                <a href="projects" className={location.includes("projects") ? "hover:cursor-pointer w-screen text-center text-[#1B998B]" : "hover:cursor-pointer w-screen text-center"}>projects</a>
                <a href="resume" className="hover:cursor-pointer w-screen text-center" >resume</a>
            </div>
        </div>
    );

}

export default HamburgerMenu;