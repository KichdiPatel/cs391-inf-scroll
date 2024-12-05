import DogImageList from "./components/dog-image-list";
import styled from "styled-components";

const StyledTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #4a90e2;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

export default function App() {
  return (
    <>
      <StyledTitle>Infinite Dog Pictures</StyledTitle>
      <DogImageList />
    </>
  );
}
