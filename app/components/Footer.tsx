import {FaGithub} from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";
import { FaRegChessKing } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="dark:bg-neutral-900 bg-neutral-200 text-stone-900  grow p-4 m-auto flex justify-center flex-row gap-10 items-center">
            <a href="https://github.com/Carter907">
                <FaGithub fontSize="40" className="fill-neutral-500"></FaGithub>
            </a>
            <a href="https://github.com/Carter907">
                <FaHackerrank fontSize="40" className="fill-neutral-500"></FaHackerrank>
            </a>
            <a href="https://github.com/Carter907">
                <FaRegChessKing fontSize="40" className="fill-neutral-500"></FaRegChessKing>
            </a>
            <a href="https://github.com/Carter907">
                <FaLinkedin fontSize="40" className="fill-neutral-500"></FaLinkedin>
            </a>

            <p>Copyright © 2023 Carter Speerschneider. All rights reserved.</p>
        </footer>
    );
};