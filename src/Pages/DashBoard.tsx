// import { quizData } from "../QuizData/quizData";
import { useLocation, useParams, NavLink } from "react-router-dom";
import { UserAnswer } from "./QuizCard";
import {
  ScaleFade,
  Box,
  Center,
  Text,
  Heading,
  Button
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { useDataContext } from "../Context/QuizContextProvider";

export function DashBoard() {
  const userAns = useLocation().state as UserAnswer[]
  console.log(userAns)
  const { userAnswer, setUserAnswer, quizData } = useDataContext();
  
 
  let { quizId } = useParams();

  let quizid: number = parseInt(quizId, 10);

  const score:number =
    userAns &&
    quizData.data[quizid].questions.reduce((prev: number, question) => {
      const ansObj = userAns.find(
        (ans) => ans.questionId === question.questionId
      );
      if (ansObj!.answer === question.answer) {
        return prev + 1;
      }
      return prev;
    }, 0);

  return (
    <Box p="1rem" minH="90vh" color="#fff">
      <Center>
        <Box className="glass-effect" maxW="800px" minW="300px">
          <ScaleFade in={true}>
            <Box
              bg="#564592"
              p="30px 30px 50px 30px"
              mt="0"
              mb="20px"
              className="score-board"
            >
              <Heading p="30px" size="md">
                Welcome to dashboard
                <Text> {userAns && `Score: ${score}/${userAns.length}`}</Text>
              </Heading>
            </Box>
            <Box textAlign="left" m="1" maxW="800px" minW="300px" p="1.5rem">
              {userAns &&
                quizData.data[quizid].questions.map((question) => {
                  const ansObj = userAns.find(
                    (ans) => ans.questionId === question.questionId
                  );
                  return (
                    <Box className="glass-effect-2" p="0.5rem" mb="1rem">
                      <Text
                        fontSize="xl"
                        p="0.5rem"
                        fontWeight="bold"
                        mb="2"
                        mt="2"
                      >
                        {question.questionId}.{question.question}
                      </Text>
                      {question.options.map((option, idx) => {
                        return (
                          <Text mb="2" ml="4" fontSize="lg" key={idx}>
                            {option.text}
                            <span>
                              {ansObj && ansObj.answer === option.optionId ? (
                                ansObj.answer === question.answer ? (
                                  <CheckIcon
                                    bg="#FF9478"
                                    p="5px"
                                    borderRadius="50%"
                                    ml="1rem"
                                    boxSize={6}
                                    color="white"
                                  />
                                ) : (
                                  <CloseIcon
                                    bg="#FF9478"
                                    p="5px"
                                    ml="1rem"
                                    borderRadius="50%"
                                    boxSize={6}
                                    color="white"
                                  />
                                )
                              ) : option.optionId === question.answer ? (
                                <CheckIcon
                                  bg="#FF9478"
                                  p="5px"
                                  borderRadius="50%"
                                  ml="1rem"
                                  boxSize={6}
                                  color="white"
                                />
                              ) : (
                                <span />
                              )}
                            </span>
                          </Text>
                        );
                      })}
                      
                    </Box>
                  );
                })}
              <Box>
                <Box>
                  {!userAns && (
                    <Box>
                      {" "}
                      Please attempt the quiz
                      <NavLink 
                      to="/">
                      <Button
                      height="auto"
                      p="1.5rem"
                      m="1rem"
                      whiteSpace="normal"
                      wordWrap="break-word"
                      justifyContent="flex-start"
                      color="#ffff"
                      bg="#83C3C3"
                      className="setquiz"
                      borderRadius="20px"
                      >
                        {" "}
                        go to quiz{" "}
                      </Button>
                      </NavLink>
                    </Box>
                  )}
                </Box>
              </Box>
            </Box>
          </ScaleFade>
        </Box>
      </Center>
      <Box>
        <NavLink to="/">
        <Button 
        height="auto"
        p="1.5rem"
        m="1rem"
        whiteSpace="normal"
        wordWrap="break-word"
        justifyContent="flex-start"
        color="#ffff"
        bg="#83C3C3"
        className="setquiz"
        borderRadius="20px"
        onClick={() => {setUserAnswer([]); return console.log("This is dashboard",userAnswer) }}
         >Go to New Quiz</Button></NavLink>
      </Box>
    </Box>
  );
}
