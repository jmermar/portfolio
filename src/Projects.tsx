import { BsGithub } from "react-icons/bs";

type ProjectProps = {
  name: string;
  img: string;
  description: string;
  github: string;
};

const Project = (props: ProjectProps) => {
  return (
    <div className="flex flex-row flex-wrap">
      <div className="rounded-2xl overflow-hidden max-w-50 h-fit">
        <img className="h-full max-w-full" src={props.img} />
      </div>
      <div className="flex flex-col gap-2 pl-2">
        <div className="flex flex-col">
          <h1 className="text-2xl font-mono font-bold">{props.name}</h1>
          <a href={props.github} className="inline">
            <BsGithub style={{ fontSize: "1.5em" }} />
          </a>
        </div>
        <p className="font-mono text-sm">{props.description}</p>
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-5xl font-mono font-bold">Personal projects</h1>
      <div className="flex flex-cols">
        <Project
          name="Project A"
          img="profile.webp"
          description="Project A description"
          github="Github"
        />
      </div>
    </div>
  );
};
