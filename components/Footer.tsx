import { FaGithub } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="dark:bg-neutral-900 dark:text-stone-500 bg-neutral-200 text-stone-900  grow p-4 m-auto flex justify-center flex-row gap-10 items-center">
            <a target="_blank" href="https://github.com/Carter907">
                <FaGithub fontSize="40" className="fill-neutral-500"></FaGithub>
            </a>
            <a target="_blank" href="https://www.hackerrank.com/profile/carter_dev907">
                <FaHackerrank fontSize="40" className="fill-neutral-500"></FaHackerrank>
            </a>
            <a target="_blank" href="https://leetcode.com/u/Carter907/">
                <SiLeetcode fontSize="40" className="fill-neutral-500"></SiLeetcode>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/carter-speerschneider/">
                <FaLinkedin fontSize="40" className="fill-neutral-500"></FaLinkedin>
            </a>

            <p>Copyright © 2024 Carter S. All rights reserved.</p>
        </footer>
    );
};