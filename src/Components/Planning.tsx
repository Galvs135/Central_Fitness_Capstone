import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import img_panning_desk from "../Imgs/img-planning-desk.png";
import img_panning_mobile from "../Imgs/img-planning-mobile.png";
import plan_one from "../Imgs/plan01.png";
import plan_two from "../Imgs/plan02.png";
import plan_three from "../Imgs/plan03.png";

export const Planning = () => {
  return (
    <Flex as={motion.section}>
      <Container
        p={[0]}
        maxW={["100%"]}
        minH="100vh"
        alignItems="center"
        display="flex"
        overflow="hidden"
      >
        <Flex w="100%">
          <Box
            w={["90%", "90%", "60%", "60%"]}
            bg="primary"
            p={[4, 4, 4, 6, 12]}
            borderRadius={[
              "8px 100px 8px 100px",
              "8px 100px 8px 100px",
              "8px 100px 8px 100px",
              "50px 200px 50px 200px",
            ]}
            minH={["50vh", "60vh", "70vh", "70vh"]}
            pos="relative"
          >
            <Container>
              <Image
                src={img_panning_mobile}
                w="120px"
                pos="absolute"
                top={-12}
                right={-5}
                display={[
                  "inline-block",
                  "inline-block",
                  "none",
                  "none",
                  "none",
                ]}
              />
              <Image
                src={img_panning_desk}
                w="600px"
                pos="absolute"
                top={"50%"}
                transform="translateY(-50%)"
                right={["-50%", "-50%", "-85%", "-30%"]}
                display={[
                  "none",
                  "none",
                  "inline-block",
                  "inline-block",
                  "inline-block",
                ]}
              />
              <Flex
                alignItems="center"
                justifyContent="space-between"
                w="100%"
                maxW="450px"
              >
                <Heading
                  as="h1"
                  variant="h1"
                  size={["xs", "xs", "md", "md"]}
                  fontFamily="title"
                  color={"black"}
                  letterSpacing={1}
                  w="100%"
                  display={["inline", "inline", "none", "none"]}
                >
                  CRIE SEU PRÓPRIO{" "}
                  <Box as="span" color="third">
                    PLANO
                  </Box>{" "}
                  DE <br />
                  TREINAMENTO
                </Heading>
                <Heading
                  as="h1"
                  variant="h1"
                  size={["xs", "xs", "md", "lg"]}
                  fontFamily="title"
                  letterSpacing={1}
                  w="100%"
                  display={["none", "none", "inline", "inline"]}
                >
                  CRIE SEU PRÓPRIO{" "}
                  <Box as="span" color="third">
                    PLANO
                  </Box>{" "}
                  DE TREINAMENTO
                </Heading>
              </Flex>

              <VStack spacing={6} mt={8} maxW="450px">
                <Flex w="100%" gap={4} alignItems="center">
                  <Image
                    src={plan_one}
                    alt="pan01"
                    maxW={["60px", "60px", "80px", "95px"]}
                  />
                  <Text
                    fontFamily="text"
                    color={"black"}
                    fontSize={["14px", "14px", "14px", "20px"]}
                  >
                    Defina de 15 á 30 minutos do seu dia para se exercitar
                  </Text>
                </Flex>
                <Flex w="100%" gap={4} alignItems="center">
                  <Image
                    src={plan_two}
                    alt="pan02"
                    maxW={["60px", "60px", "80px", "95px"]}
                  />
                  <Text
                    fontFamily="text"
                    color={"black"}
                    fontSize={["14px", "14px", "14px", "20px"]}
                  >
                    Planeje refeições saborosas e saudáveis
                  </Text>
                </Flex>
                <Flex w="100%" gap={4} alignItems="center">
                  <Image
                    src={plan_three}
                    alt="pan03"
                    maxW={["60px", "60px", "80px", "95px"]}
                  />
                  <Text
                    fontFamily="text"
                    color={"black"}
                    fontSize={["14px", "14px", "14px", "20px"]}
                  >
                    Seja conduzido na comunidade fitness.
                  </Text>
                </Flex>
                <Button
                  as={RouterLink}
                  to="/training"
                  w="60%"
                  textTransform="uppercase"
                  borderRadius="5px 5px 35px 5px"
                  boxShadow="3px 2px 2px 2px rgba(0, 0, 0, 0.8)"
                  bg="black"
                  size="lg"
                  _hover={{
                    backgroundColor: "#000000",
                    opacity: 0.8,
                  }}
                  _active={{
                    backgroundColor: "#000000",
                    opacity: 0.8,
                  }}
                >
                  Treinar
                </Button>
              </VStack>
            </Container>
          </Box>
        </Flex>
      </Container>
    </Flex>
  );
};
