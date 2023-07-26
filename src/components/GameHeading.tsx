import { Heading } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";
import useGenre from "../hooks/useGenre";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatforms(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as={"h1"} marginBottom={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
