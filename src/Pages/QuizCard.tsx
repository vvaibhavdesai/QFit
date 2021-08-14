// import { quizData } from "../QuizData/quizData";
import { useEffect } from "react";
import { useDataContext } from "../Context/QuizContextProvider";
import { useNavigate, useParams } from "react-router-dom";
import {
  ScaleFade,
  Button,
  Flex,
  Box,
  Center,
  Text,
  Heading
} from "@chakra-ui/react";
import { useState } from "react";


export type UserAnswer = {
  questionId: number;
  answer: string;
};

export function QuizCard() {
  const {

    userAnswer,
    setUserAnswer,
    quizData
  } = useDataContext();
  const navigate = useNavigate();
  
  const { quizId } = useParams();
  const quizid = parseInt(quizId,10)
  
  const [questionIdx, setQuestionIdx] = useState<number>(0)
  
  const quizLength = quizData.data[0].questions.length + 1;
  
  useEffect(() => {
    if (questionIdx === quizData.data[quizid].questions.length) {
      navigate(`/dashboard/${quizid}`, { state: userAnswer });
    }
  }, [questionIdx]);

  function answerManager(questionId: number, optionId: string) {
    if (
      quizLength !== quizData.data[quizid].questions[questionIdx].questionId
    ) {
      setUserAnswer((answers) => [
        ...answers,
        { questionId: questionId, answer: optionId }
      ]);
      setQuestionIdx(questionIdx + 1);
    }
  }

  return (
    <Box h="100vh">
      <ScaleFade
        in={true
        }
      >
        <Center mt="2rem">
          <Box borderRadius="10px" w="80%" className="glass-effect" p="1.5rem">
            {quizData.data[quizid].questions[questionIdx] && (
              <Flex direction="column">
                <Heading color="#ffff" size="lg">
                  <span>
                    {quizData.data[quizid].questions[questionIdx].questionId}
                  </span>{" "}
                  . {quizData.data[quizid].questions[questionIdx].question}
                </Heading>
                {quizData.data[quizid].questions[questionIdx].options.map(
                  ({ text, optionId }, idx) => (
                    <Button
                      height="auto"
                      p="1.5rem"
                      m="1rem"
                      whiteSpace="normal"
                      wordWrap="break-word"
                      justifyContent="flex-start"
                      color="#ffff"
                      bg="#FF9478"
                      className="setquiz"
                      borderRadius="50px"
                      onClick={() =>
                        answerManager(
                          quizData.data[quizid].questions[questionIdx]
                            .questionId,
                          optionId
                        )
                      }
                      key={idx}
                    >
                      <Text textAlign="left"> {text} </Text>
                    </Button>
                  )
                )}
              </Flex>
            )}
          </Box>
        </Center>
      </ScaleFade>
    </Box>
  );
}
