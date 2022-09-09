import {
  background,
  Box,
  Button,
  Container,
  Flex,
  FormLabel,
  Grid,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { container, item } from "../../Styles/animate";
import login_img from "../../Imgs/imageLogin.png";
import logo_img from "../../Imgs/logo.png";
import { Link as ReactRouterLink, useHistory } from "react-router-dom";
import { Input } from "../../Components/Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLogin } from "../../Providers/Login";

const signInSchema = yup.object().shape({
  email: yup.string().required("Email Obrigatorio").email("email inválido"),
  password: yup.string().required("senha Obrigatória"),
});

interface SignInData {
  email: string;
  password: string;
}

export const Login = () => {
  const { signIn } = useLogin();
  const history = useHistory();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SignInData>({
    resolver: yupResolver(signInSchema),
  });

  const handleSignIn = (data: SignInData) => {
    console.log(data);
    signIn(data);
  };

  const directionRegister = () => {
    history.push("/register");
  };

  return (
    <Box
      as={motion.section}
      variants={container}
      initial="hidden"
      animate="visible"
      pos="relative"
      minH="100vh"
      bg="#141414"
      bgImage={["none", "none", "none", login_img, login_img]}
      bgPosition="65vh 1vh"
      bgRepeat="no-repeat"
      bgSize="contain"
      overflow="hidden"
    >
      <Container maxW="container.xl" h="100vh">
        <Flex
          w="100%"
          h="100%"
          py={[4, 6, 8, 8, 8]}
          flexDir={["column", "column", "column", "row", "row"]}
          gap={[6, 6, 6, 6, 8]}
        >
          <Image
            src={logo_img}
            alt="Central Fitness"
            w={["75px", "90px", "85px", "80px"]}
            maxW="100%"
            h={["75px", "90px", "85px", "80px"]}
            as={motion.img}
            variants={item}
          />

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
              onSubmit={handleSubmit(handleSignIn)}
            >
              <Flex
                justifyContent="space-between"
                alignItems="center"
                mb={8}
                as={motion.div}
                variants={item}
              >
                <Heading as="h1" size="md">
                  Login
                </Heading>
              </Flex>
              <Grid gap={2}>
                <Input
                  label="Email"
                  type="email"
                  placeholder="Digite o seu Email"
                  {...register("email")}
                  error={errors.email}
                  variants={item}
                />
                <Input
                  label="Senha"
                  placeholder="Digite a sua Senha"
                  type="password"
                  {...register("password")}
                  error={errors.password}
                  variants={item}
                />

                <Box>
                  <Box pt={6}>
                    <Button
                      as={motion.button}
                      variants={item}
                      w="100%"
                      bg="#F6B933B2"
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
                      Entrar
                    </Button>
                  </Box>
                </Box>
                <Box>
                  <Text
                    fontSize="11px"
                    textAlign="center"
                    w="95%"
                    justifyContent="center"
                  >
                    Ainda não possui uma conta? Começe agora mesmo a planejar
                    seus exercicios e ficar por dentro de uma vida saudavel
                  </Text>
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
                      onClick={directionRegister}
                    >
                      Cadastro
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
