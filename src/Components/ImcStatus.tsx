import { Input, Text, Flex, Box } from "@chakra-ui/react";

interface Status {
  status: string;
}

export const ImcStatus = ({ status }: Status) => {
  return (
    <Flex
      w="90%"
      justifyContent="space-between"
      flexDirection="column"
      alignItems="center"
      gap={4}
    >
      <Box
        w="100%"
        h="max-content"
        display="flex"
        justifyContent="space-between"
      >
        {status === "Abaixo do peso" ? (
          <Input
            w="5%"
            h="5%"
            bgColor="#08a6bbdd"
            _focus={{ outline: "none" }}
          />
        ) : (
          <Input w="5%" h="5%" bgColor="#08a6bbdd" disabled />
        )}
        {status === "Peso Normal" ? (
          <Input
            w="5%"
            h="5%"
            bgColor="#2cbb08dd"
            _focus={{ outline: "none" }}
          />
        ) : (
          <Input w="5%" h="5%" bgColor="#2cbb08dd" disabled />
        )}
        {status === "Excesso de peso" ? (
          <Input
            w="5%"
            h="5%"
            bgColor="#e7d20fdd"
            _focus={{ outline: "none" }}
          />
        ) : (
          <Input w="5%" h="5%" bgColor="#e7d20fdd" disabled />
        )}
        {status === "Obesidade" ? (
          <Input
            w="5%"
            h="5%"
            bgColor="#bb6708dd"
            _focus={{ outline: "none" }}
          />
        ) : (
          <Input w="5%" h="5%" bgColor="#bb6708dd" disabled />
        )}
        {status === "Obesidade Extrema" ? (
          <Input
            w="5%"
            h="5%"
            bgColor="#bb1d08dd"
            _focus={{ outline: "none" }}
          />
        ) : (
          <Input w="5%" h="5%" bgColor="#bb1d08dd" disabled />
        )}
      </Box>
      <Text fontFamily="title" fontSize={["14px", "16px", "18px", "20px"]}>
        {status}
      </Text>
    </Flex>
  );
};
