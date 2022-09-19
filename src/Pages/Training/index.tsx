import {
  Flex,
  InputGroup,
  Input,
  Grid,
  Container,
  Box,
} from "@chakra-ui/react";
import { CardTraining } from "../../Components/CardTraining";
import TrainingImage from "../../Imgs/training.png";
import { useEffect, useState } from "react";
import { useAuth } from "../../Providers/AuthContext";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

interface Training {
  category: string;
  genre: "feminino" | "masculino";
  title: string;
  videoURL: string;
  description: string;
  id: number;
}

export const Training = () => {
  const { accessToken, user, loadTraining, listTrainigs } = useAuth();
  const [trainingFind, setTrainingFind] = useState<Training[]>(
    [] as Training[]
  );

  useEffect(() => {
    if (accessToken) {
      loadTraining(accessToken, user);
    }
  }, []);

  const findTraining = (value: string) => {
    console.log(value);

    let findText = listTrainigs.filter(
      (element) =>
        element.category.toLowerCase().startsWith(value.toLowerCase()) ||
        element.title.toLowerCase().startsWith(value.toLowerCase())
    );
    setTrainingFind(findText);
  };

  return (
    <>
      <Grid
        gridTemplateRows="minmax(50px,65px) 1fr"
        bgImage={[TrainingImage]}
        bgPos="bottom right"
        bgRepeat="no-repeat"
        bgSize="50%"
      >
        <Container maxW="container.xl" px={4}>
          <InputGroup maxW="450px" mx="auto" mb={[2]}>
            <Input
              onChange={({ target }) => findTraining(target.value)}
              bg="#3D3522"
              borderColor="#000000"
              borderWidth="2px"
              _hover={{
                borderColor: "#000000",
                boxShadow: "0 0 0 2px #3d352245",
              }}
              _focus={{
                borderColor: "#000000",
                boxShadow: "0 0 0 3px #3d352245",
              }}
              width={["100%"]}
              placeholder="Pesquise seu treino..."
              pr={15}
              type="search"
            />

            <Box
              position="absolute"
              right={5}
              top="50%"
              transform="translateY(-50%)"
              zIndex="9"
            >
              <FaSearch />
            </Box>
          </InputGroup>
        </Container>
        <Grid
          px={4}
          as={motion.div}
          gridTemplateColumns={[
            "repeat(1,1fr)",
            "repeat(3,1fr)",
            "repeat(3,1fr)",
            "repeat(4,1fr)",
          ]}
          alignContent="start"
          justifyItems="center"
          pb={6}
          maxW="container.xl"
          w="100%"
          m="0 auto"
          gap={[4, 4, 6, 8]}
          h="80vh"
          overflowY="scroll"
          sx={{
            "&::-webkit-scrollbar": {
              width: "5px",
              borderRadius: "7px",
              backgroundColor: `transparent`,
            },
            "&::-webkit-scrollbar-thumb": {
              background: "primary",
            },
          }}
        >
          {trainingFind.length > 0
            ? trainingFind.map((training) => (
                <CardTraining key={training.id} training={training} />
              ))
            : listTrainigs.map((training) => (
                <CardTraining key={training?.id} training={training} />
              ))}
        </Grid>
      </Grid>
    </>
  );
};
