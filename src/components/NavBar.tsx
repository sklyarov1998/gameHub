import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <div>
      <HStack justifyContent="space-between">
        <HStack>
          <Image src={logo} boxSize="60px" />
          <Text fontSize="xl" as="b">
            GameHub
          </Text>
        </HStack>
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
