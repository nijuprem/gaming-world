import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <HStack padding={"10px"}>
        <Link to="/">
          <Image
            src={logo}
            boxSize="60px"
            borderRadius={"50%"}
            objectFit={"cover"}
          />
        </Link>
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
