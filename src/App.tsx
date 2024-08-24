import styled from 'styled-components'
import Navbar from './components/Navbar'
import TextCard from './components/Textcard'

import { projectData } from './constants'
import EmailIcon from './assets/email.svg'
import GithubIcon from './assets/github.svg'
import LinkedinIcon from './assets/linkedin.svg'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const AppContent = styled.div`
  margin: 4rem auto;
  max-width: 60rem;

  @media (max-width: 1000px) {
    padding: 0 2rem;
  }
`

const SectionContainer = styled.div`
  margin-bottom: 4rem;
  line-height: 2rem;
`

const SectionTitle = styled.h3`
  font-weight: 500;
  text-transform: uppercase;
`

const ContactIconsContainer = styled.div`
  display: flex;
`

const ContactIcon = styled.a`
  margin-right: 2rem;
  width: 50px;
  height: 50px;
`

const App: React.FC = () => {
  return (
    <AppContainer>
      <Navbar />
      <AppContent>
        <SectionContainer id="home">
          <h1>James Hwang</h1>
          <h2>FullStack Web Developer</h2>
          <hr />
          <p>
            This is a simple site made in React and hosted on Github where you
            can also check out the source code. Contains some of my personal
            projects and code snippets. Feel free to reach out to me using the
            contacts posted below.
          </p>
        </SectionContainer>

        <SectionContainer id="projects">
          <SectionTitle>Projects</SectionTitle>
          {projectData.map(({ title, description, repoLink, projectLink }) => (
            <TextCard
              title={title}
              description={description}
              repoLink={repoLink}
              projectLink={projectLink}
              key={title}
            />
          ))}
        </SectionContainer>

        <SectionContainer id="contact">
          <SectionTitle>Contact</SectionTitle>
          <p>
            You can reach me via email and LinkedIn as well as view my profile
            over at Github.
          </p>
          <ContactIconsContainer>
            <ContactIcon
              href="mailto:jhwang137@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={EmailIcon} alt="email-icon"></img>
            </ContactIcon>
            <ContactIcon
              href="https://www.linkedin.com/in/jameshwangcali/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedinIcon} alt="linkedin-icon"></img>
            </ContactIcon>
            <ContactIcon
              href="https://github.com/Kiwilicious"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GithubIcon} alt="github-icon"></img>
            </ContactIcon>
          </ContactIconsContainer>
        </SectionContainer>
      </AppContent>
    </AppContainer>
  )
}

export default App
