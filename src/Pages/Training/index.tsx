import { Flex, Image, InputGroup } from "@chakra-ui/react";
import { CardTraining } from "../../Components/CardTraining";

import { useEffect, useState } from "react";

import { useAuth } from "../../Providers/AuthContext";

import { Input } from "../../Components/Input";

import TrainingImage from "../../Imgs/training.png";

interface Training {
  category: string;
  genre: "feminino" | "masculino";
  title: string;
  videoURL: string;
  description: string;
  id: number;
}

export const Training = () => {
  const { listTrainigs, loadTraining } = useAuth();
  const { accessToken, user } = useAuth();
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
    <Flex position="relative" w="100%" m="auto">
      <InputGroup>
        <Input onChange={({ target }) => findTraining(target.value)} />
      </InputGroup>
      <Flex
        flexDir="column"
        alignItems="center"
        w="100%"
        h="600px"
        overflowY="scroll"
      >
        {trainingFind.length > 0
          ? trainingFind.map((training) => (
              <CardTraining key={training.id} training={training} />
            ))
          : listTrainigs.map((training) => (
              <CardTraining key={training?.id} training={training} />
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
