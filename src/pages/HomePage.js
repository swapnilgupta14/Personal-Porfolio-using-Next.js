import React from 'react';

const HomePage = () => {
    return (
        <div className="relative flex flex-row items-center justify-center">
            <div className="text-center bg-black text-white font-bold text-4xl lg:text-6xl xl:text-8xl font-zefani subpixel-antialiased w-full md:w-auto">
                <p className="mb-2">I'm</p>
                <p className="mb-2">Swapnil</p>
                <p>Gupta</p>
            </div>
            <div className="hidden lg:block bg-black w-2/3 ml-4 p-8 rounded-lg shadow-lg">
                <p className="text-lg">Hello</p>
                <p className="text-xl mt-4">Welcome to my portfolio!</p>
                <p className="mt-4">I am a passionate developer with expertise in React, Node.js, and more.</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600">
                    Learn More
                </button>
            </div>
        </div>
    );
}

export default HomePage;