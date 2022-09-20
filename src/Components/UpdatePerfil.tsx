import { theme } from "../Styles/theme";
import { AiOutlineEdit } from "react-icons/ai";
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
  Text,
  ListItem,
  Link,
  Box,
} from "@chakra-ui/react";
import { FiCheck, FiX } from "react-icons/fi";

import { useContext, useState } from "react";
import { useLogin } from "../Providers/Login";

import { useUser } from "../Providers/user";

import { useAuth } from "../Providers/AuthContext";
import { motion } from "framer-motion";
import { itemLeft } from "../Styles/animate";
import { AiFillSetting } from "react-icons/ai";

interface OnClose {
  F: () => void;
}

export const UpdatePerfil = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, Muscle, weight, height } = useAuth();
  const { AInformation } = useUser();
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(user.name);
  const [genre, setGenre] = useState(user.genre);

  const handleCloseClick = () => {
    onClose();
  };

  const handleClickEdit = () => {
    setEdit(true);
  };
  const Actualization = () => {
    AInformation({ name: name, genre: genre });
  };

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
      <ListItem as={motion.li} variants={itemLeft}>
        <Link
          as={motion.button}
          sx={linkCss}
          onClick={() => {
            onOpen();
            Muscle(user.id);
          }}
        >
          <Box as="span" fontSize="1.5rem">
            <AiFillSetting />
          </Box>
          <span>SAIR</span>
        </Link>
      </ListItem>

      <Modal
        isOpen={isOpen}
        onClose={handleCloseClick}
        size="lg"
        blockScrollOnMount={false}
      >
        <ModalOverlay />
        <ModalContent background="black">
          <ModalHeader
            fontFamily="title"
            color="white"
            background="primary"
            borderTopLeftRadius="8px"
            borderTopRightRadius="8px"
            display="flex"
            flexDirection="row"
            alignItems="flex-end"
            justifyContent="space-around"
            flexWrap="nowrap"
          >
            {user.genre === "masculino" ? (
              <Text
                background={theme.colors.white}
                padding=" 30px 40px "
                marginBottom="-50px"
                borderRadius="50% 50%"
                color={theme.colors.black}
                fontSize="30px"
                border="3px solid #292929"
              >
                M
              </Text>
            ) : (
              <Text
                background={theme.colors.white}
                padding=" 30px 45px "
                marginBottom="-50px"
                borderRadius="50% 50%"
                color={theme.colors.black}
                fontSize="30px"
                border="3px solid #f6b933"
              >
                F
              </Text>
            )}
            {edit === true ? (
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                width="200px"
              />
            ) : (
              <Text fontFamily={theme.fonts.title} fontSize="22px">
                {name.length > 10 ? `${name.slice(0, 9)}...` : name}
              </Text>
            )}
            {edit === true ? (
              <>
                <Button
                  onClick={() => Actualization()}
                  background={theme.colors.primary}
                  color={theme.colors.black}
                >
                  <FiCheck />
                </Button>
                <Button
                  onClick={() => setEdit(false)}
                  background={theme.colors.primary}
                  color={theme.colors.black}
                >
                  <FiX />
                </Button>
              </>
            ) : (
              <Button
                onClick={() => handleClickEdit()}
                background={theme.colors.primary}
                color={theme.colors.black}
                width="111px"
              >
                <AiOutlineEdit />
              </Button>
            )}
          </ModalHeader>
          <ModalCloseButton fontSize="15px" />
          <ModalBody pb={6} display="flex" justifyContent="center">
            {edit === true ? (
              <Input
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                width="200px"
              />
            ) : (
              <Text fontFamily={theme.fonts.title} fontSize="22px">
                {genre}
              </Text>
            )}
          </ModalBody>

          <ModalFooter display="flex" justifyContent="space-around">
            <Text fontFamily={theme.fonts.title} fontSize="18px">
              {weight}
            </Text>
            <Text fontFamily={theme.fonts.title} fontSize="18px">
              {height}
            </Text>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
