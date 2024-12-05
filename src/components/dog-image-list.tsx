import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import styled from "styled-components";
import { DogImageResponse } from "./types";
import DogImageItem from "./dog-image-item";

const DogImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 60%;
  padding: 20px;
  margin: 0 auto;
  box-sizing: border-box;
`;

export default function DogImageList() {
  const [dogImages, setDogImages] = useState<string[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchDogImages = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data: DogImageResponse = await response.json();
      if (data.status === "success") {
        setDogImages((prevImages) => [...prevImages, data.message]);
      }
    } catch (error) {
      console.error("Error fetching dog images:", error);
      setHasMore(false);
    }
  };

  useEffect(() => {
    fetchDogImages();
  }, []);

  return (
    <InfiniteScroll
      dataLength={dogImages.length}
      next={fetchDogImages}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={<p>No more dog images to show.</p>}
    >
      <DogImageContainer>
        {dogImages.map((image) => (
          <DogImageItem image={image} />
        ))}
      </DogImageContainer>
    </InfiniteScroll>
  );
}
