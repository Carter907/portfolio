
import Link from "next/link";
import Image from "next/image";

import {FaHome, FaNewspaper} from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { LuBrainCircuit } from "react-icons/lu";
import { BiSolidContact } from "react-icons/bi";
import ThemeSwitch from "@/components/ThemeSwitch";



export const runtime = "edge"

export default function Navbar() {
    return (
        <nav
            className="flex flex-row justify-around dark:bg-neutral-900 bg-neutral-300 p-4">

            <Image
                className="dark rounded-3xl object-cover p-1 dark:bg-neutral-800 bg-neutral-200 border-stone-800"
                src="https://avatars.githubusercontent.com/u/102479896?v=4"
                alt="Profile Picture"
                width={70}
                height={38}
                priority
            />


            <Link href="/" prefetch
                  className="self-center rounded-b-3xl border-t-4 border-t-stone-400 dark:border-t-stone-700 hover:bg-stone-100 bg-neutral-200 duration-200 dark:hover:bg-neutral-700 dark:bg-stone-800 shadow-md py-2 px-4">
                Home
                <FaHome className={"inline w-10"} fontSize="20"/>
            </Link>
            <div className={"flex flex-row basis-1/2 justify-around"}>

            <Link href="/posts" prefetch
                  className="self-center rounded-b-3xl border-t-4 border-t-stone-400 dark:border-t-stone-700 hover:bg-stone-100 bg-neutral-200 duration-200 dark:hover:bg-neutral-700 dark:bg-stone-800 shadow-md py-2 px-4">
                Blogs
                <FaNewspaper className={"inline w-10"} fontSize="20"/>
            </Link>
            <Link href="/showcase" prefetch
                  className="self-center rounded-b-3xl border-t-4 border-t-stone-400 dark:border-t-stone-700 hover:bg-stone-100 bg-neutral-200 duration-200 dark:hover:bg-neutral-700 shadow-md dark:bg-stone-800 py-2 px-4">
                Showcase
                <GrProjects className={"inline w-10"} fontSize="20"/>
            </Link>
            <Link href="/experience" prefetch
                  className="self-center rounded-b-3xl border-t-4 border-t-stone-400 dark:border-t-stone-700 hover:bg-stone-100 bg-neutral-200 duration-200 dark:hover:bg-neutral-700 shadow-md dark:bg-stone-800 py-2 px-4">
                Experience
                <LuBrainCircuit className={"inline w-10"} fontSize="20"/>
            </Link>
            <Link href="/contact-me" prefetch
                  className="self-center rounded-b-3xl border-t-4 border-t-stone-400 dark:border-t-stone-700 hover:bg-stone-100 bg-neutral-200 duration-200 dark:hover:bg-neutral-700 shadow-md dark:bg-stone-800 py-2 px-4">
                Contact Me
                <BiSolidContact className={"inline w-10"} fontSize="20"/>
            </Link>
            </div>
            <div className={"inline self-center"}>
                <ThemeSwitch></ThemeSwitch>
            </div>
        </nav>
    )
}