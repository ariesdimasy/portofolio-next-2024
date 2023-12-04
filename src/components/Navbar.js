import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>
          <Link href="/"> Yudhistira Media </Link>
        </h1>
      </div>
      <div className="menu">
        <span>
          {" "}
          <Link href="/post">Article</Link>{" "}
        </span>
        <span>
          {" "}
          <Link href="/project">Project</Link>{" "}
        </span>
        <span>
          <a href="https://github.com/ariesdimasy">
            <img src="/github.svg" width={24} height={24} alt="github" />
          </a>
        </span>
        <span className="">
          <a>
            <img src="/twitter.svg" />
          </a>
        </span>
        <span className="">
          <a href="https://linkedin.com/in/ariesdimasy">
            <img src="/linkedin.svg" alt="linkedin" />
          </a>
        </span>
      </div>
    </nav>
  );
}
