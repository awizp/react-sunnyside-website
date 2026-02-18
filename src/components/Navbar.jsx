import { useState } from "react";
import NavList from "../utils/NavList";

const Navbar = () => {

    const [showMobileNav, setShowMobileNav] = useState(false);

    const mobileNavbarHandle = () => {
        setShowMobileNav(prev => !prev);
    };

    const desktopStyle = {
        listStyle: "hidden md:flex justify-between gap-12 items-center",
        itemStyle: "nav-link",
        btnStyle: "rounded-full py-1.5 px-3 bg-white text-black cursor-pointer shadow-lg transition duration-500 hover:bg-yellow",
    };

    const mobileStyle = {
        listStyle: "absolute w-54 h-fit rounded top-16 right-5 p-5 flex md:hidden flex-col justify-between gap-5 items-center bg-white text-black z-50",
        itemStyle: "mobile-nav",
        btnStyle: "rounded-full py-1.5 px-3 bg-yellow text-black cursor-pointer shadow-lg transition duration-500 hover:scale-[1.05]",
    };

    return (
        <nav className="w-full bg-skyblue py-5 px-3 text-white">
            <div className="container mx-auto flex items-center justify-between">
                {/* company logo */}
                <div className="w-35 h-8">
                    <img src={"/images/logo.svg"} alt="Company Logo" className="w-full h-full object-fit" />
                </div>

                {/* navigation lists */}
                <NavList styleEl={desktopStyle} />

                {/* mobile hamburger menu */}
                <div className="md:hidden flex justify-center items-center p-1 cursor-pointer"
                    onClick={mobileNavbarHandle}
                >
                    <img src="/images/icon-hamburger.svg" alt="Hamburger button" />
                </div>

                {/* mobile links */}
                {showMobileNav && <NavList styleEl={mobileStyle} />}
            </div>
        </nav>
    );
};

export default Navbar;