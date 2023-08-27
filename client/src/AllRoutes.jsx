import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import Questions from "./pages/Questions/Questions";
import AskQuestion from "./pages/AskQuestion/AskQuestion";
import DisplayQuestion from "./pages/Questions/DisplayQuestion";
import Tags from "./pages/Tags/Tags";
import Users from "./pages/Users/Users";
import Userprofile from "./pages/UserProfile/Userprofile";

function AllRoutes({ slideIn, handleSlideIn, darkMode }) {
  const theme = useSelector((state) => state.themeReducer);
  return (
    <div
      style={{
        backgroundColor: !theme && "#313030",
        color: !theme && "#e6e8eb",
      }}
    >
      <Routes>
        <Route
          path="/"
          element={
            <Home
              slideIn={slideIn}
              handleSlideIn={handleSlideIn}
              darkMode={darkMode}
            />
          }
        />
        <Route path="/auth" element={<Auth darkMode={darkMode} />} />
        <Route
          path="/questions"
          element={
            <Questions
              slideIn={slideIn}
              handleSlideIn={handleSlideIn}
              darkMode={darkMode}
            />
          }
        />
        <Route
          path="/askquestion"
          element={<AskQuestion darkMode={darkMode} />}
        />
        <Route
          path="questions/:id"
          element={
            <DisplayQuestion
              slideIn={slideIn}
              handleSlideIn={handleSlideIn}
              darkMode={darkMode}
            />
          }
        />
        <Route
          path="/tags"
          element={
            <Tags
              slideIn={slideIn}
              handleSlideIn={handleSlideIn}
              darkMode={darkMode}
            />
          }
        />
        <Route
          path="/users"
          element={
            <Users
              slideIn={slideIn}
              handleSlideIn={handleSlideIn}
              darkMode={darkMode}
            />
          }
        />
        <Route
          path="/users/:id"
          element={
            <Userprofile
              slideIn={slideIn}
              handleSlideIn={handleSlideIn}
              darkMode={darkMode}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default AllRoutes;
