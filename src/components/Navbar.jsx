import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import header from "../assets/header-photo.png"
import kozak from "../assets/kozakLogo.png"
import { LINKS } from "../constants"
import { FaInstagram, FaFacebook, FaSearch } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        weekday: "short",
    });

  return (
    <div>
        <div className="flex flex-col">
            <img src={header} alt="Header" className="w-full max-h-[200px] sm:max-h-[500px] lg:max-h-[600px] object-cover"/>

            <div className="w-full h-auto bg-customBlue min-h-[45px] flex flex-row justify-between px-28 lg:px-52 items-center">
                <div className="text-white">{formattedDate}</div>

                <div className="flex flex-row gap-4">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full p-2">
                        <FaInstagram className="hover:text-pink-500 transition scale-125" />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full p-2">
                        <FaFacebook className="hover:text-blue-600 transition scale-125" />
                    </a>
                </div>
            </div>

            <div className="w-full h-auto min-h-[100px] lg:min-h-[200px] border-b-2 border-gray-400 justify-between items-center flex flex-row px-4 lg:px-8">

                <div className="flex flex-row gap-2">
                    <img src={kozak} alt="Kozak Logo" className="h-auto w-auto max-h-[80px] max-w-[80px] lg:max-h-[140px] lg:max-w-[140px]"/>
                    <div className="flex flex-col justify-center max-w-[300px]">
                        <p className="font-extrabold text-lg lg:text-3xl">Козацький Вісник</p>
                        <p className="text-sm">Kozak Herald: Ukrainian Spirit, Island Home</p>
                    </div>
                </div>
                

                <div className="hidden lg:flex flex-row justify-evenly items-center lg:ml-56">
                    {LINKS.map((link, index) => (
                        <div key={index} className="mr-4">
                            <div className="text-base sm:text-sm lg:text-lg cursor-pointer">{link.name}</div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-row gap-4">
                    <div className="lg:hidden scale-75 text-gray-600 hover:text-black cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </div>

                    <div className="scale-75 lg:scale-95">
                        <FaSearch className="text-xl text-gray-600 hover:text-black cursor-pointer" />
                    </div>

                </div>

            </div>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.5 }} className="flex flex-col items-center bg-white py-4 border-b-2 border-gray-400 lg:hidden">
                        {LINKS.map((link, index) => (
                        <a
                            key={index}
                            href={link.link}
                            className="py-2 text-sm"
                        >
                            {link.name}
                        </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            

        </div>
    </div>
  )
}

export default Navbar