import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Link,
  List,
  ListItem,
  useDisclosure,
} from "@chakra-ui/react";
import { CgMenuGridO } from "react-icons/cg";
import { RiTeamFill, RiHomeSmileFill, RiLogoutBoxFill } from "react-icons/ri";
import { IoMdFitness } from "react-icons/io";
import { MdDinnerDining } from "react-icons/md";
import { useAuth } from "../Providers/AuthContext";
import { NavLink as RouterLink } from "react-router-dom";
import bgMenu from "../Imgs/bg-menu.svg";
import { motion } from "framer-motion";
import { container, item, itemLeft } from "../Styles/animate";
import { EditPerfil } from "./editPerfil";

export const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, accessToken, logOut } = useAuth();
  const linkCss = {
    rounded: 4,
    overflow: "hidden",
    boxShadow: "0px 0px 4px 2px rgba(0, 0, 0, 0.35)",
    bg: "black",
    w: "full",
    p: 4,
    display: "flex",
    alignItems: "center",
    gap: 4,
    fontFamily: "title",
    position: "relative",
    "&:hover": {
      textDecoration: "none",
    },
    "&.active:before": {
      content: "''",
      width: "5px",
      borderRadius: "4px",
      height: "100%",
      backgroundColor: "third",
      position: "absolute",
      top: 0,
      right: 0,
    },
  };
  return (
    <>
      {accessToken && (
        <>
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
                onClick={onOpen}
                p={0}
                fontSize={["2.5rem", "3rem", "4rem"]}
              >
                <CgMenuGridO />
              </Button>
            </Container>
          </Box>
          <Drawer
            placement="left"
            onClose={onClose}
            isOpen={isOpen}
            size={["full", "full", "full", "xs"]}
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
                  <motion.span variants={item}>
                    {user.name.slice(0, 2)}
                  </motion.span>
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
                    <ListItem as={motion.li} variants={itemLeft}>
                      <Link as={RouterLink} to="/fitnessHome" sx={linkCss}>
                        <Box as="span" fontSize="1.5rem">
                          <RiHomeSmileFill />
                        </Box>
                        <span>FITNESS</span>
                      </Link>
                    </ListItem>
                    <ListItem as={motion.li} variants={itemLeft}>
                      <Link as={RouterLink} to="/training" sx={linkCss}>
                        <Box as="span" fontSize="1.5rem">
                          <IoMdFitness />
                        </Box>
                        <span>TREINOS</span>
                      </Link>
                    </ListItem>
                    <ListItem as={motion.li} variants={itemLeft}>
                      <Link as={RouterLink} to="/about" sx={linkCss}>
                        <Box as="span" fontSize="1.5rem">
                          <RiTeamFill />
                        </Box>
                        <span>SOBRE NOS</span>
                      </Link>
                    </ListItem>
                    <ListItem as={motion.li} variants={itemLeft}>
                      <Link as={RouterLink} to="/nutrition" sx={linkCss}>
                        <Box as="span" fontSize="1.5rem">
                          <MdDinnerDining />
                        </Box>
                        <span>NUTRIÇÃO</span>
                      </Link>
                    </ListItem>
                  </List>
                </Flex>
              </DrawerBody>
              <DrawerFooter>
                <List
                  as={motion.nav}
                  spacing={6}
                  w="full"
                  variants={container}
                  initial="hidden"
                  animate="visible"
                >
                  <EditPerfil />
                  <ListItem as={motion.li} variants={itemLeft}>
                    <Link as={motion.button} sx={linkCss} onClick={logOut}>
                      <Box as="span" fontSize="1.5rem">
                        <RiLogoutBoxFill />
                      </Box>
                      <span>SAIR</span>
                    </Link>
                  </ListItem>
                </List>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </>
      )}
    </>
  );
};
