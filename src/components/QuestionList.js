import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({question, onDelete}) {


  const soloQuestion = question.map((quest) => (
    <QuestionItem key = {quest.id} question = {quest} deleteQuestion = {onDelete} />
  ))
  //console.log(soloQuestion)

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{soloQuestion}</ul>
    </section>
  );
}

export default QuestionList;
