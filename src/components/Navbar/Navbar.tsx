import styled from 'styled-components'
import { Link } from 'react-scroll'

import styles from './Navbar.module.css'

const NavContainer = styled.div`
  background-color: white;
  box-shadow: 0 1px 4px -1px rgba(var(--rgb-arsenic), 0.25);
  position: sticky;
  top: 0;
  z-index: 1000;
`

const NavLinks = styled.nav`
  align-items: center;
  display: flex;
  height: 4rem;
  margin: 0 auto;
  padding: 0 6rem;
  width: 80rem;
`

const Navbar = () => {
  const rem = 16
  const offset = -8 * rem

  return (
    <NavContainer>
      <NavLinks>
        <Link
          activeClass={styles.active}
          className={styles['nav-link']}
          duration={500}
          offset={offset}
          smooth={true}
          spy={true}
          to="home"
        >
          Home
        </Link>
        <Link
          activeClass={styles.active}
          className={styles['nav-link']}
          duration={500}
          offset={offset}
          smooth={true}
          spy={true}
          to="projects"
        >
          Projects
        </Link>
        <Link
          activeClass={styles.active}
          className={styles['nav-link']}
          duration={500}
          offset={offset}
          smooth={true}
          spy={true}
          to="contact"
        >
          Contact
        </Link>
      </NavLinks>
    </NavContainer>
  )
}

export default Navbar
