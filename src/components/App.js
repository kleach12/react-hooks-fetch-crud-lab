import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);
  // console.log(questions)

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setQuestions(data)
    })
  },[])

  function handleDeletedQuestion(deletedQuestion){
    const deleteQuest = questions.filter((question) => question.id !== deletedQuestion.id )
    setQuestions(deleteQuest)
    console.log(deletedQuestion.id)
  }

  function handleAddQuestion (quest){
    setQuestions([...questions, quest])
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion = {handleAddQuestion}/> : <QuestionList question ={questions} onDelete = {handleDeletedQuestion}/>}
    </main>
  );
}

export default App;
