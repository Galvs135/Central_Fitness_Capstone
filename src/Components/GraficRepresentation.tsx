import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAuth } from "../Providers/AuthContext";
import { useUser } from "../Providers/User";
import { theme } from "../Styles/theme";

export const GraficRepresentation = () => {
  const { weight, height, Muscle, imc } = useUser();
  const { user } = useAuth();
  const [color, setColor] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  useEffect(() => {
    Muscle(user?.id);
    if (imc < 18.5) {
      setColor("08a6bbdd");
      setCategory("Abaixo do peso");
    } else if (24.9 > imc && imc > 18.5) {
      setColor("2cbb08dd");
      setCategory("Peso Normal");
    } else if (29.9 > imc && imc > 25) {
      setColor("e7d20fdd");
      setCategory("Excesso de peso");
    } else if (imc > 30) {
      setColor("bb6708dd");
      setCategory("Obesidade");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imc]);

  return (
    <Box
      w={["253px", "253px", "352px"]}
      bg="#212121"
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
              color={theme.colors.secondary}
              flex="1"
              fontSize={["12px", "12px", "16px"]}
            >
              Categoria:
            </Heading>
            <Text fontSize={["12px", "12px", "14px"]} color="white" ml="2">
              {category}
            </Text>
          </Flex>
          <Flex alignItems="center" w="135px">
            <Heading
              color={theme.colors.secondary}
              flex="1"
              fontSize={["12px", "12px", "16px"]}
            >
              Peso:
            </Heading>
            <Text fontSize={["12px", "12px", "14px"]} color="white" ml="2">
              {weight}
            </Text>
          </Flex>
          <Flex alignItems="center" w="135px">
            <Heading
              color={theme.colors.secondary}
              flex="1"
              fontSize={["12px", "12px", "16px"]}
            >
              Altura:
            </Heading>
            <Text fontSize={["12px", "12px", "14px"]} color="white" ml="2">
              {height.toFixed(2)}
            </Text>
          </Flex>
          <Flex alignItems="center" w="135px">
            <Heading
              color={theme.colors.secondary}
              flex="1"
              fontSize={["12px", "12px", "16px"]}
            >
              Sexo:
            </Heading>
            <Text
              fontSize={["12px", "12px", "14px"]}
              color="white"
              ml="2"
              textTransform="capitalize"
            >
              {user?.genre || ""}
            </Text>
          </Flex>
        </Box>

        <Center
          borderStyle="dashed"
          borderWidth="3px"
          w={["55px", "55px", "70px"]}
          h={["55px", "55px", "70px"]}
          borderRadius="100%"
          borderColor={`#${color}`}
        >
          <Text color="white" fontSize="12px">
            {(weight / (height * height)).toFixed(2)}%
          </Text>
        </Center>
      </Flex>
    </Box>
  );
};
