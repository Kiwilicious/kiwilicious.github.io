import { FC } from 'react'
import styled from 'styled-components'
import { ProjectData } from '../constants'

type TextCardProps = ProjectData

const TextCardContainer = styled.div`
  padding: 0 1rem 1rem;

  &:last-child {
    padding-bottom: 0px;
  }
`

const AnchorLink = styled.a`
  color: var(--vista-blue);
  text-decoration: none;
`

const TextCard: FC<TextCardProps> = ({
  title,
  description,
  repoLink,
  projectLink,
}) => (
  <TextCardContainer>
    <h4>
      {title} | &nbsp;
      {projectLink && (
        <>
          <AnchorLink href={projectLink} target="_blank" rel="noreferrer">
            Project
          </AnchorLink>
          &nbsp;|&nbsp;
        </>
      )}
      <AnchorLink href={repoLink} target="_blank" rel="noreferrer">
        Repo
      </AnchorLink>
    </h4>
    <p>{description}</p>
  </TextCardContainer>
)

export default TextCard
