import { Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { useEffect } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { useAuth } from "../../Providers/AuthContext";

interface Params {
  exerciseName: string;
}

export const Exercise = () => {
  const { exerciseName } = useParams<Params>();
  const { accessToken, user, listTrainigs, loadTraining } = useAuth();

  const trainig = listTrainigs.find(
    (element) => element.title === exerciseName
  );

  useEffect(() => {
    loadTraining(accessToken, user);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container
      display="flex"
      flexDirection="column"
      alignItems="center"
      maxW="container.xl"
    >
      <Button
        alignSelf="flex-end"
        background="primary"
        color="black"
        fontFamily="title"
        fontSize={["10px", "14px", "16px", "16px"]}
        as={ReactRouterLink}
        to="/training"
        m="15px 0"
      >
        Voltar
      </Button>

      <Flex
        display="flex"
        width={["100%", "100%", "100%", "100%"]}
        justifyContent={[
          "flex-start",
          "flex-start",
          "flex-start",
          "flex-start",
        ]}
        height={["350px", "400px", "500px", "760px"]}
        flexDirection="column"
        alignItems="flex-start"
      >
        <ReactPlayer
          url={trainig?.videoURL}
          width="100%"
          controls={true}
          height="60%"
        />
        <Heading
          color="primary"
          fontSize={["20px", "20px", "30px", "40px"]}
          marginTop="15px"
        >
          {trainig?.title}
        </Heading>
        <Text
          fontSize={["12px", "16px", "18px", "18px"]}
          marginTop="5px"
          color="secondary"
        >
          {trainig?.category}
        </Text>
        <Text fontSize={["14px", "18px", "20px", "20px"]} marginTop="10px">
          {trainig?.description}
        </Text>
      </Flex>
    </Container>
  );
};
