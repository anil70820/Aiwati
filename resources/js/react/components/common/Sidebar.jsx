import React, { useEffect, useState } from "react";
import { SIDEBAR_LINKS_LIST } from "../../utils/helper";
import Cta from "./Cta";
import { RiCloseFill, RiDashboardFill } from "react-icons/ri";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(window.innerWidth >= 640); // 640px SM ke liye

    useEffect(() => {
        const handleResize = () => {
            setIsOpen(window.innerWidth >= 640); // SM se chhota ho to false, warna true
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="flex h-screen">
            <div onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? "w-screen h-screen fixed bg-black bg-opacity-30 opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} sm:hidden `}></div>
            {/* Sidebar */}
            <div
                className={`bg-gray-800 text-white fixed transition-all duration-300 w-[250px] px-3 py-8 ${
                    isOpen ? "left-0" : "-left-full"
                } h-full`}
            >
                {/* Sidebar Content */}
                <div className="flex flex-col space-y-6 relative">
                    <span
                        onClick={() => setIsOpen(!isOpen)}
                        className="absolute cursor-pointer right-1 -top-4 size-10 font-bold flex justify-center items-center text-4xl"
                    >
                        <RiCloseFill />
                    </span>
                    <h1 className="text-xl font-bold transition-all flex items-center gap-2">
                        <span>
                            <RiDashboardFill />
                        </span>{" "}
                        Dashboard
                    </h1>
                    <ul className="space-y-4">
                        {SIDEBAR_LINKS_LIST.map((item, index) => (
                            <div key={index}>
                                <a
                                    href={item.link}
                                    className="flex items-center justify-between gap-2 duration-300 p-2 rounded-md hover:bg-gray-700"
                                >
                                    <div className="flex items-center gap-2">
                                        <span className="size-5 duration-300 flex justify-center items-center">
                                            {item.icon}
                                        </span>
                                        <p className="!leading-[100%] mb-0 text-white">
                                            {item.name}
                                        </p>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Main Content Area */}
            <div
                className={`flex-1 bg-gray-100 transition-all duration-300 p-6 ${
                    isOpen ? "sm:ms-[250px] sm:w-[calc-(100vh-250px)]" : ""
                }`}
            >
                <Cta className="capitalize" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? "close sidebar" : "open sidebar"}
                </Cta>
                <h1 className="text-2xl font-bold mt-4">Main Content</h1>
                <p className="mt-2">This is your main content area.</p>
            </div>
        </div>
    );
};

export default Sidebar;
