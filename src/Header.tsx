export type HeaderProps = {
  title: string;
};

export default function Header(props: HeaderProps) {
  return (
    <div className="flex flex-row w-full px-4 py-2 align-baseline flex-wrap">
      <header className="grow">
        <h1 className="font-mono text-3xl">{props.title} </h1>
      </header>

      <nav className="flex flex-row">
        <p className="font-mono px-4 py-2">About</p>
        <p className="font-mono px-4 py-2">Projects</p>
        <p className="font-mono px-4 py-2">Contact</p>
      </nav>
    </div>
  );
}
