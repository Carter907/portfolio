import Link from "next/link";
import Image from "next/image";

import { BiQuestionMark } from "react-icons/bi";
import ThemeSwitch from "@/app/components/ThemeSwitch";

export default function Navbar() {
    return (
        <nav className="flex flex-row justify-around bg-neutral-900 p-4 text-stone-400">

            <div className="basis-1/4 flex flex-row justify-evenly items-center">
                <Link href="about-me" className="duration-200 hover:bg-neutral-800 bg-stone-900 shadow-md rounded p-4 flex flex-row items-center">
                    About Me
                    <BiQuestionMark fontSize="30"/>
                </Link>
                <Image
                    className="absolute dark rounded-full object-cover p-4 translate-y-10 -translate-x-60 bg-neutral-800 border-stone-800"
                    src="https://avatars.githubusercontent.com/u/102479896?v=4"
                    alt="Profile Picture"
                    width={180}
                    height={38}
                    priority
                />


            </div>


            <div className="basis-1/4 flex flex-row justify-evenly items-center">
                <Link href="showcase" className="duration-200 hover:bg-neutral-800 rounded shadow-md bg-stone-900 p-4">Showcase</Link>
                <Link href="experience" className="duration-200 hover:bg-neutral-800 rounded shadow-md bg-stone-900 p-4">Experience</Link>
                <ThemeSwitch></ThemeSwitch>
            </div>


        </nav>
    )
}