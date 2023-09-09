import { useState } from 'react'
import { MobileContent, MobileHeader } from './components'

const MobileNavbar = () => {
  const [isOpen, setIsOption] = useState(false)

  return (
    <nav className="hidden max-md:block">
      <MobileHeader onClick={() => setIsOption(!isOpen)} />
      {isOpen && <MobileContent />}
    </nav>
  )
}

export default MobileNavbar
