import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import { Platform } from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  onSelectPlatorm: (platform: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({ selectedPlatformId, onSelectPlatorm }: Props) => {
  const { data, error } = usePlatform();
  const selectedPlatform = usePlatforms(selectedPlatformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem key={platform.id} onClick={() => onSelectPlatorm(platform)}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
