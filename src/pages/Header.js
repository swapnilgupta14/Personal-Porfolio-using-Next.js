import { Router } from 'next/router';
import React from 'react';

const Header = () => {
    return (
        <>
            <style jsx global>{`
        body {
          cursor: none;
        }
      `}</style>
            <header className="bg-transparent py-4 px-5">
                <nav className="w-11/10 lg:w-8/12 mx-auto flex justify-between items-center backdrop-blur-lg bg-white/30 rounded-lg shadow-md p-4 bg-gradient-to-r from-gray-900 via-gray-700 to-black py-4 px-5">
                    <div className="text-white text-2xl font-bold">
                        Swapnil
                    </div>
                    <div className="">
                        <ul className="flex space-x-8 text-lg text-white-800 font-medium">
                            <li className="hover:text-blue-600 transition duration-300 ease-in-out cursor-pointer" onClick={Router.push('/Page')}>Home</li>
                            <li className="hover:text-blue-600 transition duration-300 ease-in-out cursor-pointer">About</li>
                            <li className="hover:text-blue-600 transition duration-300 ease-in-out cursor-pointer">Projects</li>
                            <li className="hover:text-blue-600 transition duration-300 ease-in-out cursor-pointer">Contact Me</li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;
