import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return null;
  }

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3} marginTop={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem paddingY={"8px"} key={genre.id}>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize={"32px"}
                objectFit={"cover"}
                borderRadius={8}
              />
              <Button
                fontSize={"lg"}
                fontWeight={genre.id === selectedGenre?.id ? "bold" : ""}
                onClick={() => onSelectGenre(genre)}
                variant={"link"}
                whiteSpace="normal"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
