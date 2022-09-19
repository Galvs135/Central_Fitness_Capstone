import { theme } from "../Styles/theme";
import { AiOutlineEdit } from "react-icons/ai";
import {
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
import { useAuth } from "../Providers/AuthContext";
import { useUser } from "../Providers/user";

interface UpdatePerfilProps {
  isUpdatePerfilOpen: boolean;
  onUpdatePerfilClose(): void;
}

export const UpdatePerfil = ({
  isUpdatePerfilOpen,
  onUpdatePerfilClose,
}: UpdatePerfilProps) => {
  const { user, weight, height } = useAuth();
  const { AInformation } = useUser();
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(user.name);
  const [genre, setGenre] = useState(user.genre);

  const handleClickEdit = () => {
    setEdit(true);
  };
  const Actualization = () => {
    AInformation({ name: name, genre: genre });
  };

  return (
    <>
      <Modal
        isOpen={isUpdatePerfilOpen}
        onClose={onUpdatePerfilClose}
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
            <Text
              background={theme.colors.white}
              padding=" 30px 40px "
              marginBottom="-50px"
              borderRadius="50% 50%"
              color={theme.colors.black}
              fontSize="30px"
              border="3px solid #292929"
            >
              {user.genre === "masculino" ? "M" : "F"}
            </Text>
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
