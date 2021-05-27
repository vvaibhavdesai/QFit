// import { quizData } from "./quizData/quizData";
import "./styles.css";
import { QuizCard } from "./Pages/QuizCard";
import { Routes, Route } from "react-router-dom";
import { DashBoard } from "./Pages/DashBoard";
import { SetQuiz } from "./Pages/SetQuiz";
import { Navbar } from "./Pages/Navbar";


export default function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<SetQuiz/>}></Route>
        <Route  path="/quiz/:quizId" element={<QuizCard/>}></Route>
        <Route path="/dashboard/:quizId" element={<DashBoard/>}></Route>
      </Routes>
    </div>
  );
}
