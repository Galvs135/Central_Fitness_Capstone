import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { useEffect } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { theme } from "../../Styles/theme";
import { useAuth } from "../../Providers/AuthContext";
import { useMuscle } from "../../Providers/Muscle";

interface Params {
  exerciseName: string;
}

export const Exercise = () => {
  const { listTrainigs, loadTraining } = useMuscle();
  const { exerciseName } = useParams<Params>();
  const { accessToken, user } = useAuth();

  const trainig = listTrainigs.find(
    (element) => element.title === exerciseName
  );

  useEffect(() => {
    loadTraining(accessToken, user);
  }, []);

  return (
    <Box>
      <Container display="flex" flexDirection="column" alignItems="center">
        <Flex
          display="flex"
          width={["90vw", "90vw", "80vw", "70vw"]}
          justifyContent="space-between"
          alignItems="center"
          height="8vh"
        >
          <Button></Button>
          <Button
            background={theme.colors.primary}
            color={theme.colors.black}
            fontFamily={theme.fonts.title}
            fontSize={["10px", "14px", "16px", "16px"]}
            as={ReactRouterLink}
            to="/training"
          >
            Voltar
          </Button>
        </Flex>

        <Flex
          display="flex"
          width={["100vw", "90vw", "80vw", "70vw"]}
          justifyContent={[
            "flex-start",
            "flex-start",
            "flex-start",
            "flex-start",
          ]}
          height="90vh"
          flexDirection="column"
          alignItems="flex-start"
        >
          <ReactPlayer url={trainig?.videoURL} width="100%" controls={true} />
          <Heading
            color={theme.colors.primary}
            fontSize={["20px", "20px", "30px", "40px"]}
            marginTop="15px"
          >
            {trainig?.title}
          </Heading>
          <Text
            fontSize={["12px", "16px", "18px", "18px"]}
            marginTop="5px"
            color={theme.colors.secondary}
          >
            {trainig?.category}
          </Text>
          <Text fontSize={["14px", "18px", "20px", "20px"]} marginTop="10px">
            {trainig?.description}
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};
