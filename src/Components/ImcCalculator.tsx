import { theme } from "../Styles/theme";
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  ModalFooter,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useAuth } from "../Providers/AuthContext";
import { api } from "../Services/api";

interface user {
  userId: number;
  weight: number;
  height: number;
  id: number;
}

export const ImcCalculator = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [imc, setImc] = useState<number>(0);
  const [user, setUser] = useState<user>();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleCloseClick = () => {
    setWeight(0);
    setHeight(0);
    setImc(0);
    setUser(undefined);
    onClose();
  };

  const calculate = () => {
    setImc(weight / (height * height));
  };

  const Muscle = (id: number) => {
    api
      .get(`/users/${id}/muscles`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlMUBnbWFpbC5jb20iLCJpYXQiOjE2NjI3NTIwODksImV4cCI6MTY2Mjc1NTY4OSwic3ViIjoiMSJ9.iDOH3m185QHdoTVsy4jE3y2-uS3kGwHHUpDIxffzg2A`,
        },
      })
      .then((response) => {
        setUser(response.data[0]);
        setWeight(response.data[0].weight);
        setHeight(response.data[0].height);
      })
      .catch((response) => {
        console.log(response);
      });
  };
  console.log(user);

  return (
    <>
      <Button
        onClick={() => {
          Muscle(1);
          onOpen();
        }}
        background={theme.colors.secondary}
      >
        Open Modal
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={handleCloseClick}
        size="xs"
      >
        <ModalOverlay />
        <ModalContent background={theme.colors.black}>
          <ModalHeader
            fontFamily={theme.fonts.title}
            color={theme.colors.white}
            background={theme.colors.primary}
            borderTopLeftRadius="8px"
            borderTopRightRadius="8px"
          >
            Calcular IMC
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel fontFamily={theme.fonts.title}>Peso</FormLabel>
              {user ? (
                <Input
                  type="number"
                  ref={initialRef}
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  background={theme.colors.input}
                />
              ) : (
                <Input
                  type="number"
                  ref={initialRef}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  background={theme.colors.input}
                />
              )}
            </FormControl>

            <FormControl mt={4}>
              <FormLabel fontFamily={theme.fonts.title}>Altura</FormLabel>
              {user ? (
                <Input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  background={theme.colors.input}
                  color={theme.colors.white}
                />
              ) : (
                <Input
                  type="number"
                  onChange={(e) => setHeight(Number(e.target.value))}
                  background={theme.colors.input}
                  color={theme.colors.white}
                />
              )}
            </FormControl>
          </ModalBody>

          <ModalFooter>
            {imc !== 0 && (
              <Text fontFamily={theme.fonts.title} fontSize="30px" mr={12}>
                {imc.toFixed(2)}
              </Text>
            )}
            <Button
              borderRadius="20px 20px 120px 20px "
              background={theme.colors.primary}
              fontFamily={theme.fonts.title}
              color={theme.colors.white}
              mr={3}
              onClick={() => {
                calculate();
                Muscle(1);
              }}
            >
              Calcular
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
