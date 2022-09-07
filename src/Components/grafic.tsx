import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";

export const GraficRepresentation = () => {
  return (
    <Box
      w={["253px", "253px", "352px"]}
      bg="#333"
      borderRadius="6"
      padding={["12px 18px", "16px 24px"]}
      mt="2"
    >
      <Flex justifyContent="space-between" paddingX="2.5">
        <Heading as="h3" fontSize={["16px", "16px", "18px"]} color="white">
          STATUS
        </Heading>
        <Heading as="h3" fontSize={["16px", "16px", "18px"]} color="white">
          IMC
        </Heading>
      </Flex>
      <Flex w="100%" alignItems="center" justifyContent="space-between" mt="2">
        <Box flex="1">
          <Flex alignItems="center" w="135px">
            <Heading
              color="#F6B933"
              flex="1"
              fontSize={["12px", "12px", "16px"]}
            >
              Categoria:
            </Heading>
            <Text fontSize={["12px", "12px", "14px"]} color="white" ml="2">
              Normal
            </Text>
          </Flex>
          <Flex alignItems="center" w="135px">
            <Heading
              color="#F6B933"
              flex="1"
              fontSize={["12px", "12px", "16px"]}
            >
              Peso:
            </Heading>
            <Text fontSize={["12px", "12px", "14px"]} color="white" ml="2">
              68
            </Text>
          </Flex>
          <Flex alignItems="center" w="135px">
            <Heading
              color="#F6B933"
              flex="1"
              fontSize={["12px", "12px", "16px"]}
            >
              Altura:
            </Heading>
            <Text fontSize={["12px", "12px", "14px"]} color="white" ml="2">
              1.68
            </Text>
          </Flex>
          <Flex alignItems="center" w="135px">
            <Heading
              color="#F6B933"
              flex="1"
              fontSize={["12px", "12px", "16px"]}
            >
              Sexo:
            </Heading>
            <Text fontSize={["12px", "12px", "14px"]} color="white" ml="2">
              Feminino
            </Text>
          </Flex>
        </Box>

        <Center
          borderStyle="dashed"
          borderWidth="3px"
          w={["55px", "55px", "70px"]}
          h={["55px", "55px", "70px"]}
          borderRadius="100%"
          borderColor="#F6B933"
        >
          <Text color="white" fontSize="12px">
            22.8%
          </Text>
        </Center>
      </Flex>
    </Box>
  );
};
