//iterating all questions from database according to format given in Questions component

import React from "react";
import Questions from "./Questions";
function QuestionList({ questionList, darkMode }) {
  return (
    <>
      {questionList.map((question) => (
        <Questions question={question} key={question._id} darkMode={darkMode} />
      ))}
    </>
  );
}

export default QuestionList;
