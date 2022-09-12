import { forwardRef } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputGroup,
  Flex,
} from "@chakra-ui/react";

import { FieldError } from "react-hook-form";
import { motion } from "framer-motion";

interface InputProps extends ChakraInputProps {
  label: string;
  error?: FieldError | null;
  variants?: {
    hidden: { y: number; opacity: number };
    visible: {
      y: number;
      opacity: number;
    };
  };
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, label, error = null, ...rest }: InputProps, ref) => {
    return (
      <FormControl isInvalid={!!error} w="100%" maxW="450px">
        <Flex px={2} py={1} alignItems="center" justifyContent="space-between">
          <FormLabel
            fontFamily="text"
            m={0}
            fontSize={[".785rem", ".785rem", ".785rem", ".875rem"]}
          >
            {label}
          </FormLabel>

          {!!error && (
            <FormErrorMessage m={0}>{error.message}</FormErrorMessage>
          )}
        </Flex>
        <InputGroup flexDir="column" justifyContent="center">
          <ChakraInput
            as={motion.input}
            name={name}
            variant="outline"
            borderColor="#000000"
            borderWidth="2px"
            bgColor={error?.message ? "#3D2422" : "#3D3522"}
            _hover={{
              borderColor: "#000000",
              boxShadow: "0 0 0 2px #3d352245",
            }}
            _focus={{
              borderColor: "#000000",
              boxShadow: "0 0 0 3px #3d352245",
            }}
            ref={ref}
            {...rest}
          />
        </InputGroup>
      </FormControl>
    );
  }
);
