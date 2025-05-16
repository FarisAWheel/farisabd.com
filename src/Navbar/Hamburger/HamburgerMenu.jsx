function HamburgerMenu() {
    return (
        <div className="bg-[#F9F1F9] w-screen h-screen fixed top-0 left-0 -mt-[76px] z-49">
            <div className="flex flex-col text-4xl items-center justify-center h-screen gap-12">
                <a href="about" className="hover:cursor-pointer w-screen text-center">about</a>
                <a href="career" className="hover:cursor-pointer w-screen text-center">career</a>
                <a href="projects" className="hover:cursor-pointer w-screen text-center">projects</a>
                <a href="resume" className="hover:cursor-pointer w-screen text-center" >resume</a>
            </div>
        </div>
    );

}

export default HamburgerMenu;