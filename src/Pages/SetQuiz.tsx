import { useNavigate } from "react-router-dom";
import { Spinner, Button, Box, Flex, Heading, Text, Center } from "@chakra-ui/react";
import { useDataContext, } from "../Context/QuizContextProvider"



export function SetQuiz() {
  const navigate = useNavigate();
  const { quizData, showLoader } = useDataContext()


  return (
    <Center mt="4rem" h="auto">
      { showLoader ? <Box h="100vh" ><Spinner  size="xl" color="#ff9478" label="loading data" boxSize="10rem" /></Box> :
      <Box h="100vh" maxW="720px" minW="300px" centerContent>
        <Box className="glass-effect" p="1rem" m="0.5rem">
          <Heading color="white" m="1rem">
            Welcome To Fitness Quiz
          </Heading>
          <Text color="white" mb="1rem">
            Let's Check how aware are you with fitness !
          </Text>
          {quizData.data && quizData.data.map((item, idx: number) => {
            return (
              <Flex direction="column">
                <Center>
                  <Button
                    onClick={() => navigate(`/quiz/${idx}`)}
                    whiteSpace="normal"
                    wordWrap="break-word"
                    p="2rem"
                    m="1rem"
                    h="auto"
                    w="80%"
                    color="#ffff"
                    bg="#ff9478"
                    className="setquiz"
                    borderRadius="50px"
                  >
                    {" "}
                    {item.quizName}{" "}
                  </Button>
                </Center>
              </Flex>
            );
          })}
        </Box>
      </Box> }
    </Center>
  );
}
