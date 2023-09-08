import { Link } from "react-router-dom"
import { GithubIcon, LinkedinIcon, LogoIcon } from "../../assets/icons"

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <Link to="/">
        <LogoIcon />
      </Link>

      <nav className="flex gap-8 text-xl text-primary">
        <Link to="/" className="hover:text-gradient">
          Home
        </Link>
        <Link to="/about" className="hover:text-gradient">
          About
        </Link>
        <Link to="/stack" className="hover:text-gradient">
          Stack
        </Link>
        <Link to="/projects" className="hover:text-gradient">
          Projects
        </Link>
        <Link to="/contact" className="hover:text-gradient">
          Contact
        </Link>
      </nav>

      <div className="flex gap-4">
        <Link to="https://github.com/jeangeorge" target="_blank">
          <GithubIcon />
        </Link>
        <Link to="https://www.linkedin.com/in/jean-george/" target="_blank">
          <LinkedinIcon />
        </Link>
      </div>
    </header>
  )
}

export default Header
