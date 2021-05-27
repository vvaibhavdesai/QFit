import React, { createContext, useContext, ReactNode, useState,useEffect } from "react";

import { UserAnswer } from "../Pages/QuizCard";
import { QuizData } from "../QuizData/quiz.types";
import { firestore } from "./FireBase";

type DataContextApi = {
  showLoader:Boolean;
  setShowLoader:React.Dispatch<React.SetStateAction<Boolean>>;
  userAnswer: UserAnswer[];
  setUserAnswer: React.Dispatch<React.SetStateAction<UserAnswer[]>>;
  quizData: QuizData ;
  setQuizData: React.Dispatch<React.SetStateAction<QuizData>>
};

export const QuizDataContext = createContext<DataContextApi>(
  {} as DataContextApi
);

export function QuizDataContextProvider({ children }: { children: ReactNode }) {

  const [userAnswer, setUserAnswer] = useState < UserAnswer[] >([]);
  const [ quizData, setQuizData ] = useState < QuizData>({} as QuizData)
  const [showLoader, setShowLoader ] = useState< Boolean >(false)


  useEffect(()=>{
    (async function(){
      setShowLoader((prev)=>!prev)
      try{
        
        const firebaseData = firestore.collection('quizzes')
        const snapshot  = await firebaseData.get()
         snapshot.forEach(( doc )=>
           setQuizData(doc.data().data)
        )
        
        console.log(quizData,"yeh ref h ")

        setShowLoader((prev)=>!prev)
      }catch(error){
          console.log(error,"aya meh useeffect seh reh baba")
        }
    })()
    
},[])

console.log(quizData,"this is in function ")
  return (
    <QuizDataContext.Provider
      value={{
        userAnswer,
        setUserAnswer,
        showLoader,
        setShowLoader,
        quizData,
        setQuizData
      }}
    >
      {children}
    </QuizDataContext.Provider>
  );
}

export function useDataContext() {
  return useContext(QuizDataContext) as DataContextApi;
}
