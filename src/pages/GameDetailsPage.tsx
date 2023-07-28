import { useParams } from "react-router-dom";
import useGameDetail from "../hooks/useGameDetail";
import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGameDetail(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
      </GridItem>
      <GridItem>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
          <GameAttributes game={game} />
          <GameTrailer gameId={game.id} />
          <GameScreenshots gameId={game.id} />
        </SimpleGrid>
      </GridItem>
    </>
  );
};

export default GameDetailsPage;
