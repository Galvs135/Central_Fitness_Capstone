import { Box, Container, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { MdLunchDining, MdFitnessCenter } from "react-icons/md";
import { GiHeartPlus } from "react-icons/gi";

const cardInfo = [
  {
    icon: <MdLunchDining />,
    title: "Nutrição",
    description:
      "Aliar a alimentação adequada, saber o que ingerir antes e depois dos treinos fará toda a diferença para os seus alunos atingirem os resultados desejados.",
  },
  {
    icon: <MdFitnessCenter />,
    title: "Exercícios",
    description:
      "O alongamento é essencial para preparar o corpo para os movimentos, ajudando a evitar lesões, por isso deve ser realizado antes e após a prática física.",
  },
  {
    icon: <GiHeartPlus />,
    title: "Saúde",
    description:
      "Os benefícios à saúde são mais significativos se houver o aumento da atividade física aeróbica de intensidade moderada para 300 minutos por semana. Se houver junção de atividades de fortalecimento muscular, melhor ainda.",
  },
];

export const SoftwareInfo = () => {
  return (
    <Flex h={["auto", "100vh"]} as="section" py={[24]} alignItems="center">
      <Container maxW="container.xl">
        <Heading as="h2" variant="h2" fontFamily="title" color="third">
          PLATAFORMA
        </Heading>
        <Flex
          mt={4}
          justifyContent="space-between"
          flexDir={["column", "column", "row", "row"]}
          alignItems="baseline"
        >
          <Box w={["100%", "100%", "100%", "40%"]} fontSize=".875rem">
            <Text>
              Uso
              <Box color="third" as="span">
                {" "}
                Gratuito
              </Box>
            </Text>
            <Text>Defina o treino ideal para você realizar na sua casa</Text>
          </Box>
          <Box w={["100%", "100%", "100%", "40%"]} mt={[6]}>
            <Text fontSize=".875rem">
              Muita gente ainda acredita que musculação é apenas uma questão de
              estética, que as pessoas se exercitam só para conseguir um corpo
              bonito ou têm um único objetivo: emagrecer. Mas a grande verdade é
              que os benefícios da musculação
              <Box color="third" as="span">
                {" "}
                VÃO MUITO ALÉM DISSO
              </Box>
            </Text>
          </Box>
        </Flex>
        <Grid
          as="ul"
          gridTemplateColumns={["1fr", "repeat(3,1fr)"]}
          pt={[16]}
          gap={8}
        >
          {cardInfo.map((info, index) => (
            <Box
              key={index}
              pos="relative"
              bg="primary"
              px={[4]}
              py={[4]}
              border="5px solid"
              rounded={8}
            >
              <Flex
                border="5px solid"
                borderColor="#ffffff"
                top={-10}
                w="60px"
                h="60px"
                pos="absolute"
                left="50%"
                transform="translateX(-50%)"
                bg="primary"
                rounded="50%"
                alignItems="center"
                justifyContent="center"
                fontSize="2rem"
                color="black"
                shadow="md"
              >
                {info.icon}
              </Flex>
              <Box pt={[2]} color="black">
                <Heading
                  as="h4"
                  variant="h4"
                  textAlign="center"
                  mb={[2]}
                  fontFamily="title"
                  fontSize={["1.2rem", "1.2rem", "1.4rem", "1.5rem"]}
                >
                  {info.title}
                </Heading>
                <Text
                  fontSize={[".775rem", ".775rem", ".875rem"]}
                  fontFamily="text"
                  fontWeight="600"
                >
                  {info.description}
                </Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </Flex>
  );
};
