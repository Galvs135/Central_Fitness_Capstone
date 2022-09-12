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
import React, { useContext, useState } from "react";
import { useAuth } from "../Providers/AuthContext";
import { api } from "../Services/api";
import { MuscleContext } from "../Providers/Muscle";
import { useLogin } from "../Providers/Login";

export const ImcCalculator = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { Muscle, MuscleAtt, MuscleRegister, weight, height } =
    useContext(MuscleContext);
  const [weightV, setWeight] = useState(weight);
  const [heightV, setHeight] = useState(height);
  const [imc, setImc] = useState<number>(0);
  const { user } = useLogin();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleCloseClick = () => {
    onClose();
  };

  const calculate = () => {
    setImc(weight / (height * height));
  };
  console.log(user);

  return (
    <>
      <Button
        onClick={() => {
          Muscle(user.id);
          onOpen();
        }}
        mt="5"
        bg="#F6CB33"
        w={["152px", "152px", "252px"]}
        h={["45px", "45px", "60px"]}
        color="#fff"
        fontSize="18px"
        fontWeight="semibold"
        borderRadius="5px 5px 120px 5px"
        boxShadow="4px 4px 4px 0px #333"
        _hover={{ bg: "yellow.400" }}
      >
        Calcular IMC
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
                  value={weightV}
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
                  value={heightV}
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
            {weightV === 0 || heightV === 0 ? (
              <Button
                borderRadius="20px 20px 120px 20px "
                background={theme.colors.primary}
                fontFamily={theme.fonts.title}
                color={theme.colors.white}
                mr={3}
                onClick={() => {
                  calculate();
                  MuscleRegister(user.id, { weight: weightV, height: heightV });
                }}
              >
                Calcular
              </Button>
            ) : (
              <Button
                borderRadius="20px 20px 120px 20px "
                background={theme.colors.primary}
                fontFamily={theme.fonts.title}
                color={theme.colors.white}
                mr={3}
                onClick={() => {
                  calculate();
                  MuscleAtt(user.id, { weight: weightV, height: heightV });
                }}
              >
                Calcular
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
