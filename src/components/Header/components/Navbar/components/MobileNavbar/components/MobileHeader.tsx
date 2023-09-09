import { Link } from 'react-router-dom'
import { Github, Linkedin, SiteLogo } from '@assets/icons'
import { GITHUB_URL, LINKEDIN_URL } from '@constants'

interface MobileHeaderProps {
  onClick: () => void
}

const MobileHeader = ({ onClick }: MobileHeaderProps) => {
  return (
    <div className="grid grid-cols-3">
      <div className="flex justify-start align-center">
        <button
          type="button"
          className="rounded-md p-2 text-gray-400 hover:bg-gradient hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          onClick={onClick}
        >
          <svg
            className="block h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div className="flex justify-center align-center">
        <Link to="/">
          <SiteLogo />
        </Link>
      </div>
      <div className="flex justify-end align-center gap-3">
        <Link to={GITHUB_URL} target="_blank">
          <Github />
        </Link>
        <Link to={LINKEDIN_URL} target="_blank">
          <Linkedin />
        </Link>
      </div>
    </div>
  )
}

export default MobileHeader
