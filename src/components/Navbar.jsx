import header from "../assets/header-photo.png"
import { FaInstagram, FaFacebook } from "react-icons/fa"

const Navbar = () => {

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
            <img src={header} className="w-full max-h-[200px] sm:max-h-[500px] lg:max-h-[600px] object-cover"/>

            <div className="w-full h-auto bg-customBlue min-h-[45px] flex flex-row justify-between px-28 lg:px-52 items-center">
                <div className="text-white">{formattedDate}</div>
                
                <div className="flex flex-row gap-4">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full p-2">
                        <FaInstagram className="hover:text-pink-500 transition" />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full p-2">
                        <FaFacebook className="hover:text-blue-600 transition" />
                    </a>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Navbar