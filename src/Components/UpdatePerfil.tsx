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
  Select,
} from "@chakra-ui/react";
import { FiCheck, FiX } from "react-icons/fi";

import { useState } from "react";

import { useAuth } from "../Providers/AuthContext";
import { useUser } from "../Providers/User";

interface UpdatePerfilProps {
  isUpdatePerfilOpen: boolean;
  onUpdatePerfilClose(): void;
}

export const UpdatePerfil = ({
  isUpdatePerfilOpen,
  onUpdatePerfilClose,
}: UpdatePerfilProps) => {
  const { user } = useAuth();
  const { AInformation, weight, height } = useUser();
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(user?.name);
  const [genre, setGenre] = useState(user?.genre);

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
        onClose={() => {
          onUpdatePerfilClose();
          setEdit(false);
          setName(user?.name);
          setGenre(user?.genre);
        }}
        size="lg"
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
            alignItems={["center", "center", "flex-end", "flex-end"]}
            justifyContent={[
              "center",
              "center",
              "space-around",
              "space-around",
            ]}
            flexWrap="nowrap"
          >
            {genre === "masculino" ? (
              <Text
                display={["none", "none", "block", "block"]}
                background="white"
                padding=" 30px 40px "
                marginBottom="-50px"
                borderRadius="50% 50%"
                color="black"
                fontSize="30px"
                border="3px solid #292929"
              >
                M
              </Text>
            ) : (
              <Text
                display={["none", "none", "block", "block"]}
                background="white"
                padding=" 30px 47px "
                marginBottom="-50px"
                borderRadius="50% 50%"
                color="black"
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
              <Text fontFamily="title" fontSize="22px">
                {name?.length > 10 ? `${name?.slice(0, 9)}...` : name || ""}
              </Text>
            )}
            {edit === true ? (
              <>
                <Button
                  display={["none", "none", "block", "block"]}
                  onClick={() => {
                    Actualization();
                    setEdit(false);
                  }}
                  background="primary"
                  color="black"
                  _hover={{ background: "secondary" }}
                  _active={{ background: "secondary" }}
                >
                  <FiCheck />
                </Button>
                <Button
                  display={["none", "none", "block", "block"]}
                  onClick={() => setEdit(false)}
                  background="primary"
                  color="black"
                  _hover={{ background: "secondary" }}
                  _active={{ background: "secondary" }}
                >
                  <FiX />
                </Button>
              </>
            ) : (
              <Button
                display={["none", "none", "block", "block"]}
                onClick={() => handleClickEdit()}
                background="primary"
                color="black"
                width="111px"
                _hover={{ background: "secondary" }}
                _active={{ background: "secondary" }}
              >
                <AiOutlineEdit />
              </Button>
            )}
          </ModalHeader>
          <ModalCloseButton fontSize="15px" />
          <ModalBody pb={6} display="flex" justifyContent="center">
            {edit === true ? (
              <Select
                defaultValue={genre}
                onChange={(e) => setGenre(e.target.value)}
                width="200px"
                _hover={{ background: "black" }}
                _active={{ background: "black" }}
              >
                <option
                  value="masculino"
                  style={{
                    color: "#ffffff",
                    backgroundColor: "#292929",
                  }}
                >
                  Masculino
                </option>
                <option
                  value="feminino"
                  style={{
                    color: "#ffffff",
                    backgroundColor: "#292929",
                  }}
                >
                  Feminino
                </option>
              </Select>
            ) : (
              <Text fontFamily="title" fontSize="22px">
                {user?.genre}
              </Text>
            )}
            {edit === true ? (
              <>
                <Button
                  display={["block", "block", "none", "none"]}
                  onClick={() => {
                    Actualization();
                    setEdit(false);
                  }}
                  background="primary"
                  color="black"
                  position="absolute"
                  top="16%"
                  left="85%"
                  _hover={{ background: "secondary" }}
                  _active={{ background: "secondary" }}
                >
                  <FiCheck />
                </Button>
                <Button
                  display={["block", "block", "none", "none"]}
                  onClick={() => setEdit(false)}
                  background="black"
                  color="primary"
                  position="absolute"
                  left="85%"
                  _hover={{ background: "secondary" }}
                  _active={{ background: "secondary" }}
                >
                  <FiX />
                </Button>
              </>
            ) : (
              <Button
                display={["block", "block", "none", "none"]}
                onClick={() => handleClickEdit()}
                background="black"
                color="primary"
                position="absolute"
                left="80%"
                _hover={{ background: "secondary" }}
                _active={{ background: "secondary" }}
              >
                <AiOutlineEdit />
              </Button>
            )}
          </ModalBody>

          <ModalFooter display="flex" justifyContent="space-around">
            <Text fontFamily="title" fontSize="18px">
              {`${weight} KG`}
            </Text>
            <Text fontFamily="title" fontSize="18px">
              {`${height} M`}
            </Text>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
