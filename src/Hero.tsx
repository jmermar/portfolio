import {
  BsLinkedin,
  BsGithub,
  BsMailbox,
  BsPhone,
  BsPhoneFill,
  BsPcHorizontal,
} from "react-icons/bs";
import { PiMailbox, PiMailboxFill, PiPhone, PiPhoneFill } from "react-icons/pi";

export type HeroProps = {};

export default function Hero(props: HeroProps) {
  return (
    <div
      id="contact"
      className="flex flex-row w-full px-4 py-2 align-baseline gap-4 mt-12 flex-wrap"
    >
      <div className="rounded-4xl overflow-hidden max-w-30 h-fit">
        <img className="h-full max-w-full" src="/profile.webp" />
      </div>
      <div className="grow flex flex-col  max-w-xl">
        <h1 className="font-mono text-4xl font-bold text-gray-900">
          José Meroño Martínez.
        </h1>
        <h2 className="font-mono text-2xl font-bold text-gray-800">
          Fullstack developer
        </h2>
        <div
          className="flex flex-row flex-wrap gap-4 items-center"
          style={{ fontSize: "1.75em" }}
        >
          <a href="https://www.linkedin.com/in/josemeronomartinezjmermar">
            <BsLinkedin />
          </a>
          <a href="https://www.github.com/jmermar">
            <BsGithub />
          </a>
          <div
            className="flex flex-row gap-2 items-center"
            style={{ fontSize: "1.25em" }}
          >
            <PiMailboxFill />
            <p className="text-sm font-bold font-mono">josesmerono@gmail.com</p>
          </div>
          <div
            className="flex flex-row gap-2 items-center"
            style={{ fontSize: "1.25em" }}
          >
            <PiPhoneFill />
            <p className="text-sm font-bold font-mono">+34 626 53 23 76</p>
          </div>
        </div>
      </div>
    </div>
  );
}
