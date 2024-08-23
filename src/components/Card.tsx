import styled from 'styled-components'

const Container = styled.a`
  border-radius: 5px;
  border: 1px solid var(--misty-moss);
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  position: relative;
  transition: 0.5s ease-out;
  text-decoration: none;
  width: 300px;

  :hover {
    transform: scale(1.05);
    transition: 0.5s ease-out;
  }
`

const ImageContainer = styled.img`
  height: 150px;
  width: 100%;
  display: block;
`

const TextContainer = styled.div`
  padding: 10px;
  height: 150px;
`

const TextTitle = styled.h3`
  color: var(--rich-black);
`

const TextDescription = styled.p`
  color: var(--rich-black);
`

const TextFade = styled.div`
  background: linear-gradient(0deg, white, transparent);
  bottom: 0;
  height: 50px;
  position: absolute;
  width: 100%;
`

type CardText = {
  title: string
  description: string
  linkUrl?: string
}

type CardProps = {
  cardText: CardText
  imageUrl?: string
}

const Card = ({ cardText, imageUrl }: CardProps) => {
  const { title, description, linkUrl } = cardText
  return (
    <Container href={linkUrl}>
      {imageUrl && <ImageContainer src={imageUrl} alt={title}></ImageContainer>}
      <TextContainer>
        <TextTitle>{title}</TextTitle>
        <TextDescription>{description}</TextDescription>
      </TextContainer>
      <TextFade />
    </Container>
  )
}

export default Card
