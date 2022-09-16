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
} from "@chakra-ui/react";
import { FiCheck, FiX } from "react-icons/fi";
import { useState } from "react";
import { useLogin } from "../Providers/Login";
import { useUser } from "../Providers/user";
import { useMuscle } from "../Providers/Muscle";

export const EditPerfil = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useLogin();
  const { AInformation } = useUser();
  const { Muscle, weight, height } = useMuscle();
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

  return (
    <>
      <Button
        onClick={() => {
          onOpen();
          Muscle(user.id);
        }}
        background={theme.colors.secondary}
      >
        Open Modal
      </Button>

      <Modal isOpen={isOpen} onClose={handleCloseClick} size="lg">
        <ModalOverlay />
        <ModalContent background={theme.colors.black}>
          <ModalHeader
            fontFamily={theme.fonts.title}
            color={theme.colors.white}
            background={theme.colors.primary}
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
