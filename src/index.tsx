import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { QuizDataContextProvider } from "./Context/QuizContextProvider"
import App from "./App";

const rootElement = document.getElementById("root");
render(
  <ChakraProvider>
    <QuizDataContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </QuizDataContextProvider>
  </ChakraProvider>,
  rootElement
);
