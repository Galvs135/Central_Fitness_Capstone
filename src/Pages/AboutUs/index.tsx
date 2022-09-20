import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import { theme } from "../../Styles/theme";
import { dataBase } from "./database";
import Triangle from "../../Imgs/Polygon2.svg";

interface Dev {
  image?: string;
  name?: string;
  role?: string;
  linkedin?: string;
  gitHub?: string;
  description?: string;
}

export const AboutUs = () => {
  useEffect(() => {
    setDev(dataBase[0]);
  }, []);

  const [dev, setDev] = useState<Dev>({} as Dev);

  return (
    <Flex
      as="section"
      flexDir={["column", "column", "column", "row"]}
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      pt="42px"
      minH="100vh"
      w="100vw"
      bgImage={["none", "none", "none", Triangle]}
      bgSize="contain"
      bgRepeat="no-repeat"
      bgPosition="top right"
    >
      <Flex
        flexDir={["row", "row", "row", "column"]}
        zIndex="2"
        alignItems="center"
        justifyContent={[
          "space-around",
          "space-around",
          "space-around",
          "center",
        ]}
        w={["90%", "90%", "80%", "20%"]}
        overflowY="hidden"
        marginTop={["50px", "50px", "50px", "0px"]}
        marginBottom={["50px", "50px", "50px", "0px"]}
        h="max-content"
      >
        {dataBase.map((element: Dev, index: number) =>
          element.name === dev.name ? (
            <Box
              key={index}
              marginTop="10px"
              background="white"
              width="100px"
              height="100px"
              borderRadius="50%"
              border="4px solid #f6cb33"
              onClick={() => setDev(element)}
              marginLeft={["5px", "5px", "5px", "0px"]}
            >
              <Image
                padding={["40px", "40px", "40px", "20% 20% 30% 40%"]}
                mt="2.5"
                mb="5"
                src={element.image}
              ></Image>
            </Box>
          ) : (
            <Box
              key={index}
              marginTop="10px"
              background="white"
              width="80px"
              height="80px"
              borderRadius="50%"
              onClick={() => setDev(element)}
              marginLeft={["5px", "5px", "5px", "0px"]}
            >
              <Image
                padding={["20px", "20px", "20px", "20% 20% 30% 40%"]}
                mt="2.5"
                mb="5"
                src={element.image}
              ></Image>
            </Box>
          )
        )}
      </Flex>
      <Box
        w={["80%", "80%", "80%", "5px"]}
        h={["5px", "5px", "5px", "540px"]}
        background="primary"
        zIndex="2"
      ></Box>
      <Flex flexDirection="column" width="80%" zIndex="2" alignItems="center">
        <Image
          src={dev.image}
          borderRadius="50%"
          width="200px"
          height="200px"
          marginTop={["20px", "20px", "20px", "0px"]}
        ></Image>
        <Box
          display="flex"
          flexDirection={["column", "column", "column", "row"]}
          width={["100%", "100%", "100%", "100%"]}
          maxWidth={["80%", "80%", "80%", "840px"]}
          justifyContent="space-between"
          alignItems="center"
          marginTop="20px"
        >
          <Text fontFamily="title" textShadow="1px 1px #292929" color="primary">
            {dev.name}
          </Text>
          <Text fontFamily="title" textShadow="1px 1px #292929">
            {dev.role}
          </Text>
          <Box display="flex" justifyContent="space-between" width="8%">
            <Link
              href={dev.linkedin}
              isExternal
              fontFamily="title"
              fontSize="20px"
              textShadow="1px 1px #292929"
            >
              <FaLinkedin />
            </Link>
            <Link
              href={dev.gitHub}
              isExternal
              fontFamily="title"
              fontSize="20px"
              textShadow="1px 1px #292929"
            >
              <FaGithub />
            </Link>
          </Box>
        </Box>
        <Box
          marginTop="20px"
          maxWidth={["80%", "80%", "80%", "840px"]}
          fontFamily="title"
          textShadow="1px 1px #292929"
        >
          {dev.description}
        </Box>
      </Flex>
    </Flex>
  );
};
