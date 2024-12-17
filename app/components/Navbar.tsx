import Link from "next/link";
import Image from "next/image";

import {BiQuestionMark} from "react-icons/bi";
import ThemeSwitch from "@/app/components/ThemeSwitch";

export default function Navbar() {
    return (
        <div>

            <nav
                className="flex flex-row justify-around dark:bg-neutral-900 bg-neutral-300 p-4">

                <div className="basis-1/4 flex flex-row justify-evenly items-center">
                    <Image
                        className="dark rounded-3xl object-cover p-1 dark:bg-neutral-800 bg-neutral-200 border-stone-800"
                        src="https://avatars.githubusercontent.com/u/102479896?v=4"
                        alt="Profile Picture"
                        width={70}
                        height={38}
                        priority
                    />
                    <Link href="about-me"
                          className=" hover:bg-stone-100 bg-neutral-200 duration-200 dark:hover:bg-neutral-700 dark:bg-stone-800 shadow-md py-2 px-4 inline-flex items-center">
                        About Me
                        <BiQuestionMark fontSize="30"/>
                    </Link>


                </div>


                <div className="basis-1/4 flex flex-row justify-evenly items-center">
                    <Link href="showcase"
                          className="hover:bg-stone-100 bg-neutral-200 duration-200 dark:hover:bg-neutral-700 shadow-md dark:bg-stone-800 py-2 px-4">Showcase</Link>
                    <Link href="experience"
                          className="hover:bg-stone-100 bg-neutral-200 duration-200 dark:hover:bg-neutral-700 shadow-md dark:bg-stone-800 py-2 px-4">Experience</Link>
                    <Link href="contact-me"
                          className="hover:bg-stone-100 bg-neutral-200 duration-200 dark:hover:bg-neutral-700 shadow-md dark:bg-stone-800 py-2 px-4">Contact Me</Link>
                    <ThemeSwitch></ThemeSwitch>
                </div>


            </nav>

        </div>
    )
}