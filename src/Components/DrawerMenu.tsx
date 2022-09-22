import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  List,
} from "@chakra-ui/react";

import { item, container } from "../Styles/animate";
import { motion } from "framer-motion";

import { useAuth } from "../Providers/AuthContext";

import { ItemMenu } from "./itemMenu";
import { Operation } from "./Operation";

import bgMenu from "../Imgs/bg-menu.svg";

interface DrawerMenuProps {
  onDrawerMenuClose(): void;
  onUpdatePerfilOpen(): void;
  isDrawerMenuOpen: boolean;
}

export const DrawerMenu = ({
  onDrawerMenuClose,
  isDrawerMenuOpen,
  onUpdatePerfilOpen,
}: DrawerMenuProps) => {
  const { user } = useAuth();

  return (
    <Drawer
      placement="left"
      onClose={onDrawerMenuClose}
      isOpen={isDrawerMenuOpen}
      size={["full", "full", "full", "full", "full", "xs"]}
    >
      <DrawerOverlay />
      <DrawerContent
        bg="black"
        bgImg={[bgMenu, bgMenu, "none"]}
        bgPos="center"
        bgSize="contain"
        bgRepeat="no-repeat"
      >
        <DrawerCloseButton />
        <DrawerHeader p={6}>
          <Flex
            as={motion.div}
            variants={container}
            initial="hidden"
            animate="visible"
            w="full"
            bg="#000000"
            h={["100px", "100px", "150px"]}
            rounded={4}
            mt={6}
            alignItems="center"
            justifyContent="center"
            fontSize="3rem"
            textTransform="uppercase"
            fontFamily="title"
          >
            <motion.span variants={item}>{user?.name?.slice(0, 2)}</motion.span>
          </Flex>
        </DrawerHeader>
        <DrawerBody>
          <Flex pt={4}>
            <List
              as={motion.nav}
              spacing={6}
              w="full"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <ItemMenu title="FITNESS" path="/fitnessHome" icon="home" />
              <ItemMenu title="TREINOS" path="/training" icon="training" />
              <ItemMenu title="SOBRE NOS" path="/aboutus" icon="team" />
              <ItemMenu title="NUTRIÇÃO" path="/nutrition" />
            </List>
          </Flex>
        </DrawerBody>
        <DrawerFooter>
          <Operation
            onUpdatePerfilOpen={onUpdatePerfilOpen}
            onDrawerMenuClose={onDrawerMenuClose}
          />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
