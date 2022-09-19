import { Box, Button, Container, useDisclosure } from "@chakra-ui/react";
import { CgMenuGridO } from "react-icons/cg";

import { DrawerMenu } from "./DrawerMenu";
import { UpdatePerfil } from "./UpdatePerfil";

export const Menu = () => {
  const {
    isOpen: isDrawerMenuOpen,
    onOpen: onDrawerMenuOpen,
    onClose: onDrawerMenuClose,
  } = useDisclosure();

  const {
    isOpen: isUpdatePerfilOpen,
    onOpen: onUpdatePerfilOpen,
    onClose: onUpdatePerfilClose,
  } = useDisclosure();

  return (
    <>
      <UpdatePerfil
        isUpdatePerfilOpen={isUpdatePerfilOpen}
        onUpdatePerfilClose={onUpdatePerfilClose}
      />
      <DrawerMenu
        isDrawerMenuOpen={isDrawerMenuOpen}
        onDrawerMenuClose={onDrawerMenuClose}
        onUpdatePerfilOpen={onUpdatePerfilOpen}
      />
      <Box
        as="header"
        position="fixed"
        w="full"
        py={[4, 6]}
        zIndex="2"
        bgGradient={[
          "linear-gradient(to-b, rgba(0, 0, 0, 0) 1.67%, rgba(0, 0, 0, 0.5) 72.86%);",
        ]}
      >
        <Container maxW={["100%", "100%", "80%"]}>
          <Button
            bgColor="transparent"
            _hover={{
              backgroundColor: "transparent",
            }}
            _active={{
              backgroundColor: "transparent",
            }}
            onClick={onDrawerMenuOpen}
            p={0}
            fontSize={["2.5rem", "3rem", "4rem"]}
          >
            <CgMenuGridO />
          </Button>
        </Container>
      </Box>
    </>
  );
};
