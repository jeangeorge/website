import { Link } from 'react-router-dom'
import { links } from '../../../helpers/links'

interface MobileLinkProps {
  to: string
  label: string
}

const MobileLink = ({ to, label }: MobileLinkProps) => {
  return (
    <Link
      to={to}
      className="text-primary hover:bg-gradient hover:text-white block rounded-md px-3 py-2 text-base font-medium"
    >
      {label}
    </Link>
  )
}

const MobileContent = () => {
  return (
    <div id="mobile-menu">
      <div className="px-2 pb-3 pt-2">
        {links.map(link => (
          <MobileLink key={link.label} {...link} />
        ))}
      </div>
    </div>
  )
}

export default MobileContent
