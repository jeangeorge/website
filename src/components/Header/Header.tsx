import { useState } from 'react'
import { Link } from 'react-router-dom'

import { GITHUB_URL, LINKEDIN_URL } from '@constants'
import { Github, Linkedin, SiteLogo } from '@assets/icons'

const Header = () => {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!open)
  }

  return (
    <nav>
      <div className="relative flex h-16 items-center justify-between">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button
            type="button"
            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gradient hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={toggle}
          >
            <span className="absolute -inset-0.5"></span>
            <span className="sr-only">Open main menu</span>
            <svg
              className="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <svg
              className="hidden h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start w-full">
          <div className="flex flex-shrink-0 items-center">
            <Link to="/">
              <SiteLogo />
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:block w-full">
            <div className="flex items-center justify-center space-x-4 text-primary md:text-xl w-full">
              <Link to="/" className="px-3 py-2 hover:text-gradient">
                Home
              </Link>
              <Link to="/about" className="px-3 py-2 hover:text-gradient">
                About
              </Link>
              <Link to="/stack" className="px-3 py-2 hover:text-gradient">
                Stack
              </Link>
              <Link to="/projects" className="px-3 py-2 hover:text-gradient">
                Projects
              </Link>
              <Link to="/contact" className="px-3 py-2 hover:text-gradient">
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-y-0 right-0 flex gap-3 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <Link to={GITHUB_URL} target="_blank">
            <Github />
          </Link>
          <Link to={LINKEDIN_URL} target="_blank">
            <Linkedin />
          </Link>
        </div>
      </div>

      {open && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              to="/"
              className="text-primary hover:bg-gradient hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-primary hover:bg-gradient hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              About
            </Link>
            <Link
              to="/stack"
              className="text-primary hover:bg-gradient hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Stack
            </Link>
            <Link
              to="/projects"
              className="text-primary hover:bg-gradient hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="text-primary hover:bg-gradient hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Projects
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Header
