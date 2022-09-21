import {
  Box,
  Container,
  Flex,
  Grid,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import dataBase from "./database.json";
import Triangle from "../../Imgs/Polygon2.svg";
import { motion } from "framer-motion";
import { container, item } from "../../Styles/animate";

interface Dev {
  avatar: string;
  name: string;
  role: string;
  linkedIn: string;
  gitHub: string;
  description: string;
}

export const AboutUs = () => {
  const [dev, setDev] = useState<Dev>(dataBase[0]);

  function activePoint(elementName: string) {
    if (dev.name !== elementName) {
      return "#000000";
    } else {
      return "primary";
    }
  }

  return (
    <Box
      bgImage={["none", "none", "none", Triangle]}
      bgSize="contain"
      bgRepeat="no-repeat"
      bgPosition="top right"
      h="100%"
      as={motion.div}
      initial={{ scale: 0, opacity: 0, y: 40 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
    >
      <Container maxW="container.xl" h="100%">
        <Flex
          as="section"
          flexDir={["column", "column", "column", "row"]}
          justifyContent="flex-start"
          alignItems="center"
          h="100%"
          w="100%"
          py={4}
        >
          <Grid
            gridTemplateColumns={[
              "repeat(6,1fr)",
              "repeat(6,1fr)",
              "repeat(6,1fr)",
              "80px",
            ]}
            gridTemplateRows={["1fr", "1fr", "1fr", "repeat(6,auto)"]}
            gap={4}
          >
            {dataBase.map((element, index) => (
              <Flex
                key={index}
                borderRadius="50%"
                borderWidth={["2px", "2px", "2px", "4px"]}
                borderStyle="solid"
                borderColor={[activePoint(element.name)]}
                onClick={() => setDev(dataBase[index])}
                overflow="hidden"
                cursor="pointer"
                as={motion.div}
                initial={{ scale: 0, opacity: 0, y: 40 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                layout
                h="100%"
              >
                <Image maxW="100%" src={element.avatar} />
              </Flex>
            ))}
          </Grid>
          <Box
            w={["80%", "80%", "80%", "3px"]}
            h={["3px", "3px", "3px", "80%"]}
            background="primary"
            zIndex="2"
            rounded={3}
            mx={[0, 0, 2, 6]}
            my={[6, 6, 2, 0]}
          ></Box>
          <Flex
            as={motion.div}
            variants={container}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 40 }}
            layout
            flexDirection="column"
            zIndex="2"
            alignItems="center"
            bg="blackAlpha.500"
            shadow="dark-lg"
            backdropFilter="auto"
            backdropBlur="md"
            p={[4, 4, 4, 8]}
            rounded={8}
            w="100%"
          >
            <Flex
              flexDirection="column"
              alignItems="center"
              maxW={["100%", "100%", "100%", "80%"]}
              w="100%"
              pt={[0, 0, 0, 6]}
              as={motion.div}
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <Image
                src={dev.avatar}
                borderRadius="50%"
                width={["120px", "120px", "120px", "170px"]}
                height={["120px", "120px", "120px", "170px"]}
                marginTop={["20px", "20px", "20px", "0px"]}
                border="5px solid"
                shadow="dark-lg"
                mb={4}
                as={motion.img}
                variants={item}
              ></Image>
              <Grid
                gridTemplateColumns={["1fr 1fr", "1fr", "1fr", "repeat(3,1fr)"]}
                w="100%"
                justifyItems="space-between"
                alignItems="baseline"
                as={motion.div}
                variants={item}
              >
                <Text
                  fontFamily="title"
                  textShadow="1px 1px #292929"
                  color="primary"
                  fontSize={[".875rem", ".875rem", ".875rem", "1.5rem"]}
                  as={motion.p}
                  variants={item}
                  textAlign={["center", "center", "center", "left"]}
                >
                  {dev.name}
                </Text>
                <Text
                  fontFamily="title"
                  textShadow="1px 1px #292929"
                  fontSize={[".875rem", ".875rem", ".875rem", "1.5rem"]}
                  textAlign="center"
                  as={motion.p}
                  variants={item}
                >
                  {dev.role}
                </Text>
                <Flex
                  w="100%"
                  justifyContent={["center", "center", "center", "flex-end"]}
                  gridColumn={["span 2", "span 2", "span 2", "span 1"]}
                  fontSize={["2.5rem", "3rem"]}
                  as={motion.div}
                  variants={item}
                  gap={4}
                  mt={3}
                >
                  <Link href={dev.linkedIn} isExternal>
                    <FaLinkedin />
                  </Link>
                  <Link href={dev.gitHub} isExternal>
                    <FaGithub />
                  </Link>
                </Flex>
              </Grid>
              <Box
                marginTop="20px"
                fontFamily="text"
                textShadow="0px 3px #131313"
                fontSize={[".875rem", ".875rem", ".875rem", "1rem"]}
                opacity=".8"
                letterSpacing=".5px"
                as={motion.p}
                variants={item}
                gap={4}
              >
                {dev.description}
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
