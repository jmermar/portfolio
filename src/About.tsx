const AboutLine = ({ title, content }: { title: string; content: string }) => {
  return (
    <p className="">
      <strong>{title}</strong>: {content}
    </p>
  );
};

export const About = function () {
  return (
    <div id="about" className="px-4 flex flex-col gap-2">
      <div>
        <h1 className="font-mono text-3xl font-bold">About Me</h1>
      </div>
      <div>
        <h2 className="font-mono text-2xl font-bold">Skills</h2>
        <AboutLine
          title="Languages"
          content="Javascript, Typescript, Python, C/C++"
        />
        <AboutLine
          title="Backend"
          content="Nodejs, Expressjs, Nestjs, FastAPI, Django"
        />
        <AboutLine
          title="Frontend"
          content="HTML/CSS, React, Nextjs, Tailwind"
        />
        <AboutLine
          title="BBDD"
          content="PostgreSQL, MongoDB, OracleSQL, SQLite"
        />
        <AboutLine title="Tools" content="Git, Docker, CMake, Linux, Bash" />
      </div>
      <div>
        <h2 className="font-mono text-2xl font-bold">Languages</h2>
        <AboutLine title="Spanish" content="Native" />
        <AboutLine title="English" content="B2" />
      </div>
      <div>
        <h2 className="font-mono text-2xl font-bold"> Education</h2>
        <AboutLine
          title="BSc. Computer Science"
          content="University of Murcia, 2023"
        />
      </div>
    </div>
  );
};
