import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      _hover={{
        transform: "scale(1.025)",
        transition: "transform 0.15s ease-in",
      }}
      borderRadius={10}
      overflow={"hidden"}
      border={"2px"}
      borderColor="gray.700"
      margin={"4px"}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
