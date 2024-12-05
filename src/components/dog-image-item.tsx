import styled from "styled-components";

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 10px 8px rgba(0, 0, 0, 0.2);
`;

export default function DogImageItem({ image }: { image: string }) {
  return <StyledImage src={image} alt="Dog" />;
}
