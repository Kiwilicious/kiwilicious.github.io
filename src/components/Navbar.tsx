import styled from 'styled-components'
import { Link } from 'react-scroll'

import styles from './Navbar.module.css'

const NavContainer = styled.div`
  background-color: snow;
  box-shadow: 0 1px 4px -1px rgba(var(--rgb-arsenic), 0.25);
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
`

const NavLinks = styled.nav`
  align-items: center;
  display: flex;
  font-size: 1.5rem;
  height: 4rem;
  margin: 0 auto;
  max-width: 60rem;

  @media (max-width: 1000px) {
    font-size: 1rem;
    padding: 0 2rem;
  }
`

const Navbar = () => {
  // height of navbar + content body top margin in px
  const offset = 8 * 16 * -1

  return (
    <NavContainer>
      <NavLinks>
        <Link
          activeClass={styles.active}
          className={styles['nav-link']}
          duration={300}
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
          duration={300}
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
          duration={300}
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
