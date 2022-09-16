import { Flex, Heading, Image } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import AbdomenIcon from "../Imgs/abdomen_Icon.png";
import ArmIcon from "../Imgs/arm_Icon.png";
import BackIcon from "../Imgs/back_Icon.png";
import ChestIcon from "../Imgs/chest_Icon.png";
import LegIcon from "../Imgs/leg_Icon.png";

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
      return AbdomenIcon;
    }
    if (category === "perna") {
      return LegIcon;
    }
    if (category === "peito") {
      return ChestIcon;
    }
    if (category === "braço") {
      return ArmIcon;
    }
    if (category === "costas") {
      return BackIcon;
    }
  };

  const history = useHistory();
  const goToExercise = (path: string) => {
    history.push(`/training/${path}`);
  };

  return (
    <Flex
      w={["325px", "325px", "425px"]}
      bg="#686565"
      alignItems="center"
      m="12px 0px"
      borderRadius="8px"
      paddingLeft="3.5"
      paddingY="30px"
      cursor="pointer"
      onClick={() => goToExercise(training.title)}
    >
      <Image src={categoryFigure(training.category)} w="25px" h="25px" />
      <Heading as="h3" fontSize="14px" ml="2.5">
        {training.title}
      </Heading>
    </Flex>
  );
};
