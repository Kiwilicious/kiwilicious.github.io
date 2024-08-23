import styled from 'styled-components'

interface TextCardProps {
  title: string
  description: string
  link?: string
}

const TextCardContainer = styled.div`
  padding: 0 20px 20px;

  &:last-child {
    padding-bottom: 0px;
  }
`

const Link = styled.a`
  color: var(--vista-blue);
`

const TextTile = ({ title, description, link }: TextCardProps) => (
  <TextCardContainer>
    <h4>
      {link && (
        <>
          <Link href={link} target="_blank">
            Link
          </Link>
          &nbsp;|&nbsp;
        </>
      )}
      {title}
    </h4>
    <p>{description}</p>
  </TextCardContainer>
)

export default TextTile
