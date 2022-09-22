import {
  Box,
  Button,
  Container,
  Flex,
  FormLabel,
  Grid,
  Heading,
  Link,
  Select,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Input } from "../../Components/Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import register_img from "../../Imgs/register.png";

import { motion } from "framer-motion";
import { container, item } from "../../Styles/animate";
import { useAuth } from "../../Providers/AuthContext";

interface SingUpType {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  genre: string;
}

export const Register = () => {
  const { singUp } = useAuth();

  const schema = yup.object().shape({
    name: yup.string().trim().required("Por favor digite seu nome"),
    email: yup
      .string()
      .email("Digite um email válido.")
      .required("Email obrigatório"),
    password: yup
      .string()
      .min(6, "Senha precisar conter no mínimo 6 caracteres")
      .required("Digite uma senha."),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senha então diferentes")
      .required("Confirme sua senha"),
    genre: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SingUpType>({
    resolver: yupResolver(schema),
  });

  const submitSingUp = ({ name, email, password, genre }: SingUpType) => {
    let data = { name, email, password, genre };
    singUp(data);
  };

  return (
    <Box
      as={motion.section}
      variants={container}
      initial="hidden"
      animate="visible"
      pos="relative"
      minH="100%"
      bg="#141414"
      bgImage={["none", "none", "none", "none", register_img]}
      bgPosition="0 20vh"
      bgRepeat="no-repeat"
      bgSize="contain"
      overflow="hidden"
      alignItems="center"
      display="flex"
    >
      <Container maxW="container.xl" h="100%">
        <Flex
          w="100%"
          h="100%"
          py={[4, 6, 8, 8, 8]}
          flexDir={["column", "column", "column", "row", "row"]}
          gap={[6, 6, 6, 6, 8]}
        >
          <Box
            display="flex"
            w={["100%", "100%", "100%", "100%", "50%"]}
            justifyContent={[
              "center",
              "center",
              "center",
              "flex-start",
              "flex-start",
            ]}
          ></Box>
          <Flex
            w={["100%", "100%", "100%", "100%", "50%"]}
            alignItems="center"
            justifyContent="center"
          >
            <Box
              as={motion.form}
              bg="#0B0B0B"
              p={[4, 4, 6, 6]}
              rounded={6}
              zIndex="99"
              pos="relative"
              maxW="450px"
              w="100%"
              alignSelf="center"
              onSubmit={handleSubmit(submitSingUp)}
            >
              <Flex
                justifyContent="space-between"
                alignItems="center"
                mb={8}
                as={motion.div}
                variants={item}
              >
                <Heading as="h1" size="md">
                  Cadastro
                </Heading>
                <Link
                  as={ReactRouterLink}
                  to="/"
                  fontSize={["0.875rem"]}
                  textDecoration="underline"
                >
                  Retornar à pagina de login
                </Link>
              </Flex>
              <Grid gap={2}>
                <Input
                  label="Nome*"
                  type="text"
                  {...register("name")}
                  error={errors.name}
                  variants={item}
                />
                <Input
                  label="Email*"
                  type="email"
                  {...register("email")}
                  error={errors.email}
                  variants={item}
                />
                <Input
                  label="Senha*"
                  type="password"
                  {...register("password")}
                  error={errors.password}
                  variants={item}
                />
                <Input
                  label="Confirme a senha*"
                  type="password"
                  {...register("passwordConfirmation")}
                  error={errors.passwordConfirmation}
                  variants={item}
                />

                <Box>
                  <FormLabel
                    as={motion.label}
                    htmlFor="genre"
                    fontFamily="text"
                    m={0}
                    px={2}
                    py={1}
                    fontSize={[".785rem", ".785rem", ".785rem", ".875rem"]}
                    variants={item}
                  >
                    Qual seu sexo*
                  </FormLabel>
                  <Select
                    as={motion.select}
                    variants={item}
                    id="genre"
                    variant="filled"
                    defaultValue="feminino"
                    bg="#000000"
                    _hover={{
                      borderColor: "#000000",
                      boxShadow: "0 0 0 2px #3d352245",
                    }}
                    _focus={{
                      borderColor: "#000000",
                      boxShadow: "0 0 0 3px #3d352245",
                    }}
                    boxShadow="none"
                    {...register("genre")}
                  >
                    <option
                      value="feminino"
                      style={{
                        color: "#ffffff",
                        backgroundColor: "#000000",
                      }}
                    >
                      Feminino
                    </option>
                    <option
                      value="masculino"
                      style={{
                        color: "#ffffff",
                        backgroundColor: "#000000",
                      }}
                    >
                      Masculino
                    </option>
                  </Select>
                  <Box pt={6}>
                    <Button
                      as={motion.button}
                      variants={item}
                      w="100%"
                      bg="#2C2C2C"
                      borderWidth={2}
                      borderColor="#000000"
                      size="lg"
                      _hover={{
                        borderColor: "#000000",
                        boxShadow: "0 0 0 2px #3d352245",
                      }}
                      _active={{
                        opacity: 0.5,
                        boxShadow: "none",
                      }}
                      type="submit"
                    >
                      CADASTRAR
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
