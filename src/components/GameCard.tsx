import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card>
        <Link to={"/games/" + game.slug}>
          <Image src={getCroppedImageUrl(game.background_image)} />
          <CardBody>
            <HStack justifyContent={"space-between"} marginBottom={3}>
              <PlatformIconList
                platforms={game.parent_platforms.map((p) => p.platform)}
              />
              <CriticScore score={game.metacritic} />
            </HStack>
            <Heading fontSize={"1.4rem"}>{game.name}</Heading>
          </CardBody>
        </Link>
      </Card>
    </>
  );
};

export default GameCard;
