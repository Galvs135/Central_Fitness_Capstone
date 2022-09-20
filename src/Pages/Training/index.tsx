import { Flex, Image, InputGroup, Input } from "@chakra-ui/react";
import { CardTraining } from "../../Components/CardTraining";
import TrainingImage from "../../Imgs/training.png";
import { useEffect, useState } from "react";
import { useAuth } from "../../Providers/AuthContext";

interface TrainingProps {
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
  const [trainingFind, setTrainingFind] = useState<TrainingProps[]>(
    [] as TrainingProps[]
  );

  useEffect(() => {
    if (accessToken) {
      loadTraining(accessToken, user);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const findTraining = (value: string) => {
    let findText = listTrainigs.filter(
      (element) =>
        element.category.toLowerCase().startsWith(value.toLowerCase()) ||
        element.title.toLowerCase().startsWith(value.toLowerCase())
    );
    setTrainingFind(findText);
  };

  return (
    <Flex
      position="relative"
      w="100%"
      m="auto"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <InputGroup>
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
          marginTop="100px"
          width={["90%", "90%", "95%", "30%"]}
          marginLeft="20px"
        />
      </InputGroup>
      <Flex
        flexDir="column"
        alignItems="center"
        w="100%"
        h="80vh"
        overflowY="scroll"
        marginTop="50px"
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
