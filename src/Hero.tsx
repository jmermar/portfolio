import { BsLinkedin, BsGithub } from "react-icons/bs";

export type HeroProps = {};

export default function Hero(props: HeroProps) {
  return (
    <div className="flex flex-row w-full px-4 py-2 align-baseline gap-4 mt-12 flex-wrap">
      <div className="rounded-4xl overflow-hidden max-w-3xs h-fit">
        <img className="h-full max-w-full" src="/profile.webp" />
      </div>
      <div className="grow flex flex-col gap-2 max-w-xl">
        <h1 className="font-mono text-3xl font-bold">
          Hi, I'm José Meroño Martínez, a developer focused in fullstack based
          in Spain.
        </h1>
        <div
          className="flex flex-row flex-wrap gap-4 items-center"
          style={{ fontSize: "1.5em" }}
        >
          <a href="https://www.linkedin.com/in/josemeronomartinezjmermar">
            <BsLinkedin />
          </a>
          <a href="https://www.github.com/jmermar">
            <BsGithub />
          </a>
          <a
            className="text-sm font-bold font-mono"
            href="josesmerono@gmail.com"
          >
            josesmerono@gmail.com
          </a>
        </div>
        <p className="font-mono text-sm">
          I've been working with Node.js and React profesionally, building
          RESTful APIs from the ground for e-commerce and SaaS platforms.
        </p>
        <p className="font-mono  text-sm">
          I've also worked with SQL and non SQL databases.
        </p>
      </div>
    </div>
  );
}
