import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    <FaLinkedin size={20} />
                </>
            ),
            href: "https://www.linkedin.com/company/edcpvg/",
            style: "rounded-tr-md",
        },
        {
            id: 2,
            child: (
                <>
                    <AiOutlineInstagram size={20} />
                </>
            ),
            href: "https://www.instagram.com/edc_pvg/?hl=en",
        },
        {
            id: 3,
            child: (
                <>
                    <HiOutlineMail size={20} />
                </>
            ),
            href: "mailto:edcpvg@gmail.com",
        },
        // {
        //     id: 4,
        //     child: (
        //         <>
        //              <BsFillPersonLinesFill size={20} />
        //         </>
        //     ),
        //     href: "https://drive.google.com/file/d/15tc0hw2XHdDGu9QDJuoS8Lw-pFYIRV0E/view?usp=drive_link",
        //     style: "rounded-br-md",
        //     download: true,
        // },
    ];

    return (
        <div className=" lg:flex flex-col top-[65%] right-0 fixed">
            <ul>
                {links.map(({ id, child, href, style, download }) => (
                    <li
                        key={id}
                        className={
                            "flex justify-between items-center w-12 h-14 px-4  hover:ml-[-10px] hover:rounded-md duration-300 bg-[#86C232]" +
                            " " +
                            style
                        }
                    >
                        <a
                            href={href}
                            className="flex justify-between items-center w-full text-white"
                            download={download}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SocialLinks;
