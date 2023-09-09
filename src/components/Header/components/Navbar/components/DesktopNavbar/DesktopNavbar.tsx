import { Link } from 'react-router-dom'

import { SocialIcons } from '@components'
import { SiteLogo } from '@assets/icons'

import { links } from '../../helpers/links'

const DesktopNavbar = () => {
  return (
    <nav className="hidden md:block">
      <div className="grid grid-cols-3">
        <div className="flex justify-start align-center">
          <Link to="/">
            <SiteLogo />
          </Link>
        </div>
        <div className="flex items-center justify-center text-primary w-full">
          {links.map(({ to, label }) => (
            <Link key={label} to={to} className="px-3 py-2 hover:text-gradient">
              {label}
            </Link>
          ))}
        </div>
        <SocialIcons />
      </div>
    </nav>
  )
}

export default DesktopNavbar
