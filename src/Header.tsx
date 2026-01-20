export type HeaderProps = {
  title: string;
};

const NavElement = function ({ title, href }: { title: string; href: string }) {
  return (
    <a
      href={href}
      className="font-mono px-4 py-2 text-white hover:bg-gray-950 transition duration-360 flex items-center"
    >
      {title}
    </a>
  );
};

export default function Header(props: HeaderProps) {
  return (
    <div className="flex flex-row w-full bg-gray-800 items-stretch flex-wrap">
      <header className="grow px-4 py-2">
        <h1 className="font-mono text-3xl text-white">{props.title} </h1>
      </header>

      <nav className="flex flex-row">
        <NavElement title="Contact" href="#contact" />
        <NavElement title="About" href="#about" />
        <NavElement title="Projects" href="#projects" />
      </nav>
    </div>
  );
}
