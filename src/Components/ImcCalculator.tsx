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
  FormControl,
  FormLabel,
  ModalFooter,
  Input,
  Text,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { useAuth } from "../Providers/AuthContext";
import { useUser } from "../Providers/User";

const signInSchema = yup.object().shape({
  weight: yup.number().required("Campo Obrigatório"),
  height: yup
    .number()
    .required("Campo Obrigatório")
    .min(1, "Altura Minima atingida")
    .max(2.5, "Altura maxima atingida"),
});

interface Calculate {
  weight: number;
  height: number;
}

export const ImcCalculator = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { Muscle, MuscleAtt, weight, height } = useUser();
  const [imc, setImc] = useState<number>(0);
  const { user } = useAuth();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const { handleSubmit, register } = useForm<Calculate>({
    resolver: yupResolver(signInSchema),
  });

  const handleCloseClick = () => {
    onClose();
  };

  const calculate = (data: Calculate) => {
    setImc(data.weight / (data.height * data.height));
  };

  const Update = (data: Calculate) => {
    calculate(data);
    MuscleAtt(user.id, { weight: data.weight, height: data.height });
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
        <ModalContent
          background={theme.colors.black}
          border="3px solid #f6b933"
          borderTopLeftRadius="13px"
          borderTopRightRadius="13px"
          onSubmit={handleSubmit(Update)}
        >
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
            <InputGroup>
              <FormControl>
                <FormLabel fontFamily={theme.fonts.title}>Peso</FormLabel>

                <Input
                  type="string"
                  step="3"
                  placeholder={weight.toString()}
                  background="input"
                  color="white"
                  {...register("weight")}
                />
                <InputRightElement>
                  <Text marginBottom="-60px">KG</Text>
                </InputRightElement>
              </FormControl>
            </InputGroup>

            <InputGroup>
              <FormControl mt={4}>
                <FormLabel fontFamily={theme.fonts.title}>Altura</FormLabel>

                <Input
                  type="number"
                  placeholder={height.toString()}
                  background="input"
                  color="white"
                  {...register("height")}
                />
                <InputRightElement>
                  <Text marginBottom="-60px">M</Text>
                </InputRightElement>
              </FormControl>
            </InputGroup>
          </ModalBody>

          <ModalFooter>
            {imc !== 0 && (
              <Text fontFamily={theme.fonts.title} fontSize="30px" mr={12}>
                {imc.toFixed(2)}
              </Text>
            )}

            <Button
              borderRadius="20px 20px 120px 20px "
              background="primary"
              fontFamily="title"
              color="white"
              _hover={{ background: "primary" }}
              _active={{ background: "primary" }}
              mr={3}
              type="submit"
              onClick={handleSubmit(Update)}
            >
              Calcular
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
