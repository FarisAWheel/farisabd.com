function HamburgerMenu() {
    return (
        <div className="bg-[#F9F1F9] w-screen h-screen fixed top-0 left-0 z-49">
            <div className="flex flex-col text-4xl items-center justify-center h-screen gap-12">
                <p className="hover:cursor-pointer w-screen text-center">about</p>
                <p className="hover:cursor-pointer w-screen text-center">career</p>
                <p className="hover:cursor-pointer w-screen text-center">projects</p>
                <p className="hover:cursor-pointer w-screen text-center" >resume</p>
            </div>
        </div>
    );

}

export default HamburgerMenu;