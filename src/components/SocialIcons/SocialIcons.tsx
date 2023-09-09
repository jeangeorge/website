import { Link } from 'react-router-dom'
import { Github, Linkedin } from '@assets/icons'
import { GITHUB_URL, LINKEDIN_URL } from '@constants'

const socials = [
  { component: <Github />, to: GITHUB_URL },
  { component: <Linkedin />, to: LINKEDIN_URL },
]

const SocialIcons = () => {
  return (
    <div className="flex justify-end align-center gap-3">
      {socials.map(({ component, to }) => (
        <Link to={to} target="_blank">
          {component}
        </Link>
      ))}
    </div>
  )
}

export default SocialIcons
