import React from "react";
import { MdNightlight, MdWbSunny} from 'react-icons/md';

const Header = ({darkMode, setDarkMode}) => {
    return <header className="bg-gray-100 dark:bg-black text-gray-900 dark:text-white">
        <nav className="flex justify-between items-center p-5">
            <h1 className="text-lg">
                {/* Por si quero añadir algo ao lado esquerdo */}
            </h1>
            <div onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? (
                    <MdWbSunny className="text-2xl cursor-pointer" />
                ) : (
                    <MdNightlight className="text-2xl cursor-pointer"/>
                )}
            </div>
        </nav>
    </header>
};

export default Header;



