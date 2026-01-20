import { BsGithub } from "react-icons/bs";

type ProjectProps = {
  name: string;
  img?: string;
  description: string;
  github: string;
  stack: string[];
};

const Project = (props: ProjectProps) => {
  return (
    <div id="projects" className="flex flex-row gap-2">
      <div className="flex flex-col w-fit">
        <a
          href={props.github}
          className="inline hover:text-blue-800 transition"
        >
          <div className="flex flex-col">
            <h1 className="text-2xl font-mono font-bold">{props.name}</h1>
          </div>
        </a>
        <div className="flex flex-row mb-2 flex-wrap gap-2">
          {props.stack.map((label, idx) => (
            <div
              key={idx}
              className="font-mono text-xs text-gray-100 font-bold bg-gray-800 rounded-md px-2 py-1"
            >
              {label}
            </div>
          ))}
        </div>
        <p className="">{props.description}</p>
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-3xl font-mono font-bold">Personal projects</h1>
      <div className="flex flex-col gap-2">
        <Project
          name="Spring JWT Text"
          stack={[
            "Java",
            "Spring Boot",
            "Spring Security",
            "PostgreSQL",
            "Docker",
          ]}
          description="Implementation of an JWT authentication middleware for Spring Boot, allowing an user to login for generating a session token which can be used to access protected endpoints, and handling authentication errors, rejecting unauthorized request and returning human-readable codes."
          github="https://github.com/jmermar/Spring-JWT-Test"
        />
        <Project
          name="React editable context for StoryBook."
          stack={["Typescript", "React", "StoryBook"]}
          description="Project that I realized while working at Connectif A.I. to make possible to edit react component properties in StoryBook."
          github="https://github.com/jmermar/storybook-react-editable-context"
        />
        <Project
          name="HTTP static server"
          stack={["C", "Unix"]}
          description="Static server by implementing HTTP 1.1 protocol from scratch in C and only using standard library and Unix syscalls, right now it can handle client request, parse it, and either return the requested file, reject forbidden request methods or return a not found error if file could not be found."
          github="https://github.com/jmermar/simple-static-server"
        />
        <Project
          name="AABlocks"
          img="aablocks.webp"
          stack={["C++", "Vulkan", "SQLite", "CMake"]}
          description="Voxel based game with multithreading, modern rendering techniques user interface, random world generation and persistence using SQL databases."
          github="https://github.com/jmermar/AABBlocks"
        />
        <Project
          name="Real time water rendering"
          img="vulkanwater.webp"
          stack={["C++", "Vulkan", "CMake"]}
          description="Rendering an scene with water in real time by using Fractional Brownian Motion and PBR lighting and reflections. It uses compute shaders to dispatch the geometry commands in the GPU as well as GPU-based LOD for water meshes."
          github="https://github.com/jmermar/Vulkan-Water-Renderer"
        />
      </div>
    </div>
  );
};
