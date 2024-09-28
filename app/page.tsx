import Image from "next/image";
import Link from "next/link";

export const runtime = "edge"

export default function Home() {
    return (
        <div>
            <nav className="flex flex-row justify-around">

                    <div className="basis-1/4 flex flex-row justify-evenly items-center border">
                        <Link href="about-me" className="bg-stone-900 rounded p-4 border">About Me</Link>
                        <Image
                            className="dark rounded-full object-cover"
                            src="https://avatars.githubusercontent.com/u/102479896?v=4"
                            alt="Profile Picture"
                            width={180}
                            height={38}
                            priority
                        />


                    </div>


                <div className="basis-1/4 flex flex-row justify-evenly items-center border">
                    <Link href="showcase" className="rounded bg-stone-900 border p-4">Showcase</Link>
                    <Link href="experience" className="rounded bg-stone-900 border p-4">Experience</Link>
                </div>

            </nav>


        </div>

    );
}
