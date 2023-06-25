import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <div>
      <HStack padding={"10px"}>
        <Image src={logo} boxSize="60px" borderRadius={"50%"} />
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
