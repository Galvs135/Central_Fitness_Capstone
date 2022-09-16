import { useEffect } from "react";

import { Flex, Image } from "@chakra-ui/react";
import { CardTraining } from "../../Components/CardTraining";

import { useAuth } from "../../Providers/AuthContext";

import TrainingImage from "../../Imgs/training.png";

export const Training = () => {
  const { listTrainigs, loadTraining } = useAuth();
  const { accessToken, user } = useAuth();

  useEffect(() => {
    if (accessToken) {
      loadTraining(accessToken, user);
    }
  }, []);

  return (
    <Flex position="relative" w="100%" m="auto">
      <Flex
        flexDir="column"
        alignItems="center"
        w="100%"
        h="600px"
        overflowY="scroll"
      >
        {listTrainigs.map((training) => (
          <CardTraining key={training.id} training={training} />
        ))}
      </Flex>

      <Image
        src={TrainingImage}
        display={["none", "none", "none", "none", "block"]}
        position="absolute"
        left="52%"
        top="20%"
        zIndex="-1"
        w="655px"
      />
    </Flex>
  );
};
