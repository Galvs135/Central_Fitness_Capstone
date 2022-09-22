import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

import AbdomenImg from "../Imgs/abdomen_Img.png";
import ArmImg from "../Imgs/arm_Img.png";
import BackImg from "../Imgs/back_Img.png";
import ChestImg from "../Imgs/chest_Img.png";
import LegImg from "../Imgs/leg_Img.png";

interface Training {
  id: number;
  title: string;
  category: string;
  description: string;
  videoURL: string;
  genre: "feminino" | "masculino";
}

interface CardTrainingProps {
  training: Training;
}

export const CardTraining = ({ training }: CardTrainingProps) => {
  const categoryFigure = (category: string) => {
    if (category === "abdomen") {
      return AbdomenImg;
    }
    if (category === "perna") {
      return LegImg;
    }
    if (category === "peito") {
      return ChestImg;
    }
    if (category === "braço") {
      return ArmImg;
    }
    if (category === "costas") {
      return BackImg;
    }
  };
  const history = useHistory();

  const goToExercise = (path: string) => {
    history.push(`/training/${path}`);
  };

  return (
    <Box
      as={motion.div}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      layout
      cursor="pointer"
      onClick={() => goToExercise(training.title)}
      bgImage={categoryFigure(training.category)}
      bgRepeat="no-repeat"
      bgSize="cover"
      h="170px"
      minW={["100%"]}
      w="100%"
      rounded={8}
      overflow="hidden"
    >
      <Flex
        flexDirection="column"
        gap={2}
        alignItems="center"
        justifyContent="center"
        h="100%"
        bgGradient="linear-gradient(to-b, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 35%, rgba(0, 0, 0, 0.4) 65%, rgba(0, 0, 0, 0) 100%)"
      >
        <Heading as="h3" fontSize="lg">
          {training.title}
        </Heading>
        <Text fontSize="md">{training.category}</Text>
      </Flex>
    </Box>
  );
};
