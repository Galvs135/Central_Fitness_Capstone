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
import React, { useContext, useEffect, useState } from "react";
import { useAuth } from "../Providers/AuthContext";
import { api } from "../Services/api";
import { useLogin } from "../Providers/Login";
import { useMuscle } from "../Providers/Muscle";

export const ImcCalculator = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { Muscle, MuscleAtt, MuscleRegister, weight, height } = useMuscle();
  const [weightV, setWeight] = useState(0);
  const [heightV, setHeight] = useState(0);
  const [imc, setImc] = useState<number>(0);
  const { user } = useAuth();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  useEffect(() => {
    setHeight(height);
    setWeight(weight);
  }, [weight, height]);

  const handleCloseClick = () => {
    onClose();
  };

  const calculate = () => {
    setImc(weightV / (heightV * heightV));
  };

  return (
    <>
      <Button
        onClick={() => {
          Muscle(user?.id);
          onOpen();
        }}
        mt="5"
        bg="#F6CB33"
        w={["152px", "152px", "252px"]}
        h={["45px", "45px", "65px"]}
        color="#fff"
        fontSize="16px"
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
                  step="3"
                  ref={initialRef}
                  value={weightV}
                  onChange={(e) => setWeight(parseFloat(e.target.value))}
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
                _hover={{ background: theme.colors.primary }}
                _active={{ background: theme.colors.primary }}
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
