import Image from "next/image";

export const runtime = "edge"

export default function Home() {
  return (
    <div >
        <Image
          className="dark:invert"
          src="https://avatars.githubusercontent.com/u/102479896?s=400&u=c2a320f715d90483a99e9f08ca3dc3beab84cd4f&v=4"
          alt="Profile Picture"
          width={180}
          height={38}
          priority
        />

    </div>
  );
}
